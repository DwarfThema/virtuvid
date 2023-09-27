"use client";

import { useEffect } from "react";
import { useUnityContext, Unity } from "react-unity-webgl";
import Script from "next/script";

export default function Home() {
  const unityWebGL = useUnityContext({
    loaderUrl: "build/build.loader.js",
    dataUrl: "build/build.data",
    frameworkUrl: "build/build.framework.js",
    codeUrl: "build/build.wasm",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).unityWebGLInstance = unityWebGL;

      const script = document.createElement("script");
      script.src = "data/AvaturnFrame.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [unityWebGL]);

  return (
    <main className="flex h-screen w-full flex-col items-center ">
      <div
        id="canvas-wrap"
        className="h-screen w-screen flex justify-center items-center"
      >
        <div id="avaturn-container" className="absolute z-20 h-[90%]">
          <iframe
            id="avaturn-iframe"
            className="vto-frame rounded-[20px]"
            allow="camera *; microphone *"
          />
        </div>
        <div id="unity-container" className="w-full h-full z-10">
          <Unity
            unityProvider={unityWebGL.unityProvider}
            className="w-full h-full"
          />
        </div>
      </div>
      <Script src="data/Global.js" />
      <Script src="data/AvaturnFrame.js" />
      <Script src="Build/builder.loader.js" />
    </main>
  );
}
