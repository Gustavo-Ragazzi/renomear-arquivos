import { useState, useEffect, createContext } from 'react'
import MainContainer from './components/MainContainer'
import SearchContainer from './components/SearchContainer'
import styled from "styled-components"
import { ipcRenderer } from 'electron'
import { readItemsFromFolder } from '../server/readItems'

const AppContainer = styled.body`
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background-color: #282b30;
`

function App() {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const items = await readItemsFromFolder();
        if(Array.isArray(items)) {
          setFiles(items);
        }
      } catch (error) {
        console.log(error);
      }
    }
  
    ipcRenderer.on('outputFilesList', (event, outputFilesList) => {
      setFiles(outputFilesList);
    });
    
    fetchData();

    const timer = 2000;
    const listUpdate = setInterval(fetchData, timer);

    return () => {
      ipcRenderer.removeAllListeners('outputFilesList');
      clearInterval(listUpdate);
    };
  }, []);

  return (
    <AppContainer>
      <MainContainer files={files}/>
      <SearchContainer />
    </AppContainer>
  )
}

export default App