/* eslint-disable no-use-before-define */
import React from 'react';
import {
  FaLinkedinIn, FaBehance, FaGithub, FaInstagram, FaFacebook,
} from 'react-icons/fa';

const SidebarNav = () => {
  return (
    <div className="height-100vh position-fixed sidebar-nav d-lg-flex d-md-none d-sm-none flex-column align-items-center justify-content-end">
      <div className="sidebar-nav-ruler" />
      <div className="sidebar-nav-content">
        <FaGithub className="d-block mt-3" />
        <FaLinkedinIn className="d-block mt-3" />
        <FaFacebook className="d-block mt-3" />
        <FaInstagram className="d-block mt-3" />
        <FaBehance className="d-block mt-3" />
      </div>
    </div>
  );
};
export default SidebarNav;
