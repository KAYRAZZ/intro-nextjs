"use client"
import { useState, useRef, useEffect } from 'react';

const Solution = ({ children }) => {
    const [state, setState] = useState(false);
    const divRef = useRef();

    const handleClick = () => {
        setState(!state);
    };

    useEffect(() => {
        if (state && divRef.current) {
            divRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [state]);

    return (
        <div
            ref={divRef}
            className={`flex flex-col border-2 rounded bg-white py-2 overflow-hidden ${!state ? 'h-[50px]' : 'h-full'}`}
        >
            <span onClick={handleClick} className="cursor-pointer text-black text-center m-auto w-full">Solution</span>
            {children}
        </div>
    );
};

export default Solution;