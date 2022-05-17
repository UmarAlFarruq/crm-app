import { Row, } from 'antd';
import './draggable.css'
import DraggableA4 from './A4/draggablePage';
import HeaderDrog from './headerDrog';
const DraggablePage = () => {

    return (
        <Row className='wrapperDraggable'  >
            <HeaderDrog />
            <div className='minWrapperDraggable' >
                <DraggableA4 />
            </div>
        </Row>
    );
}

export default DraggablePage;