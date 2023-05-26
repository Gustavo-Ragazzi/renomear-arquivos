import styled from "styled-components"

const Container = styled.main`
    background-color: #424549;
    color: #c6c1c1;
    width: 50%;
`

export default function MainContainer() {
    return (
        <Container>
            <p>Arquivo 1</p>
            <p>Arquivo 2</p>
            <p>Arquivo 3</p>
        </Container>
    )
}