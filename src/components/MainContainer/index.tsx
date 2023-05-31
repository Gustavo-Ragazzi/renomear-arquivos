import { ipcRenderer } from "electron"
import styled from "styled-components"

const Container = styled.main`
    background-color: #424549;
    color: #c6c1c1;
    width: 50%;
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
    return (
        <Container>
            <Table>
                <tbody>
                    {props.files.map((file: string) => (
                        <TableRow key={file}>
                            <FileNameCell>
                                <FileName key={file + "-p"}>{file}</FileName>
                            </FileNameCell>
                            <NewNameInputCell>
                                <NewNameInput name="newName"/>
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