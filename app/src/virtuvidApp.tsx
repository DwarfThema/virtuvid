import { LoadingPhrases } from "@/libs/client/phrases";
import Script from "next/script";
import { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function VirtuvidApp() {
  const unityWebGL = useUnityContext({
    loaderUrl: "build/Virtuvid.loader.js",
    dataUrl: "build/Virtuvid.data",
    frameworkUrl: "build/Virtuvid.framework.js",
    codeUrl: "build/Virtuvid.wasm",
  });

  //ref For Phrase
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * LoadingPhrases.length);
    return LoadingPhrases[randomIndex];
  };

  const [currentPhrase, setCurrentPhrase] = useState(LoadingPhrases[1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase(getRandomPhrase());
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  //ref For Unity
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

  const handleBlobUrlScore = useCallback(
    (blobUrl: any, socialMediaIndex: any) => {
      console.log("blob Url " + blobUrl);
      console.log("socialMeida Index " + socialMediaIndex);
    },
    []
  );

  const onTemplate = () => {
    console.log("템플릿 자바스크립트");
    alert("Template ON!");
  };

  useEffect(() => {
    unityWebGL.addEventListener("ExportBlobToJS", handleBlobUrlScore);
    unityWebGL.addEventListener("BtnTemplate", onTemplate);
    return () => {
      unityWebGL.removeEventListener("ExportBlobToJS", handleBlobUrlScore);
      unityWebGL.addEventListener("BtnTemplate", onTemplate);
    };
  }, [unityWebGL.addEventListener]);

  return (
    <>
      {unityWebGL.isLoaded ? null : (
        <div className="absolute w-full h-full z-30 flex flex-col items-center justify-center bg-stone-900 text-white  font-extrabold">
          <div className="flex flex-col items-center justify-center h-[50%] w-[80%]">
            <p className="text-[25px] font-medium mb-2">
              {Math.round(unityWebGL.loadingProgression * 100)}%
            </p>
            <p className={`text-[10px]`}>{currentPhrase}</p>
            <div
              id="progress"
              className="bg-white w-full h-[10px] overflow-hidden rounded-md mt-2"
            >
              <div
                className="bg-gradient-to-r from-neutral-300 to-neutral-600 h-full"
                style={{ width: `${unityWebGL.loadingProgression * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
      <div
        id="canvas-wrap"
        className="h-screen w-screen                                                                                                                                                                                 flex justify-center items-center"
      >
        <div id="avaturn-container" className="absolute h-[100%] w-[100%]">
          <iframe
            id="avaturn-iframe"
            className="vto-frame"
            style={{ zIndex: 10 }}
            allow="camera *; microphone *"
          />
        </div>
        <div id="unity-container" className="absolute w-full h-full z-20">
          <Unity
            unityProvider={unityWebGL.unityProvider}
            className="w-full h-full"
          />
        </div>
      </div>
      <Script src="data/Global.js" />
      <Script src="data/AvaturnFrame.js" />
      <Script src="Build/builder.loader.js" />
    </>
  );
}
