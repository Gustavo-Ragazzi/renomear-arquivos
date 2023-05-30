import { useState, useEffect } from 'react'
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
  const [isFilesReceived, setIsFilesReceived] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const items = await readItemsFromFolder();
        if(Array.isArray(items)) {
          setFiles(items);
          setIsFilesReceived(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  
    ipcRenderer.on('outputFilesList', (event, outputFilesList) => {
      setFiles(outputFilesList);
      setIsFilesReceived(true);
    });
    
    fetchData();

    return () => {
      ipcRenderer.removeAllListeners('outputFilesList');
    };
  }, []);


  return (
    <AppContainer>
      {isFilesReceived ? (
        <MainContainer files={files} />
      ) : (
        <p>Loading...</p>
      )}
      <SearchContainer />
    </AppContainer>
  )
}

export default App
