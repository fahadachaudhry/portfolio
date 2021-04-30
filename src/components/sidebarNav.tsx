/* eslint-disable no-use-before-define */
import React from 'react';
import getProfileData from '../data/data';
import Socials from './socials';

const SidebarNav = () => {
  const profileData = getProfileData();

  return (
    <>
      <div className="height-100vh position-fixed sidebar-nav left d-flex flex-column justify-content-end">
        <div className="sidebar-nav-content d-flex flex-column justify-content-end">
          <Socials />
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
