import { camStateAtom, uiStateAtom } from "@/libs/client/recoilAtom";
import Image from "next/image";
import { useRecoilState } from "recoil";
import Logo from "../../../public/app/Virtuvid_Logo_White.png";
import CamUIWeb from "./camUIWeb";

export default function MainUiWeb({
  unityWebGL,
  isRecording,
}: {
  unityWebGL: any;
  isRecording: boolean;
}) {
  const [uiState, setUiState] = useRecoilState(uiStateAtom);

  const OnRecordingFn = () => {
    unityWebGL.sendMessage("UIController", "ResetAvatarFn");
    unityWebGL.sendMessage("UIController", "RecordFn");
    setUiState(4);
  };

  return (
    <>
      {uiState === 3 ? (
        <div className="absolute w-full h-full z-30 flex flex-col items-center justify-center  text-white  font-medium">
          <div className="h-[10%] w-[100%] bg-black opacity-50 flex flex-col items-end justify-end">
            <Image src={Logo} alt="Logo" className="w-[25%] m-3" />
          </div>
          <div className="flex flex-col justify-end items-center h-[80%] w-[100%]  py-4">
            <CamUIWeb unityWebGL={unityWebGL} />

            <button
              onClick={OnRecordingFn}
              className=" bg-black flex w-[105px] h-[45px] items-center justify-center rounded-2xl mt-3"
            >
              <span className="pr-2">Record</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </button>
          </div>

          <div className="h-[10%] w-[100%] bg-black opacity-50" />
        </div>
      ) : uiState === 4 ? (
        isRecording ? (
          <div className="absolute w-full h-full z-50 flex flex-col items-center justify-center  text-white  font-medium">
            <div className="h-[10%] w-[100%] bg-black opacity-50 flex flex-col items-end justify-end">
              <Image src={Logo} alt="Logo" className="w-[25%] m-3" />
            </div>
            <div className="flex flex-col justify-end items-center h-[80%] w-[100%]  py-4">
              <CamUIWeb unityWebGL={unityWebGL} />
            </div>

            <div className="h-[10%] w-[100%] bg-black opacity-50" />
          </div>
        ) : null
      ) : null}
    </>
  );
}
