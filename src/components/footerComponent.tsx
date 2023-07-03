import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from './../assets/logo.svg';

const FooterComponent = ({ shadow }) => {
  return (
    <footer className={`min-h-[388px] font-lora w-auto ${shadow ? 'shadow-lg' : ''} bg-backgroundSecundary`}>
      <div className="flex flex-col lg:flex-row mx-auto pt-8 lg:pt-28 pb-4 max-w-6xl min-w-4xl text-center gap-8 lg:gap-0 justify-between">
        <div className="flex flex-col gap-4">
          <Image src={Logo} alt="Logo" width={100} height={50} />
          <p className="text-lg text-darkerText">Software Developer</p>
        </div>
        <div className="flex flex-col gap-1 lg:gap-4 text-darkerText">
          <p className="text-[32px]">Skills</p>
          <Link replace href={'https://angular.io'} className="text-lg hover-delay hover:text-primary">
            Angular
          </Link>
          <Link replace href={'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'} className="text-lg hover-delay hover:text-primary">
            Javascript
          </Link>
          <Link replace href={'https://www.java.com/pt-BR/'} className="text-lg hover-delay hover:text-primary">
            Java
          </Link>
          <Link replace href={'https://react.dev'} className="text-lg hover-delay hover:text-primary">
            React
          </Link>
        </div>
        <div className="flex flex-col gap-1 lg:gap-4 text-darkerText">
          <p className="text-[32px]">Social Media</p>
          <Link replace href={'https://github.com/WagnerCaetano'} className="text-lg hover-delay hover:text-primary">
            Github
          </Link>
          <Link replace href={'https://www.linkedin.com/in/wagner-caetano/'} className="text-lg hover-delay hover:text-primary">
            Linkedin
          </Link>
          <Link replace href={'https://www.instagram.com/wagnercaetano.dev/'} className="text-lg hover-delay hover:text-primary">
            Instagram
          </Link>
        </div>
        <div className="flex flex-col gap-1 lg:gap-4 text-darkerText">
          <p className="text-[32px]">Portfolio</p>
          <Link replace href={'../projects'} className="text-lg hover-delay hover:text-primary">
            Check all projects
          </Link>
        </div>
        <div className="flex flex-col gap-1 lg:gap-4 text-darkerText">
          <p className="text-[32px]">Contact</p>
          <Link replace href={'wagnercaetano.dev'} className="text-lg hover-delay hover:text-primary">
            wagnercaetano.dev
          </Link>
          <Link
            replace
            href={'https://wa.me/5519982252438?text=Ola%20,%20peguei%20seu%20contato%20no%20seu%20portfolio'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover-delay hover:text-primary"
          >
            (19) 982252438
          </Link>
          <Link replace href={'mailto:wagnercaetano01@gmail.com'} className="text-lg hover-delay hover:text-primary">
            wagnercaetano01@gmail.com
          </Link>
        </div>
      </div>
      <p className="text-sm text-center mt-5 text-darkerText">CopyRight | WagnerCaetano.dev</p>
    </footer>
  );
};

export default FooterComponent;
