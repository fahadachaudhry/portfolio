/* eslint-disable no-use-before-define */
import React from 'react';
import {
  Carousel,
} from 'react-bootstrap';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';

import getProfileData, { IStudent } from '../data/data';

const Testimonial = () => {
  const profileData = getProfileData();
  return (
    <div className="testimonial p-3 shadow-lg">
      <h4 className="text-center pb-5 testimonial-heading text-light font-weight-bold">Students Taught (25+)</h4>
      <Carousel
        prevIcon={<RiArrowLeftSLine />}
        nextIcon={<RiArrowRightSLine />}
      >
        {
          profileData.students?.map((item) => (
            <Carousel.Item>
              <TestimonialCard name={item.name} quote={item.quote} avatar={item.avatar} />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  );
};

const TestimonialCard = (props:IStudent) => {
  const { name, avatar, quote } = props;
  return (
    <div className="testimonial-card text-center">
      {avatar !== ''
        ? (
          <div
            className="avatar"
            style={{ backgroundImage: `url(${avatar})` }}
          />
        )
        : <AiOutlineUser className="avatar" />}
      <span className="d-block name text-bold mt-3">{name}</span>
      <span className="d-block quote">{quote}</span>
    </div>
  );
};

export default Testimonial;
