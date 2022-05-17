import { Row, Col, } from "antd";
// import DraggablePage from "../components/draggable/draggable";
import EditPage from "../components/main/edit/edit";
import Main from "../components/main/main";
import Sidebar from "../components/sidebar";


const Root = () => {
    return (
        <Row>
            <EditPage />
            <Col span={8} >
                <Main />
                {/* <Test /> */}
            </Col>
            <Col span={16} >
                <Sidebar />
            </Col>
        </Row>
    );
}

export default Root;