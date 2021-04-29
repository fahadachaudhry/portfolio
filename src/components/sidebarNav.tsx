/* eslint-disable no-use-before-define */
import React from 'react';
import {
  FaLinkedinIn, FaBehance, FaGithub, FaInstagram, FaFacebook,
} from 'react-icons/fa';
import getProfileData from '../data/data';

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
    <div className="height-100vh position-fixed sidebar-nav d-flex flex-column justify-content-end">
      <div className="sidebar-nav-ruler" />
      <div className="sidebar-nav-content">
        {getSocialData('Github', <FaGithub />)}
        {getSocialData('LinkedIn', <FaLinkedinIn />)}
        {getSocialData('Facebook', <FaFacebook />)}
        {getSocialData('Instagram', <FaInstagram />)}
        {getSocialData('Behance', <FaBehance />)}
      </div>
    </div>
  );
};
export default SidebarNav;
