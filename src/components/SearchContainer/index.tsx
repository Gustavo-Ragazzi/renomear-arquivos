import { ipcRenderer } from "electron";
import styled from "styled-components"

const Container = styled.form`
    width: 50%;
    padding: 2em;
    height: 20px;
`

export default function SearchContainer() {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        
        const files = Array.from(event.target.elements.fileInput.files) as File[];
        const urls = files.map((file) => file.path);

        ipcRenderer.send("filesSelected", urls);
    };

    return (
        <Container className="input-group mb-3" onSubmit={handleSubmit}>
            <input type="file" className="form-control" id="inputGroupFile02" name="fileInput" multiple/>
            <button className="input-group-text" type="submit">Adicionar</button>
        </Container>
    )
}