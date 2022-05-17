import { Row, Col, Button, Input, Select } from "antd";
import { useState } from "react";
import './main.css'
import JadvalPage from "./table/jadval";
const Main = () => {
    const { Search } = Input;
    const [activeButton, setActiveButton] = useState(
        { today: true, night: false, before: false }
    )
    return (
        <>
            <Row>
                <h2>Crm-app</h2>
            </Row>
            <Row size="small" style={{ paddingLeft: '10px' }} >
                <Col span={11}  >
                    <Select
                        size="small"
                        className="SelectMainForFilter"
                        placeholder="Filter Brand"
                    >
                        <Select.Option value='1' >1</Select.Option>
                        <Select.Option value='2' >2</Select.Option>
                        <Select.Option value='3' >3</Select.Option>
                    </Select>
                </Col>
                <Col span={12} offset={1} >
                    <Search
                        size="small"
                        placeholder="search "
                        onSearch={(e) => console.log(e)}
                        enterButton
                    />
                </Col>
            </Row>
            <Row s style={{ paddingLeft: '10px', marginTop: '4%' }}  >
                <Col className="ButtonMainOne" span={8}>
                    <Button
                        size="small"
                        type={activeButton.before ? "primary" : "default"}
                        onClick={() => setActiveButton({ today: false, night: false, before: true })}
                    >
                        Day before
                    </Button>
                </Col>
                <Col className="ButtonMainOne" span={8}>
                    <Button
                        size="small"
                        type={activeButton.night ? "primary" : "default"}
                        onClick={() => setActiveButton({ today: false, night: true, before: false })}
                    >
                        Night
                    </Button>
                </Col>
                <Col className="ButtonMainOne" span={8}>
                    <Button
                        size="small"
                        type={activeButton.today ? "primary" : 'default'}
                        onClick={() => setActiveButton({ today: true, night: false, before: false })}
                    >
                        Today
                    </Button>
                </Col>
            </Row>
            <Row style={{ paddingLeft: '10px' }} >
                <Col span={24} >
                    <JadvalPage />
                </Col>
            </Row>
        </>
    );
}

export default Main;