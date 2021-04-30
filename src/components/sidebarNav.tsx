/* eslint-disable no-use-before-define */
import React from 'react';
import {
  FaLinkedinIn,
  FaBehance,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';
import getProfileData from '../data/data';
// import ScrollToTopButton from './scrollToTopButton';

const SidebarNav = () => {
  const profileData = getProfileData();

  const getSocialData = (key: string, icon: any) => {
    const socialLink = profileData.socials.filter((x) => x.name === key);
    if (socialLink.length > 0) {
      return <a className="social-link mt-2 d-block text-center" href={socialLink[0].url}>{icon}</a>;
    }
    return <></>;
  };

  return (
    <>
      <div className="height-100vh position-fixed sidebar-nav left d-flex flex-column justify-content-end">
        <div className="sidebar-nav-content d-flex flex-column justify-content-end">
          {getSocialData('Github', <FaGithub />)}
          {getSocialData('LinkedIn', <FaLinkedinIn />)}
          {getSocialData('Facebook', <FaFacebook />)}
          {getSocialData('Instagram', <FaInstagram />)}
          {getSocialData('Behance', <FaBehance />)}
        </div>
        <div className="sidebar-nav-ruler" />
      </div>
      <div className="height-100vh position-fixed sidebar-nav right d-flex flex-column justify-content-end">
        <div className="position-relative sidebar-nav-content">
          <a className="sidebar-nav-email position-absolute" target="_blank" href={`mailto:${profileData.email}`} rel="noreferrer">
            {profileData.email}
          </a>
        </div>
        <div className="sidebar-nav-ruler" />
      </div>
    </>
  );
};
export default SidebarNav;
