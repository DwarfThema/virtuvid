"use client";

import { useEffect } from "react";
import { useUnityContext, Unity } from "react-unity-webgl";
import Script from "next/script";

export default function Home() {
  const unityWebGL = useUnityContext({
    loaderUrl: "build/Virtuvid.loader.js",
    dataUrl: "build/Virtuvid.data",
    frameworkUrl: "build/Virtuvid.framework.js",
    codeUrl: "build/Virtuvid.wasm",
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
      {unityWebGL.isLoaded ? null : (
        <div className="absolute w-full h-full z-30 flex flex-col items-center justify-center bg-stone-900 text-white">
          <p>Now Loading...</p>
          <p>{Math.round(unityWebGL.loadingProgression * 100)}%</p>
        </div>
      )}
      <div
        id="canvas-wrap"
        className="h-screen w-screen flex justify-center items-center"
      >
        <div id="avaturn-container" className="absolute h-[100%] w-[100%]">
          <iframe
            id="avaturn-iframe"
            className="vto-frame"
            style={{ zIndex: 10 }}
            allow="camera *; microphone *"
          />
        </div>
        <div id="unity-container" className="w-full h-full z-20">
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
