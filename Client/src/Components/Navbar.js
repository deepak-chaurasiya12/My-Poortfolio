import { Link } from "react-router-dom";
import "../Components/Asset/Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
import React, { useState } from 'react';

const Navbar = () => {
    const[click, setClick]=useState(false);

    const handClick=()=>{
        setClick(!click)

    }

// change the color of navbar as scrolled down
    const [color, setColor]=useState(false)

    const changeColor=()=>{
        if(window.scrollY>=100){
            setColor(true);
        } else{
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor)

    return (
        <div className={color ? "header header-bg": "header"}>
            <Link to={"/"}>
                <h1>My Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active":" nav-menu"}> 
                <li>
                    <Link to={"/"}>Home</Link>
                </li>

                <li>
                    <Link to={"/project"}>Projects</Link>
                </li>

                <li>
                    <Link to={"/skills"}>Skills</Link>
                </li>

                <li>
                    <Link to={"/about"}>About</Link>
                </li>

                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>

            </ul>

            <div className="hamburger" onClick={handClick}>
                {click ? (<FaTimes size={20} style={{color:"#fff"}}/>) :(<FaBars size={20} style={{color:"#fff"}}/>) }
            </div>

        </div>
    )
}

export default Navbar


