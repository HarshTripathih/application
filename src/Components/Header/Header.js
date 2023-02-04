import React from "react";
import './Header.css';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import chatlogo from '../Images/chatlogo.png';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";


export default function Header() {
    const { user, logout } = useAuth0();
    console.log(user)
    return (
        <div className="header-container">
            <div className="header-nav-box">
                <div className="header-left-part-box">
                    <Link to='/'>
                        <div className="header-logo-box"><img src={chatlogo} alt="error" /></div>&nbsp;
                    </Link>
                    <div className="header-search-box"><TextField variant="filled" defaultValue="SEARCH..." size="small" style={{ backgroundColor: 'white' }} /></div>
                </div>
                <div className="header-right-part-box">
                    <Link to='/'>
                        <div className="header-alpha-user-box"><a><p>HI,{user?.given_name}</p></a></div>
                    </Link>
                    <Link to='/home'>
                        <div className="header-home-box"><a href=""><p>HOME</p></a></div>
                    </Link>
                    <Link to='/aboutus'>
                        <div className="header-aboutus-box"><a href=""><p>ABOUT US</p></a></div>
                    </Link>
                    <Link to='profile'>
                        <div className="header-profile-box"><a href=""><p>PROFILE</p></a></div>
                    </Link>
                    <div className="header-darkmode-box"><a href=""><p>DARK MODE</p></a></div>
                    <div className="header-logout-box" style={{ display: 'flex', alignItems: 'center' }}>
                        <Button variant="contained" onClick={() => logout({ returnTo: window.location.origin })}>LOGOUT</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}