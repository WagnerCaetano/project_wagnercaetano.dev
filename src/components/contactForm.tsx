'use client';

import React, { Suspense, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/developer.json';
import { generateShimmer, generateShimmerToBase64 } from '@/services/shimmerHelper.service';
import LoadingSpinner from './loadingSpinner';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

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
      </div>
      <div className="flex flex-row text-xl xl:text-2xl gap-4 justify-between ">
        <form className="flex flex-wrap xl:flex-nowrap flex-col gap-4 xl:gap-8">
          <div className="flex flex-row gap-4 flex-wrap xl:flex-nowrap">
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
          <div className="flex flex-row gap-4 flex-wrap xl:flex-nowrap">
            <div className="flex flex-row w-fit xl:w-3/5">
              <input
                className="placeholder-gray-700 p-2 w-full bg-backgroundSecundary border-2 border-text border-opacity-20 rounded focus:outline-none focus:p-3 focus:border-primary transition-all ease-in-out transition-250"
                placeholder="Email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-fit xl:w-2/5">
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
          <div className="flex flex-row gap-8 flex-wrap xl:flex-nowrap">
            <div className="w-full">
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
        <Suspense fallback={<p className="text-text text-xl">Loading lottie animation...</p>}>
          <Lottie
            seamless
            required={false}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice', progressiveLoad: true, focusable: false }}
            placeholder={`data:image/svg+xml;base64,${generateShimmerToBase64(generateShimmer(400, 400))}`}
            className="mr-4 hidden lg:block"
            animationData={animationData}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default ContactForm;
