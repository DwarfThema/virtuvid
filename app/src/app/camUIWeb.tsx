import { camStateAtom } from "@/libs/client/recoilAtom";
import { useRecoilState } from "recoil";

export default function CamUIWeb({ unityWebGL }: { unityWebGL: any }) {
  const [camState, setCamState] = useRecoilState(camStateAtom);

  const OnFaceCamFn = () => {
    unityWebGL.sendMessage("UIController", "ResetAvatarFn");
    unityWebGL.sendMessage("UIController", "FaceCamFn");
    setCamState(1);
  };
  const OnBustCamFn = () => {
    unityWebGL.sendMessage("UIController", "ResetAvatarFn");
    unityWebGL.sendMessage("UIController", "BreastCamFn");
    setCamState(2);
  };
  const OnFullCamFn = () => {
    unityWebGL.sendMessage("UIController", "ResetAvatarFn");
    unityWebGL.sendMessage("UIController", "FullBodyCamFn");
    setCamState(0);
  };

  return (
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
      <div className="w-[5px]" />
      <button
        onClick={OnBustCamFn}
        className={`bg-black flex items-center justify-center rounded-xl transition-all duration-500 ease-in-out ${
          camState === 2
            ? `w-[63px] h-[38px] bg-opacity-100 text-sm`
            : `w-[55px] h-[32px] bg-opacity-50 text-xs`
        }`}
      >
        <span>Bust</span>
      </button>
      <div className="w-[5px]" />
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
  );
}
