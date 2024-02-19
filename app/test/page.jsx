"use client"
import { useEffect, useState } from "react";

const Lesson = () => {
    const [state, setState] = useState(0);

    useEffect(() => {
        console.log("1");
    });
    useEffect(() => {
        console.log("2");
    }, []);
    useEffect(() => {
        console.log("3");
    }, [state]);

    return (
        <div className="py-5">
            <button onClick={() => setState(state + 1)}>Bouton</button>
            Page de test
        </div>
    );
}

export default Lesson;