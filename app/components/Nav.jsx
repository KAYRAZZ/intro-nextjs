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

    const menus = [
        { title: "Qu'est-ce que Next.js ?", lesson: "1" },
        { title: "Pourquoi utiliser Next.js ?", lesson: "2" },
        {
            title: "Installer et lancer un projet de Next.js", lesson: "3",
            subMenus: [
                { title: "Installer Next.js (ne pas réaliser)", lesson: "1" },
                { title: "Lancer un projet Next.js", lesson: "2" }
            ]
        },
        {
            title: "Les extensions", lesson: "4",
            subMenus: [
                { title: "JavaScript", lesson: "1" },
                { title: "JSX", lesson: "2" },
                { title: "La différence entre JS et JSX", lesson: "3" }
            ]
        },
        {
            title: "Utiliser le JSX", lesson: "5",
            subMenus: [
                { title: "Les différentes façon d'utiliser le JSX", lesson: "1" },
                { title: "Opérateur ternaire en JSX", lesson: "2" }
            ]
        },
        {
            title: "Les composants", lesson: "6",
            subMenus: [
                { title: "Qu'est-ce qu'un composant", lesson: "1" },
                { title: "Comment utiliser les composants", lesson: "2" }
            ]
        },
        {
            title: "Créer une page / route", lesson: "7",
            subMenus: [
                { title: "Créer une page statique", lesson: "1" },
                { title: "Créer une page dynamique", lesson: "2" }
            ]
        },
        {
            title: "Les server/client components", lesson: "8",
            subMenus: [
                { title: "Server components", lesson: "1" },
                { title: "Client components", lesson: "2" },
                { title: "Résumé", lesson: "3" },
            ]
        },
        {
            title: "Les gestionnaires d'événements", lesson: "9",
            subMenus: [
                { title: "Qu'est-ce qu'un gestionnaire d'événement", lesson: "1" },
                { title: "onClick", lesson: "2" },
                { title: "onChange", lesson: "3" },
            ]
        },
        {
            title: "Les hooks", lesson: "10",
            subMenus: [
                { title: "Qu'est-ce qu'un hook", lesson: "1" },
                { title: "useState", lesson: "1" },
                { title: "useEffect", lesson: "3" },
                { title: "useRef", lesson: "4" },
            ]
        },
    ];


    const handleMenuClick = (index, menu) => {
        if (activeMenu === index) {
            setActiveMenu(null);
        } else {
            setActiveMenu(index);
        }

        // Si le menu n'a pas de sous-menu, redirige vers la page
        if (!menu.subMenus) {
            router.push(`/${menu.lesson}`)
        }
    };

    const contentSpace = useRef([]);
    const [heights, setHeights] = useState(menus.map(() => '0px'));

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
        document.addEventListener('click', (e) => {
            if (refSidebar.current && !refSidebar.current.contains(e.target)) {
                refSidebar.current.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Définir la hauteur de la barre latérale pour éviter le défilement
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

    useEffect(() => {
        // Définir la hauteur de la barre latérale pour éviter le défilement
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                document.body.style.overflow = 'auto';
            } else {
                document.body.style.overflow = 'hidden';
            }
        };

        // Ajoutez le gestionnaire d'événement
        window.addEventListener('resize', handleResize);

        // Supprimez le gestionnaire d'événement lors du nettoyage
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div ref={refSidebar} className="sidebar h-screen w-[400px] max-sm:w-screen fixed z-10 bg-gray-800 overflow-y-auto">
            <Link href={"/"} className='flex justify-center text-white text-center font-bold py-6 text-2xl'>Initiation Next.JS</Link>
            <TbAlignJustified onClick={showSidebar} className='z-50 bg-white cursor-pointer text-black w-[35px] h-[35px] fixed top-[10px] left-[10px] hover:bg-slate-200 rounded' />

            {menus.map((menu, index) => (
                <div
                    key={index}
                    onClick={() => handleMenuClick(index, menu)}
                    className={`relative border-gray-300 flex flex-col justify-between items-center cursor-pointer border-t-2 ${index === menus.length - 1 ? 'border-b-2' : ""}`}
                >
                    <div className={`transition-all duration-500 hover:bg-zinc-900 w-full relative flex flex-row justify-between p-3 ${pathname === `/${menu.lesson}` ? 'bg-gray-900' : 'bg-gray-800'}`}>
                        <span className="text-white text-lg w-full text-left">{menu.title}</span>
                        <span className='m-auto text-white'>
                            {menu.subMenus && (<FaCaretRight className={`transition-all duration-250 ${activeMenu === index ? "rotate-90" : "rotate-0"}`} />)}
                        </span>
                    </div>

                    {menu.subMenus && (
                        <div ref={el => contentSpace.current[index] = el}
                            style={{ maxHeight: `${heights[index]}` }} className="w-full transition-all duration-[500ms] overflow-hidden flex flex-col">
                            {menu.subMenus.map((subMenu, i) => (
                                <Link href={`/${menu.lesson}#${subMenu.lesson}`} key={i} onClick={(event) => event.stopPropagation()} className={`transition-all duration-300 hover:bg-zinc-800 p-3 text-sm w-full text-left border-gray-600 border-t ${index === menu.subMenus.length - 1 ? 'border-b' : ""}`}
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