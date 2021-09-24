import { ListGroup, ListGroupItem } from 'reactstrap';
import "./style/navbar.css";

const NavBar = () => {
    return (
        <div className="container-list">
            <ListGroup>
                <ListGroupItem active tag="button" action>Cras justo odio</ListGroupItem>
                <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
                <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem disabled tag="button" action>Vestibulum at eros</ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default NavBar;