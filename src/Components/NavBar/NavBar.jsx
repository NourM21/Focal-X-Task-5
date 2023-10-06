import "./NavBarStyle.css"
import { Link } from 'react-router-dom'
import Head from './../Head/Head'
import { headInfo, headBtns } from "./../../Data/HeaderData.js"

const NavBar = ({logo, links, enroll}) => {
    return (
        <>
            <Head headInfo={headInfo} headBtns={headBtns}/>
            <nav className="navbar">
                <a className="logo">{logo}</a>
                <ul>
                    {links.map((link) => <Link to={link.linkpath}
                                            key={link.id}
                                            style={{ color: 'white',
                                                    textDecoration: 'none',
                                                    fontSize: '15px'}}>
                                            {link.text}
                                        </Link>)}
                </ul>
                <button>{enroll}</button>
            </nav>
            </>
    )
}

export default NavBar