import { ipcRenderer } from "electron"
import styled from "styled-components"

const Container = styled.main`
    background-color: #424549;
    color: #c6c1c1;
    width: 50%;
    padding: 0.5em 0;
`

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 0.5em;
    :hover {
        background-color: #616468;
    }
`

const Button = styled.button`
    align-self: center;
    font-size: 0.7em;
`

const FileName = styled.p`
    align-self: center;
    margin: 0;
`

export default function MainContainer(props: any) {
    console.log(props.files)

    return (
        <Container>
            {props.files.map((file: string) => (
                <Item>
                    <FileName key={file}>{file}</FileName>
                    <Button type="button" className="btn-close" aria-label="Close" onClick={() => ipcRenderer.send("deleteFile", file)}></Button>
                </Item>
            ))}
        </Container>
    )
}