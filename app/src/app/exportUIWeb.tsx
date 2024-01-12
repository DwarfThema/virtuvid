import { RecordingPhrases } from "@/libs/client/phrases";
import { uiStateAtom } from "@/libs/client/recoilAtom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function ExportUiWeb({ unityWebGL }: { unityWebGL: any }) {
  const [uiState, setUiState] = useRecoilState(uiStateAtom);

  const OnDownLoadFn = () => {
    unityWebGL.sendMessage("UIController", "DownloadFn");
  };
  const OnExportFn = () => {
    unityWebGL.sendMessage("UIController", "ExportOsFn");
  };

  const OnGoToHome = () => {
    unityWebGL.sendMessage("UIController", "RecordStopFn");
    unityWebGL.sendMessage("UIController", "AnimOffFn");
    unityWebGL.sendMessage("UIController", "FullBodyCamFn");
    setUiState(1);
  };

  //ref For Phrase
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * RecordingPhrases.length);
    return RecordingPhrases[randomIndex];
  };

  const [currentPhrase, setCurrentPhrase] = useState(RecordingPhrases[1]);

  useEffect(() => {
    setCurrentPhrase(getRandomPhrase());
  }, []);

  return (
    <div className="absolute w-full h-full z-20 flex flex-col items-center justify-center bg-stone-900 text-black  font-medium">
      <div className="flex flex-col justify-between items-center h-[87%] w-[100%] text-sm">
        <div className="text-[19px] font-bold mt-[7%] text-white text-center">
          {typeof currentPhrase === "object" && currentPhrase.a}
          <br />
          {typeof currentPhrase === "object" && currentPhrase.b}
        </div>
        <div className="flex flex-col justify-end items-center text-sm">
          <div className="flex items-center justify-center  rounded-2xl text-white">
            <div className="flex flex-col justify-center items-center px-3 font-normal">
              <button
                onClick={OnExportFn}
                className=" bg-white flex w-[50px] h-[50px]  items-center justify-center rounded-full text-black mb-[5px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.4"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                  />
                </svg>
              </button>
              <span>Export</span>
            </div>
            <div className="flex flex-col justify-center items-center px-3 font-normal">
              <button
                onClick={OnDownLoadFn}
                className=" bg-white flex w-[50px] h-[50px]  items-center justify-center rounded-full text-black mb-[5px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.4"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
                  />
                </svg>
              </button>
              <span>Save</span>
            </div>
          </div>

          <button
            onClick={OnGoToHome}
            className=" bg-white flex w-[105px] h-[45px] items-center justify-center font-bold rounded-3xl mt-3 text-base"
          >
            <span className="pr-[2px] ">Home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
