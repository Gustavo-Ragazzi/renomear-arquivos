import { ipcRenderer } from "electron"
import styled from "styled-components"
import { useState, useEffect, useRef } from "react"

const Container = styled.main`
    background-color: #424549;
    color: #c6c1c1;
    width: 50%;
    overflow: auto;
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`

const TableRow = styled.tr`
    :hover {
        background-color: #616468;
    }
`

const FileNameCell = styled.td`
    width: 45%;
    padding: 0 0.5em;
`

const NewNameInputCell = styled.td`
    width: 45%;
    padding: 0 0.5em;
`

const ButtonCell = styled.td`
    width: 10%;
    padding: 0 0.5em;
`

const Button = styled.button`
    font-size: 0.7em;
`

const FileName = styled.p`
    margin: 0;
`

const NewNameInput = styled.input`
    background-color:#424549;
    border: 1px solid #373a40;
    width: 100%;
    color: #c6c1c1;
`

export default function MainContainer(props: any) {
    const [inputValues, setInputValues] = useState<string[]>(props.files);
    const [allowUpdates, setAllowUpdates] = useState<boolean>(true);
    const initialFilesList = useRef<string[]>(props.files); 

    const handleInputChange = (index: number, value: string) => {
        const updatedInputValues = [ ...inputValues ];
        updatedInputValues[index] = value;
        setInputValues(updatedInputValues);
        setAllowUpdates(false);
    }

    useEffect(() => {
        if(allowUpdates && JSON.stringify(initialFilesList.current) != JSON.stringify(props.files)) {
            setInputValues(props.files);
        }
    }, [props.files]);

    return (
        <Container>
            <Table>
                <tbody>
                    {props.files.map((file: string, index: number) => (
                        <TableRow key={file}>
                            <FileNameCell>
                                <FileName key={file + "-p"}>{file}</FileName>
                            </FileNameCell>
                            <NewNameInputCell>
                                <NewNameInput
                                    name="newName"
                                    value={inputValues[index]}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                />
                            </NewNameInputCell>
                            <ButtonCell>
                                <Button type="button" className="btn-close" aria-label="Close" onClick={() => ipcRenderer.send("deleteFile", file)}></Button>
                            </ButtonCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}