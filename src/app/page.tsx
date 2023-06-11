import Image from "next/image";
import "./globals.css";
import NavComponent from "@/components/navComponent";

import * as ProfileImage from "./../assets/profile-nobg.png";

async function Home() {
  return (
    <div className="bg-backgroundSecundary max-h-[765]px">
      <NavComponent shadow={false} />
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-row">
          <div className="flex py-60 flex-col gap-8">
            <div className="flex flex-col gap-1 text-text">
              <p className="text-3xl">Hello, my name is</p>
              <p className="text-5xl">Wagner Caetano,</p>
              <p className="text-3xl">Full Stack Developer</p>
            </div>
            <div className="flex flex-row gap-4">
              <button className="bg-primary rounded text-secondary py-3 px-2">
                <p>Get in contact</p>
              </button>
              <button className="border border-primary rounded text-primary py-3 px-2">
                <p>Download resume</p>
              </button>
            </div>
          </div>
          <Image
            className="max-h-full max-w-full"
            placeholder="empty"
            width={774}
            height={774}
            src={ProfileImage}
            alt={"Profile picture"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
