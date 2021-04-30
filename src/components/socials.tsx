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

interface ISocialsProps{
  margins?: number[];
}

const Socials = (props:ISocialsProps) => {
  const { margins } = props;
  const profileData = getProfileData();

  const getSocialData = (key: string, icon: any) => {
    const socialLink = profileData.socials.filter((x) => x.name === key);
    if (socialLink.length > 0) {
      return (
        <a
          className="social-link mt-2 d-block text-center"
          style={margins!.length === 0 ? undefined : { margin: margins!.map((item) => (`${item}px `)).join(' ') }}
          href={socialLink[0].url}
        >
          {icon}
        </a>
      );
    }
    return <></>;
  };

  return (
    <>
      {getSocialData('Github', <FaGithub />)}
      {getSocialData('LinkedIn', <FaLinkedinIn />)}
      {getSocialData('Facebook', <FaFacebook />)}
      {getSocialData('Instagram', <FaInstagram />)}
      {getSocialData('Behance', <FaBehance />)}
    </>
  );
};

Socials.defaultProps = {
  margins: [],
};

export default Socials;
