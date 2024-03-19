"use client"
import React, { useEffect, useRef, useState } from 'react';
import { FaCaretRight } from 'react-icons/fa';
import { TbAlignJustified } from "react-icons/tb";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'

const SideNav = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const pathname = usePathname()
    const router = useRouter();
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        // Récupère les menus
        const fetchMenus = async () => {
            const response = await fetch('/nav.json');
            const data = await response.json();
            setMenus(data);
            setHeights(data && data.map(() => '0px'));
        }
        fetchMenus();
    }, []);


    const handleMenuClick = (index, menu) => {
        setActiveMenu(prevIndex => prevIndex === index ? null : index);

        // Si le menu n'a pas de sous-menu, redirige vers la page
        if (!menu.subMenus) {
            router.push(`/${menu.lesson}`)
        }
    };

    const contentSpace = useRef([]);
    const [heights, setHeights] = useState(menus && menus.map(() => '0px'));

    useEffect(() => {
        setHeights(heights =>
            heights.map((height, index) =>
                activeMenu === index && contentSpace.current[index] ? `${contentSpace.current[index].scrollHeight}px` : "0px"
            )
        );
    }, [activeMenu]);


    const refSidebar = useRef(null);
    const showSidebar = () => {
        refSidebar.current.classList.toggle('active');
        // Met le body en overflow hidden si le menu est ouvert
        // Evite le scroll de la page lorsqu'on est sur mobile
        if (window.innerWidth <= 640 && refSidebar.current.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    useEffect(() => {
        // Ferme le menu si on clique en dehors
        document.addEventListener('click', (e) => {
            if (refSidebar.current && !refSidebar.current.contains(e.target)) {
                refSidebar.current.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Evite le défilement si l'écran est inférieur à 640px lors de d'un resize
        // Ou si le menu est ouvert avec un écran inférieur à 640px
        const handleResize = () => {
            if ((window.innerWidth >= 640) || (window.innerWidth <= 640 && !refSidebar.current.classList.contains('active'))) {
                document.body.style.overflow = 'auto';
            } else {
                document.body.style.overflow = 'hidden';
            }
        };
        handleResize()

        // Ajoutez le gestionnaire d'événement
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('click', () => { });
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div ref={refSidebar} className="sidebar h-screen w-[400px] max-sm:w-screen fixed overflow-auto z-10 border-r-2 border-white">
            <Link href={"/"} className='flex justify-center text-white text-center font-bold py-6 text-2xl'>Initiation Next.JS</Link>
            <TbAlignJustified onClick={showSidebar} className='z-50 bg-white cursor-pointer text-black w-[35px] h-[35px] fixed top-[10px] left-[10px] hover:bg-slate-200 rounded' />

            {menus.map((menu, index) => (
                <div
                    key={index}
                    onClick={() => handleMenuClick(index, menu)}
                    className={`relative border-gray-300 flex flex-col justify-between items-center cursor-pointer border-t-2 ${index === menus.length - 1 ? 'border-b-2' : ""}`}
                >
                    <div className={`transition-all duration-500 hover:bg-[rgb(20,0,45)] w-full relative flex flex-row justify-between p-3 ${pathname === `/${menu.lesson}` && 'bg-[rgb(20,0,35)]'}`}>
                        <span className="text-white text-lg w-full text-left">{menu.title}</span>
                        <span className='m-auto text-white'>
                            {menu.subMenus && (<FaCaretRight className={`transition-all duration-300 ${activeMenu === index ? "rotate-90" : "rotate-0"}`} />)}
                        </span>
                    </div>

                    {menu.subMenus && (
                        <div ref={el => contentSpace.current[index] = el}
                            style={{ maxHeight: `${heights[index]}` }} className="w-full transition-all duration-500 overflow-hidden flex flex-col">
                            {menu.subMenus.map((subMenu, i) => (
                                <Link href={`/${menu.lesson}#${subMenu.lesson}`} key={i} onClick={(event) => event.stopPropagation()} className={`transition-all duration-300 bg-[rgb(20,0,40)] hover:bg-[rgb(20,0,30)] p-3 text-sm w-full text-left border-gray-600 border-t ${index === menu.subMenus.length - 1 ? 'border-b' : ""}`}
                                >{subMenu.title}</Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SideNav;