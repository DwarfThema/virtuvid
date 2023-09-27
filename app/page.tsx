"use client";

import { useEffect } from "react";
import { useUnityContext, Unity } from "react-unity-webgl";

export default function Home() {
  const unityWebGL = useUnityContext({
    loaderUrl: "build/builder.loader.js",
    dataUrl: "build/builder.data",
    frameworkUrl: "build/builder.framework.js",
    codeUrl: "build/builder.wasm",
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
    <main className="flex min-h-screen flex-col items-center ">
      <div
        id="canvas-wrap"
        className="w-[90%] h-[90%] mt-28 flex justify-center items-center"
      >
        <div id="avaturn-container" className="absolute w-[2000px] h-[1000px] ">
          <iframe
            id="avaturn-iframe"
            className="vto-frame rounded-[20px]"
            allow="camera *; microphone *"
          ></iframe>
        </div>
        <div id="unity-container" className="w-full h-full">
          <Unity
            unityProvider={unityWebGL.unityProvider}
            className="w-full h-full"
          />
        </div>
      </div>
      <script src="data/Global.js"></script>
      <script src="data/AvaturnFrame.js"></script>
      <script src="Build/builder.loader.js"></script>
      <script src="data/header.js"></script>
    </main>
  );
}
