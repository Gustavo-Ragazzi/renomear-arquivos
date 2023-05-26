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

        files.map((file: File) => (
            console.log(`Arquivo selecionado: ${file.path}`)
        ))
    };

    return (
        <Container className="input-group mb-3" onSubmit={handleSubmit}>
            <input type="file" className="form-control" id="inputGroupFile02" name="fileInput" multiple/>
            <button className="input-group-text" type="submit">Adicionar</button>
        </Container>
    )
}