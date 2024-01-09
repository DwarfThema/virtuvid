import Script from "next/script";
import { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import TemplateWeb from "./templateWeb";
import LoadingWeb from "./loadingWeb";

export default function VirtuvidApp() {
  const unityWebGL = useUnityContext({
    loaderUrl: "build/Virtuvid.loader.js",
    dataUrl: "build/Virtuvid.data",
    frameworkUrl: "build/Virtuvid.framework.js",
    codeUrl: "build/Virtuvid.wasm",
  });

  const [isTemplate, setTemplate] = useState(false);
  const [isBackBtn, setIsBackBtn] = useState(false);

  const backToStartFn = () => {
    unityWebGL.sendMessage("UIController", "BackToStartFn");
  };

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

  const onTemplateFn = () => {
    setTemplate(true);
  };

  const onBackBtnFn = useCallback((isOn: any) => {
    setIsBackBtn(isOn);
  }, []);

  useEffect(() => {
    unityWebGL.addEventListener("ExportBlobToJS", handleBlobUrlScore);
    unityWebGL.addEventListener("BtnTemplate", onTemplateFn);
    unityWebGL.addEventListener("IsBackBtnFn", onBackBtnFn);
    return () => {
      unityWebGL.removeEventListener("ExportBlobToJS", handleBlobUrlScore);
      unityWebGL.removeEventListener("BtnTemplate", onTemplateFn);
      unityWebGL.removeEventListener("IsBackBtnFn", onBackBtnFn);
    };
  }, [unityWebGL.addEventListener]);

  return (
    <>
      {/* Template Side */}
      {isTemplate ? (
        <TemplateWeb setTemplate={setTemplate} unityWebGL={unityWebGL} />
      ) : null}
      {/* BackBtn Side */}
      {isBackBtn ? (
        <button
          onClick={backToStartFn}
          className="fixed w-8 h-8 z-30 top-12 left-4 flex flex-col items-center justify-center bg-stone-900 text-white rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      ) : null}
      {/* Loading Side */}
      {unityWebGL.isLoaded ? null : <LoadingWeb unityWebGL={unityWebGL} />}
      {/* Unity Side */}
      <div
        id="canvas-wrap"
        className="h-screen w-screen                                                                                                                                                                                 flex justify-center items-center"
      >
        <div id="avaturn-container" className="absolute h-[100%] w-[100%]">
          <iframe
            id="avaturn-iframe"
            className="vto-frame"
            allow="camera *; microphone *"
          />
        </div>
        <div id="unity-container" className="absolute w-full h-full z-10">
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
