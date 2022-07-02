import { Container , Title } from "./HeaderStyle";

const Head = ({title}) => {

    return(
        <Container>
            <Title>{title}</Title>
        </Container>
    );
}

export default Head;