import React from 'react';
import './header.css';

export default function Header() {
    return (
        <div class="header">
            <div class="headerLeft">
                <img src="https://trialhub.findmecure.com/images/common/logo-white.png" class="headerLeftLogo" alt="findmecure-logo"/>
                <span class="headerLeftLogoSpan">TrialHub</span>
            </div>
            <div class="headerRight">
                <div class="headerRightLinks">
                    <span class="headerRightLink">Contact Us</span>
                    <span class="headerRightLink">Sign In</span>
                </div>
            </div>
        </div>
    );
}
