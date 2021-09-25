import { useState } from "react";
import { Row, Col } from "reactstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import List from "./List";
import {BsFillPlusSquareFill} from 'react-icons/bs';
import FruitForm from "./FruitForm";
import Header from "../Layout/Header";


const Manager = () => {

    const {path, url} = useRouteMatch();

    const [fruits, setFruits] = useState([]);

    return (
        <>
            <Router>
                <Header></Header>
                <Row>
                    <Col xs={10}>
                        <h1>Product Manager</h1>
                    </Col>
                    <Col xs={2}>
                        <Link to={`${url}/new`}>
                            <BsFillPlusSquareFill style={{width: '100px'}}></BsFillPlusSquareFill>
                        </Link>
                    </Col>
                </Row>
                <Switch>
                    <Route exact path={`${path}`}>
                        <List fruits={fruits} setFruits={setFruits} />
                    </Route>
                    <Route path={`${path}/new`}>
                        <FruitForm new={true}/>
                    </Route>
                    <Route path={`${path}/edit/:id`}>
                        <FruitForm edit={true}/>
                    </Route>
                    <Route path={`${path}/view/:id`}>
                        <FruitForm view={true}/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Manager;