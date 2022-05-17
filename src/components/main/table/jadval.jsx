import { useContext, useState, useEffect } from "react";
import { Table, Select, Button } from "antd";
import { ArrowRightOutlined, PlusOutlined } from '@ant-design/icons'
import { GlobalObj } from '../../../context/context'
import './style.css'
const JadvalPage = () => {

    const { Option } = Select
    const [context, setContext] = useContext(GlobalObj);
    const localData = localStorage.getItem('data');
    const [todos, setTodos] = useState(localData ? JSON.parse(localData) : []);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(todos));
    }, [todos]);


    const columns = [
        { key: 1, title: 'Name', dataIndex: 'name' },
        { key: 2, title: 'Price', dataIndex: 'price' },
        {
            dataIndex: 'button', title: 'Action',
            fixed: "right", key: "x", width: 160,
            render: (v, record) => (
                <div style={{ width: '100%', display: 'flex', marginLeft: 'auto' }}>
                    <Select size="small" placeholder='size' >
                        <Option value='1'>1</Option>
                        <Option value='2'>2</Option>
                        <Option value='3'>3</Option>
                    </Select>
                    <div className="buttonTableRight"  >
                        <Button size="small"
                            onClick={() => {
                                setTodos([...todos,record]);
                            }}
                        >
                            <PlusOutlined />
                        </Button>
                        <Button type="primary" size="small"
                            onClick={() => setContext({ ...context, modal: true, modalData: record })}
                        >
                            <ArrowRightOutlined className="iconTableRight" />
                        </Button>

                    </div>
                </div >
            )
        },
    ]
    const data = [
        { key: 1, name: 'Samsung', price: '500$' },
        { key: 2, name: 'iPhone 12 Pro', price: '1200$' },
        { key: 3, name: 'Redmi7', price: '200$' },
        { key: 4, name: 'Redmi8', price: '200$' },
        { key: 5, name: 'Redmi9', price: '200$' },
        { key: 6, name: 'Redmi10', price: '200$' },
        { key: 7, name: 'iphone X', price: '300$' },
    ]
    return (
        <Table
            columns={columns}
            dataSource={data}
            size='small'
        />
    );
}

export default JadvalPage;