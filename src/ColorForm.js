import React, { useState } from 'react'

function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addColor(input);
        setInput('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ex: Blue, Yellow, Etc..."
                onChange={(e) => setInput(e.target.value)}
                value={input}
                />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}


export default ColorForm