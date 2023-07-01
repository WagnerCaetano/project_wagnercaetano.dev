'use client';

import React, { useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/developer.json';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);

    let data = {
      name,
      phone,
      area,
      email,
      message,
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="flex flex-col py-8 px-9 gap-8  bg-backgroundSecundary rounded w-auto mx-auto max-w-6xl xl:min-w-fit text-darkerText">
      <div className="flex flex-row justify-between">
        <p className="text-primary font-mulish font-bold text-4xl text-center">{'<Contact>'}</p>
        <div className="flex flex-row gap-8 mr-28">
          <FaInstagram size={48} className="text-text" /> <FaGithub size={48} className="text-text" /> <FaLinkedin size={48} className="text-text" />
        </div>
      </div>
      <div className="flex flex-row text-2xl gap-4 justify-between ">
        <form className="flex flex-col gap-8">
          <div className="flex flex-row gap-4">
            <div className="flex flex-row">
              <input
                className="placeholder-gray-700 p-2 bg-backgroundSecundary border-2 border-text border-opacity-20 rounded focus:outline-none focus:p-3 focus:border-primary
                transition-all ease-in-out transition-250"
                placeholder="Name"
                maxLength={60}
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-row">
              <input
                className="placeholder-gray-700 p-2 bg-backgroundSecundary border-2 border-text border-opacity-20 rounded focus:outline-none focus:p-3 focus:border-primary
                transition-all ease-in-out transition-250"
                placeholder="Phone Number"
                maxLength={12}
                minLength={6}
                type="tel"
                name="cell"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row w-3/5">
              <input
                className="placeholder-gray-700 p-2 w-full bg-backgroundSecundary border-2 border-text border-opacity-20 rounded focus:outline-none focus:p-3 focus:border-primary transition-all ease-in-out transition-250"
                placeholder="Email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-2/5">
              <select
                className="p-2 w-full bg-backgroundSecundary border-2 border-text border-opacity-20 rounded focus:outline-none focus:p-3 focus:border-primary transition-all ease-in-out transition-250"
                name="area"
                onChange={(e) => setArea(e.target.value)}
              >
                <option className="text-darkerText" value="RH">
                  RECRUITER
                </option>
                <option className="text-darkerText" value="DEV">
                  DEVELOPER
                </option>
                <option className="text-darkerText" value="MANAGER">
                  MANAGER
                </option>
                <option className="text-darkerText" value="OTHER">
                  OTHER
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="w-full ">
              <textarea
                placeholder="What do you want to talk about?"
                rows={4}
                name="subject"
                className="p-2 align-text-top resize-none placeholder-gray-700 h-32 w-full bg-backgroundSecundary border-2 border-text border-opacity-20 rounded focus:outline-none focus:p-3 focus:border-primary transition-all ease-in-out transition-250"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <input
            className="self-end w-48 text-secondary bg-primary rounded px-3 py-2 hover:bg-opacity-70 transition-all duration-250 ease-in-out cursor-pointer"
            type="submit"
            value="Send"
            onClick={(e) => handleSubmit(e)}
          />
        </form>
        <Lottie className="mr-4" animationData={animationData} />
      </div>
    </div>
  );
};

export default ContactForm;
