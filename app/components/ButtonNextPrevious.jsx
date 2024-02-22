"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';


const ButtonNextPrevious = () => {
    const [menus, setMenus] = useState([]);
    const pathname = usePathname();


    useEffect(() => {
        const fetchMenus = async () => {
            const response = await fetch('/nav.json');
            const data = await response.json();
            setMenus(data);
        }
        fetchMenus();
    }, []);

    return (
        <div className="py-8">
            {menus.find(menu => (Number(menu.lesson) == Number(pathname.slice(1)) - 1) || (pathname.slice(1) - 1 == 0)) &&
                <Link href={`/${Number(pathname.slice(1)) - 1 !== 0 ? Number(pathname.slice(1)) - 1 : "/"}`} className='float-left'><span className="text-blue-500 hover:text-blue-300">← Previous</span></Link>
            }
            {menus.find(menu => Number(menu.lesson) == Number(pathname.slice(1)) + 1) &&
                <Link href={`/${Number(pathname.slice(1)) + 1}`} className='float-right'><span className="text-blue-500 hover:text-blue-300">Next →</span></Link>
            }
        </div>
    );
}

export default ButtonNextPrevious;