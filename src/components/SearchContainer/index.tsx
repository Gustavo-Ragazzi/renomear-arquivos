import { ipcRenderer } from "electron";
import styled from "styled-components"
import { CiImport, CiExport, CiEdit } from "react-icons/Ci"
import { useState } from "react";

const Container = styled.div`
    width: 50%;
    padding: 2em;
`

const AddFilesContainer = styled.form`
    height: 20px;
`

const ExpImpDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 2em;
    margin: 3em 0;
`

const RenameContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20vh;
`

export default function SearchContainer() {
    const [newNames, setNewNames] = useState<string[]>([]);
    const [renameSucess, setRenameSucess] = useState<boolean | null>(null);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        
        const files = Array.from(event.target.elements.fileInput.files) as File[];
        const urls = files.map((file) => file.path);

        ipcRenderer.send("filesSelected", urls);
    };

    function disableButtonAlert() {
        alert("Funcionalidade ainda não implementada")
    }

    function handleRenameClick() {
        const inputs= Array.from(document.querySelectorAll<HTMLInputElement>("input[name='newName']"));
        const values = inputs.map((input: HTMLInputElement) => input.value)
        setNewNames(values);
        console.log(`Lista de nomes: ${newNames}`);
        ipcRenderer.send("newNamesList", newNames);
    };

    return (
        <Container>
            <AddFilesContainer className="input-group mb-3" onSubmit={handleSubmit}>
                <input type="file" className="form-control" id="inputGroupFile02" name="fileInput" multiple/>
                <button className="input-group-text" type="submit">Adicionar</button>
            </AddFilesContainer>
            <ExpImpDiv>
                <button onClick={disableButtonAlert} type="button" className="btn btn-primary">Exportar CSV<CiExport /></button>
                <button onClick={disableButtonAlert} type="button" className="btn btn-primary">Importar CSV<CiImport /></button>
            </ExpImpDiv>
            <ExpImpDiv>
                <button onClick={disableButtonAlert} type="button" className="btn btn-primary">Exportar JSON<CiExport /></button>
                <button onClick={disableButtonAlert} type="button" className="btn btn-primary">Importar JSON<CiImport /></button>
            </ExpImpDiv>
            <RenameContainer>
                <button type="button" className="btn btn-primary" onClick={handleRenameClick}>Renomear<CiEdit /></button>
            </RenameContainer>
        </Container>
    )
}