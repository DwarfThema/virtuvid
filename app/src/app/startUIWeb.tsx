import { uiStateAtom } from "@/libs/client/recoilAtom";
import { useRecoilState } from "recoil";

export default function StartUiWeb({
  setTemplate,
  unityWebGL,
}: {
  setTemplate: (value: boolean) => void;
  unityWebGL: any;
}) {
  const [uiState, setUiState] = useRecoilState(uiStateAtom);

  const OnAvatarFn = () => {
    unityWebGL.sendMessage("UIController", "CreateAvatarFn");
  };
  const OnTemplateFn = () => {
    setUiState(2);
    setTemplate(true);
  };

  return (
    <>
      <div className="absolute w-full h-full z-30 flex flex-col items-center justify-center  text-white  font-extrabold">
        <div className="flex items-end justify-around h-[85%] w-[100%] px-8">
          <button
            onClick={OnAvatarFn}
            className=" bg-black flex w-[150px] h-[50px] items-center justify-center rounded-2xl"
          >
            <span className="pr-2">Avatar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </button>
          <button
            onClick={OnTemplateFn}
            className=" bg-black flex w-[150px] h-[50px] items-center justify-center rounded-2xl"
          >
            <span className="pr-2">Template</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
