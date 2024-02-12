"use client";

import { RecoilRoot } from "recoil";
import VirtuvidApp from "../src/app/virtuvidApp";
import { isMobile } from "react-device-detect";
import MocuUp from "../../public/web/Mockup.png";
import Image from "next/image";

export default function VirtuvidAppPage() {
  return (
    <RecoilRoot>
      {isMobile ? (
        <VirtuvidApp />
      ) : (
        <div className="w-screen h-screen bg-neutral-900 text-white flex justify-center items-center fixed">
          <Image
            src={MocuUp}
            alt="mockup"
            className="w-[460px] z-40 pointer-events-none"
          />
          <VirtuvidApp className="w-[400px] h-[800px] absolute " />
        </div>
      )}
    </RecoilRoot>
  );
}
