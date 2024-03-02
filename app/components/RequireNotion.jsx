"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

const RequireNotion = ({ notion }) => {

    const [menus, setMenus] = useState([]);
    useEffect(() => {
        const fetchMenus = async () => {
            const response = await fetch('/nav.json');
            const data = await response.json();
            setMenus(data);
        }
        fetchMenus();
    }, []);

    return (
        <div className="pb-6">
            <h4>Prérequis : </h4>
            <ul className="flex flex-wrap gap-4">
                {menus && menus.filter(item => notion.includes(item.lesson)).map((menu, index) => (
                    <Link key={index} href={`/${menu.lesson}`} className="border-2 rounded px-2 transition-all duration-300 bg-transparent hover:bg-blue-900 ">{menu.title}</Link>
                ))}
            </ul>
        </div>
    )
}

export default RequireNotion;
