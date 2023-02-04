import React from "react";
import Feed from "../Feed/Feed";
import Inputpost from "../Feed/Inputpost/Inputpost";

import './Home.css';
import Sidebar from "./Sidebar/Sidebar";
import Widgets from "./Widgets/Widgets";



const Home = () => {
    
    return (
        <div className="home-container">
            <div className="container">
                <div className="home-sidebar-box">
                    {/* <div className="home-side-bar-alphauser"><h1>hii</h1></div>
                    <div className="home-side-bar-recents"><h1>hello</h1></div> */}
                    <Sidebar/>
                </div>
                <div className="home-center-box">
                    <div className="home-center-post-box">
                        <Inputpost />
                        <Feed />
                    </div>
                </div>
                <div className="home-right-box">
                    <Widgets />
                </div>
            </div>
        </div>
    );
};
export default Home