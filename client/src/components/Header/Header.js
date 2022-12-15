import { useContext } from 'react';
import { ContextS } from '../../ContextS';
import { Navbar, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BsFillEnvelopeFill, BsFillPlusCircleFill } from 'react-icons/bs';
import { IoLogOut } from 'react-icons/io5'
import LOGO from './MPLOGO.png'
import './Header.css'

function Header() {
    const { userData, setUserData } = useContext(ContextS)

    return (
        <Navbar collapseOnSelect bg="light" variant="light">
            <div className="container">
                <Navbar.Brand>
                    <NavLink className="navbar-brand" to="/">
                        <img className="logo-config" src={LOGO} alt="user-avatar"/>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    {userData ?
                        (<Nav>
                            <NavLink className="nav-item" id="addButton" to="/add-product">
                                <OverlayTrigger key="bottom" placement="bottom"
                                    overlay={
                                        <Tooltip id={`tooltip-bottom`}>
                                            <strong>Add</strong>  a sell.
                                        </Tooltip>
                                    }
                                > 
                                    <BsFillPlusCircleFill />
                                </OverlayTrigger>
                            </NavLink>
                                <NavLink className="dropdown-item" to={`/profile/${userData._id}`}>
                                    <div className="usernamecover">
                                        <div className="username">
                                            <img id="navImg" src={userData.avatar} alt="user-avatar"/> {userData.name} 
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink className="dropdown-item" to="/messages">
                                    <div className='messages'>
                                        <div className='message'>
                                            <BsFillEnvelopeFill className="msg-icon" />Messages
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink className="dropdown-item" to="/auth/logout" onClick={() => {setUserData(null)}}>
                                    <div className="logout">
                                        <IoLogOut />Log out
                                    </div>
                                </NavLink>
                        </Nav>)
                        :
                        (<Nav>
                            <NavLink className="nav-item cnts-btn" id="nav-sign-in" to="/auth/login">
                                Sign In
                            </NavLink>
                            <NavLink className="nav-item cnts-btn" id="nav-sign-up" to="/auth/register">
                                Sign Up
                            </NavLink>
                        </Nav>)
                    }
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Header;