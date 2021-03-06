import React, { useState } from 'react';
import "./topbar.css";
import {NotificationsNone, Language, Settings} from "@material-ui/icons"

const Topbar = () => {


    return (
            <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>shadoAdmin</span>
                </div>
                <div className="topRight">
                   <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className='topIconBadge'>2</span>
                   </div>
                   <div className="topbarIconContainer">
                        <Language/>
                        <span className='topIconBadge'>2</span>
                   </div>
                   <div className="topbarIconContainer">
                       <Settings/>
                   </div>
                   <div className="topbarIconContainer">
                  
                   </div>
                   <img src='' alt='' className='topAvatar'/>
                </div>
            </div>
        </div>        
    );
};

export default Topbar;