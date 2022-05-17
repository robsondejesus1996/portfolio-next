import NavLink from "../components/Header/NavLink";
import { Container } from "../components/Header/styles";


function Header() {
    return (
        <Container>
            <ul>
                <NavLink title="Home" path="/"/>
                <NavLink title="Projetos" path="/projetos"/>
            </ul>
        </Container>
    );
};

export default Header;