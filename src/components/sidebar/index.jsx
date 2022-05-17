import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
// import DraggableA4 from '../draggable/A4/draggablePage';
import { Button, Col, Row } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';
import Clear from './printPage/clear';
import "./style.css"

export default function Sidebar() {
    const printPreviewRef = useRef();

    return (
        <div className='wrapperPrintPageComponent'  >
            <Row className='wrapperButtonPrintPageDiv'  >
                <Clear />
                <Col span={4} offset={0}  >
                    <ReactToPrint
                        trigger={() =>
                            <Button size='small' type='primary' >Printer
                                <PrinterOutlined className='clearAndPrintButtonContentIcon' />
                            </Button>}
                        content={() => printPreviewRef.current}
                    />
                </Col>
            </Row>
            <div className="print-preview" ref={printPreviewRef}>
                {/* <DraggableA4 /> */}
            </div>
        </div>
    );
};