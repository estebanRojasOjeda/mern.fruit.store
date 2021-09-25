import Header from '../parent/Header';
import Content from '../parent/Content';
import NavBar from './NavBar';
import "./style/parent.css";

const Parent = () => {
    return (
        <div className="layout">
            <Header></Header>
            <NavBar></NavBar>
            <Content></Content>
        </div>
    )
}

export default Parent;