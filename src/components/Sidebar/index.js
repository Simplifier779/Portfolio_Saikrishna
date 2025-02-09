import './index.scss';
import {Link,NavLink} from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import {faHome,faEnvelope,faUser} from '@fortawesome/free-solid-svg-icons';
import LogoS from 'C:/Users/karra/Documents/NodeApp/portfolio/src/assets/images/logo-s.png';
import SaiKrishna from 'C:/Users/karra/Documents/NodeApp/portfolio/src/assets/images/SaiKrishna.png';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={SaiKrishna} alt="Saikrishna" />
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank"/*open in new page*/ rel='noreferrer' href='https://www.linkedin.com/in/saikrishna-karra'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank"/*open in new page*/ rel='noreferrer' href='https://github.com/Simplifier779'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>    

    </div>
)
    


export default Sidebar;