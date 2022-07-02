import { Container, Form, Input, SearchButton } from "./SearchStyle";

const Search = () => {

    return(
        <Container>
            <Form>
                <SearchButton type="submit"><i className="fa fa-search"></i></SearchButton>
                <Input type="text" placeholder="ابحث في مركز المساعدة" name="search" />
            </Form>
        </Container>
    );
}

export default Search;