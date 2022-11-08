import React, { useState } from 'react'
import "./Style.css";
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from "./Navbar";


const uniquelist = [...new Set(Menu.map((curElemt) => {
    return curElemt.category
})), "All"
]

console.log(uniquelist);

const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniquelist)

    const filterItem = (category) => {

        if (category === "All") {
            setMenuData(Menu);
            return
        }

        const updatedlist = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedlist);
    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant