import React from 'react';
import '../assets/css/social_menu/SocialMenu.scss';
import { SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl';
import { SiGmail } from 'react-icons/si';
import { FaUserSecret } from 'react-icons/fa';
import { MdFileDownload } from 'react-icons/md';
// import CvDown from '../assets/documents/EN_CV_AlfredoEspinosa_2025.pdf'

const SocialMenu: React.FC = () => {
  return (
    <nav className="social-nav nav-social">
      <ul>
        <li>
          <a className='flex justify-center items-center' href="#AboutMe"><FaUserSecret /></a>
          <ul>
            <li><a className='flex justify-center items-center' href="https://www.linkedin.com/in/luis-alfredo-espinosa-caballero-24609a186/" target="_blank"><SlSocialLinkedin /></a></li>
            <li><a className='flex justify-center items-center' href="https://github.com/FredEspinosa" target="_blank"><SlSocialGithub /></a></li>
            <li><a className='flex justify-center items-center' href="mailto:alfredodicio490@gmail.com" target="_blank"><SiGmail /></a></li>
            {/* <li><a className='flex justify-center items-center' href="../assets/documents/EN_CV_AlfredoEspinosa_2025.pdf" target="_blank"><MdFileDownload /></a></li> */}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SocialMenu;
