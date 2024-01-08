"use client";

import { useCallback, useEffect } from "react";
import { useUnityContext, Unity } from "react-unity-webgl";
import Script from "next/script";
import { LoadingPhrases } from "@/libs/client/phrases";
import VirtuvidApp from "./src/virtuvidApp";

export default function Home() {

  return (
    <main className="flex h-screen w-full flex-col items-center ">
      <VirtuvidApp />
    </main>
  );
}


