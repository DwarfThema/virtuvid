"use client";

import { RecoilRoot } from "recoil";
import VirtuvidApp from "../src/app/virtuvidApp";
import { isMobile } from "react-device-detect";

export default function VirtuvidAppPage() {
  return (
    <RecoilRoot>
      {isMobile ? (
        <VirtuvidApp />
      ) : (
        <div className="w-screen h-screen bg-neutral-900 text-white flex justify-center items-center fixed">
          <VirtuvidApp className="w-[400px] h-[800px]" />
        </div>
      )}
    </RecoilRoot>
  );
}
