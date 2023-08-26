'use client';
import { FunctionComponent } from 'react';
import './../app/globals.css';
import Typewriter from 'typewriter-effect';

const TypeWritterWrapper: FunctionComponent = () => {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString('Software Developer')
          .pauseFor(1500)
          .deleteAll()
          .typeString('Front-end Specialist')
          .deleteAll()
          .pauseFor(1500)
          .typeString('Amauter UI Designer')
          .deleteAll()
          .start();
      }}
    />
  );
};

export default TypeWritterWrapper;
