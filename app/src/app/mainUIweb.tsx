import { camStateAtom, uiStateAtom } from "@/libs/client/recoilAtom";
import { useRecoilState } from "recoil";

export default function MainUiWeb({ unityWebGL }: { unityWebGL: any }) {
  const [uiState, setUiState] = useRecoilState(uiStateAtom);
  const [camState, setCamState] = useRecoilState(camStateAtom);

  const OnFaceCamFn = () => {
    unityWebGL.sendMessage("UIController", "FaceCamFn");
    setCamState(1);
  };
  const OnBustCamFn = () => {
    unityWebGL.sendMessage("UIController", "BreastCamFn");
    setCamState(2);
  };
  const OnFullCamFn = () => {
    unityWebGL.sendMessage("UIController", "FullBodyCamFn");
    setCamState(0);
  };

  const OnRecordingFn = () => {
    unityWebGL.sendMessage("UIController", "RecordFn");
    setUiState(4);
  };

  return (
    <div className="absolute w-full h-full z-30 flex flex-col items-center justify-center  text-white  font-medium">
      <div className="h-[10%] w-[100%] bg-black opacity-50" />
      <div className="flex flex-col justify-end items-center h-[80%] w-[100%]  py-4">
        <div className="w-[200px] h-[45px] flex items-center justify-center bg-black bg-opacity-40 rounded-2xl">
          <button
            onClick={OnFaceCamFn}
            className={`bg-black flex items-center justify-center rounded-xl transition-all duration-500 ease-in-out ${
              camState === 1
                ? `w-[63px] h-[38px] bg-opacity-100 text-sm`
                : `w-[55px] h-[32px] bg-opacity-50 text-xs`
            }`}
          >
            <span>Face</span>
          </button>{" "}
          <button
            onClick={OnBustCamFn}
            className={`mx-2 bg-black flex items-center justify-center rounded-xl transition-all duration-500 ease-in-out ${
              camState === 2
                ? `w-[63px] h-[38px] bg-opacity-100 text-sm`
                : `w-[55px] h-[32px] bg-opacity-50 text-xs`
            }`}
          >
            <span>Bust</span>
          </button>{" "}
          <button
            onClick={OnFullCamFn}
            className={`bg-black flex items-center justify-center rounded-xl transition-all duration-500 ease-in-out ${
              camState === 0
                ? `w-[63px] h-[38px] bg-opacity-100 text-sm`
                : `w-[55px] h-[32px] bg-opacity-50 text-xs`
            }`}
          >
            <span>Full</span>
          </button>
        </div>

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
  );
}
