import Script from "next/script";
import { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import TemplateWeb from "./templateWeb";
import LoadingWeb from "./loadingWeb";
import RecordingLoading from "./recordingLoading";
import StartUiWeb from "./startUIWeb";
import MainUiWeb from "./mainUIweb";
import { useRecoilState } from "recoil";
import { uiStateAtom } from "@/libs/client/recoilAtom";
import ExportUiWeb from "./exportUIWeb";
import Image from "next/image";
import { isMobile } from "react-device-detect";

export default function VirtuvidApp({
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [uiState, setUiState] = useRecoilState(uiStateAtom);

  //ref For Unity
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

  const handleBlobUrlScore = useCallback(
    (blobUrl: any, socialMediaIndex: any) => {
      console.log("blob Url " + blobUrl);
      console.log("socialMeida Index " + socialMediaIndex);
    },
    []
  );

  //ref For State
  const [isStartUi, setStartUi] = useState(true);

  const [isMainUi, setMainUi] = useState(false);

  const [isTemplate, setTemplate] = useState(false);

  const [isRecording, setRecording] = useState(false);

  const [animtime, setAnimTime] = useState(0);
  const sendAnimTimer = useCallback((animTime: any, isRecording: any) => {
    setAnimTime(animTime);
    setRecording(isRecording);
  }, []);

  //ref For BackWard
  const backToStartFn = () => {
    unityWebGL.sendMessage("UIController", "ResetAvatarFn");
    unityWebGL.sendMessage("UIController", "RecordStopFn");
    unityWebGL.sendMessage("UIController", "FullBodyCamFn");
    if (uiState === 3) {
      unityWebGL.sendMessage("UIController", "ResetAvatarFn");
      unityWebGL.sendMessage("UIController", "AnimOffFn");
      setUiState(1);
    }
    if (uiState >= 4) {
      setUiState(3);
      unityWebGL.sendMessage("UIController", "ResetAvatarFn");
      unityWebGL.sendMessage("UIController", "RecordStopFn");
      unityWebGL.sendMessage("UIController", "FullBodyCamFn");
    }
    setRecording(false);
  };

  //ref For Listener
  useEffect(() => {
    unityWebGL.addEventListener("ExportBlobToJS", handleBlobUrlScore);
    unityWebGL.addEventListener("SendAnimTimer", sendAnimTimer);
    return () => {
      unityWebGL.removeEventListener("ExportBlobToJS", handleBlobUrlScore);
      unityWebGL.removeEventListener("SendAnimTimer", sendAnimTimer);
    };
  }, [unityWebGL.addEventListener]);

  useEffect(() => {
    if (unityWebGL.isLoaded) {
      setUiState(1);
    }
  }, [unityWebGL.isLoaded]);

  return (
    <main {...props}>
      <div className="absolute right-0 left-0 top-0 bottom-0">
        {" "}
        {/* Loading Side */}
        <LoadingWeb unityWebGL={unityWebGL} />
        {/* StartUI Side */}
        {unityWebGL.isLoaded ? (
          uiState !== 1 ? null : (
            <StartUiWeb setTemplate={setTemplate} unityWebGL={unityWebGL} />
          )
        ) : null}
        {/* Template Side */}
        {isTemplate ? (
          uiState !== 2 ? null : (
            <TemplateWeb
              setStartUi={setStartUi}
              setTemplate={setTemplate}
              setMainUi={setMainUi}
              unityWebGL={unityWebGL}
            />
          )
        ) : null}
        {/* MainUI Side */}
        {isMainUi ? (
          uiState !== 3 ? null : (
            <MainUiWeb unityWebGL={unityWebGL} />
          )
        ) : null}
        {/* Recording Loading Side */}
        {uiState === 4 ? (
          isRecording ? (
            <RecordingLoading animtime={animtime} isRecording={isRecording} />
          ) : null
        ) : null}
        {/* ExportUI Side */}
        {uiState === 4 ? (
          isRecording ? null : (
            <ExportUiWeb unityWebGL={unityWebGL} />
          )
        ) : null}
        {/* BackBtn Side */}
        {uiState >= 3 ? (
          uiState !== 5 ? (
            <button
              onClick={backToStartFn}
              className="absolute w-8 h-8 z-50 top-10 left-4 flex flex-col items-center justify-center bg-stone-900 text-white rounded-full"
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
          ) : null
        ) : null}
      </div>

      {/* Unity Side */}
      {isMobile ? (
        <div className="h-screen w-screen                                                                                                                                                                                 flex justify-center items-center">
          <div id="avaturn-container" className="absolute h-[100%] w-[100%]">
            <iframe
              id="avaturn-iframe"
              className="vto-frame"
              allow="camera *; microphone *"
            />
          </div>
          <div
            id="unity-container"
            className={`absolute 
        ${
          uiState === 4
            ? isRecording
              ? "z-10 w-[100%] h-[100%]"
              : "z-30 top-[20%] w-[55%] h-[50%]"
            : "z-10 w-[100%] h-[100%]"
        }
        
        `}
          >
            <Unity
              unityProvider={unityWebGL.unityProvider}
              className={`
            ${
              uiState === 4
                ? isRecording
                  ? "w-full h-full "
                  : "w-full h-full rounded-3xl"
                : "w-full h-full "
            }
            
            `}
            />
          </div>
        </div>
      ) : (
        <div className="h-full w-full                                                                                                                                                                                 flex justify-center items-center">
          <div id="avaturn-container" className="absolute h-[100%] w-[100%]">
            <iframe
              id="avaturn-iframe"
              className="vto-frame"
              allow="camera *; microphone *"
            />
          </div>
          <div
            id="unity-container"
            className={`absolute 
        ${
          uiState === 4
            ? isRecording
              ? "z-10 w-[100%] h-[100%]"
              : "z-30 top-[20%] w-[55%] h-[50%]"
            : "z-10 w-[100%] h-[100%]"
        }
        
        `}
          >
            <Unity
              unityProvider={unityWebGL.unityProvider}
              className={`
            ${
              uiState === 4
                ? isRecording
                  ? "w-full h-full "
                  : "w-full h-full rounded-3xl"
                : "w-full h-full "
            }
            
            `}
            />
          </div>
        </div>
      )}
      <Script src="data/Global.js" />
      <Script src="data/AvaturnFrame.js" />
      <Script src="Build/builder.loader.js" />
    </main>
  );
}
