import { Form, Input, InputNumber, Modal, Button, Row, Col, Select } from "antd";
import { GlobalObj } from '../../../context/context';
import { useContext, useEffect, } from 'react';
const layout = {
    labelCol: {
        span: 4,
        offset: 3
    },
    wrapperCol: {
        span: 12,
    },
};
const EditPage = () => {
    const [form] = Form.useForm();
    const { Option } = Select;
    const [context, setContext] = useContext(GlobalObj);
    const { modal, modalData } = context;

    useEffect(() => {
        const handleReset = () => {
            form.resetFields();
        }
        handleReset();
    }, [modal]);

    return (
        <div>
            <Form
                {...layout}
                form={form}
                name="edit"
                size="small"
                initialValues={{
                    ...modalData
                }}
            >
                <Modal
                    title={'Edit data'}
                    visible={modal}
                    onCancel={() => setContext({ ...context, modal: false })}
                    footer={false}
                    size="large"

                >
                    <Form.Item
                        label="Name"
                        name="name"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="price"
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        label="Size"
                        name="size"
                    >
                        <Select>
                            <Option value="1" >1</Option>
                            <Option value="2" >2</Option>
                            <Option value="3" >3</Option>
                        </Select>
                    </Form.Item>
                    <Row>
                        <Col offset={7} span={12} >
                            <Button
                                type="primary"
                                style={{ width: '100%' }}
                                htmlType='submit'
                                onClick={() => setContext({ ...context, modal: false })}
                            >
                                Save
                            </Button>
                        </Col>
                    </Row>
                </Modal>
            </Form>
        </div>
    );
}

export default EditPage;