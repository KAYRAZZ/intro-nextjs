"use client"
import { useState, useEffect } from 'react';
export default function Home() {
    const [text, setText] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        console.log(text);
        setIsClicked(false);
    }, [isClicked]);

    return (
        <div>
            <input className='text-black' type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => setIsClicked(true)}>Valider</button>
        </div>
    );
}