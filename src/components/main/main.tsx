import React from 'react';
import './main.css'
import Logo from '../../images/logo.png'
import { BsGithub } from 'react-icons/bs'
import Banner from '../../images/spacex2.jpg'
import LaunchComponent from '../launches';

function Main() {
    return (
        <div className='main_div'>
            <div className='extra_div_top'></div>
            <div className='header'>
                <div className='icon'>
                    <img src={Logo} alt="logo" width="300px" />
                </div>
                <div className='menu'>
                    <div className='menu_1'><a href='#launches'>Launches</a></div>
                    <div className='menu_2'><a href="https://github.com/OkashaTanoli" rel='noreferrer' target='_blank'><BsGithub size={30} className='github_icon' /></a></div>
                </div>
            </div>
            <div className='banner_div'>
                <img src={Banner} alt="banner" className='banner_img' />
                <div className='banner_background'>
                    <div className='banner_text'>
                        <h1>SpaceX  <span className='mission'>Mission</span> </h1>
                        <div className='extra_div_banner'></div>
                        <p>
                            SpaceX was founded in 2002 by Elon Musk with the goal of reducing space transportation
                            costs to enable the colonization of Mars. The company is also developing Starship,
                            a privately funded, fully reusable, super heavy-lift launch system for interplanetary
                            spaceflight.</p>
                    </div>
                </div>
            </div>

            <LaunchComponent />
            <div className='copy_right'>
                OKASHA_TANOLI copyright _©_ 2021
            </div>
        </div>
    );
}

export default Main;