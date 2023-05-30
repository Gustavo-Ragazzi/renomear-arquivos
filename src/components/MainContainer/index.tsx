import styled from "styled-components"

const Container = styled.main`
    background-color: #424549;
    color: #c6c1c1;
    width: 50%;
`

export default function MainContainer(props: any) {
    console.log(props.files)
    return (
        <Container>
            {props.files.map((file: string) => (
                <p>{file}</p>
            ))}
        </Container>
    )
}