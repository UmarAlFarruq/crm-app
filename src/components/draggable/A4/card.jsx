import './style.css';
import Draggable from 'react-draggable';
import { useContext, } from 'react';
import { GlobalObj } from '../../../context/context';
const Card = () => {
    // const localData = localStorage.getItem('draggableData')
    // const [todos, setTodos] = useState(localData ? JSON.parse(localData) : []);
    const [items] = useContext(GlobalObj)
    return (
        <div className='cardFatherDiv' >
            {items.localStorage.map((value, index) => {
                return (
                    <div key={index + 1} >
                        <Draggable    >
                            <div className='wrapperCard'  >
                                <h5>Name: {value.name}</h5>
                                <h5>Price: {value.price}</h5>
                                <h5>Size: {value?.size}</h5>
                            </div>
                        </Draggable>
                    </div>
                )
            })}
        </div>
    );
}

export default Card;