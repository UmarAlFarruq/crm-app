import { Row, Button, Col } from 'antd';
import './draggable.css';
import { DeleteOutlined, PrinterOutlined } from '@ant-design/icons';
const HeaderDrog = () => {
    const clear = () => {
        localStorage.removeItem('draggable')
        localStorage.clear()
    }
    return (
        <Row className="clearAndPrintButtonContent" >
            <Col
                span={4} offset={16}
            >
                <Button
                    style={{ width: '96%' }}
                    type='danger'
                    onClick={clear}
                    size='small'
                >
                    Clear <DeleteOutlined className='clearAndPrintButtonContentIcon' />
                </Button>
            </Col>
            <Col span={4} offset={0}  >
                <Button
                    type='primary'
                    size='small'
                >
                    Printer  <PrinterOutlined className='clearAndPrintButtonContentIcon' />
                </Button>
            </Col>
        </Row>
    );
}

export default HeaderDrog;