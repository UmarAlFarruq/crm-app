import { useState, useEffect } from 'react';

const Test = () => {
    let localData = localStorage.getItem('test');
    const [item, setItem] = useState(localData ? JSON.parse(localData) : []);

    const [name, setName] = useState('');
    const add = () => {
        setItem((prev) => (
            [...prev, { id: Date.now(), name }]
        ))
        setName('');
    }



    function clear() {
        localStorage.removeItem('test');
        setItem([]);
    }


    useEffect(() => {
        localStorage.setItem('test', JSON.stringify(item));
    }, [item]);


    
    console.log('render');
    return (
        <div>
            <h1>Salom</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={add} >Add</button>
            {
                item.map((e, index) => {
                    return (
                        <div key={index} >
                            <h4>{e.name}</h4>
                        </div>
                    )
                })
            }
            <button onClick={clear} >clear</button>
        </div>
    );
}

export default Test;