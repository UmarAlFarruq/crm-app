import { DeleteOutlined } from '@ant-design/icons';
import { Button, Col } from 'antd';
const Clear = () => {
    const clear = () => {
        localStorage.clear();
        localStorage.removeItem('data');
    }

    return (
        <Col span={4} offset={16} >
            <Button
                style={{ width: '96%' }}
                type='danger'
                onClick={clear}
                size='small'
            >
                Clear <DeleteOutlined className='clearAndPrintButtonContentIcon' />
            </Button>
        </Col>
    );
}

export default Clear;