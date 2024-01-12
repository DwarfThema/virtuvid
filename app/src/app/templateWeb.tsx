import { uiStateAtom } from "@/libs/client/recoilAtom";
import { TemplateAssets } from "@/libs/client/templateAssets";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default function TemplateWeb({
  setTemplate,
  setMainUi,
  setStartUi,
  unityWebGL,
}: {
  setTemplate: (value: boolean) => void;
  setMainUi: (value: boolean) => void;
  setStartUi: (value: boolean) => void;
  unityWebGL: any;
}) {
  const [uiState, setUiState] = useRecoilState(uiStateAtom);

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(TemplateAssets.length / 2)
  );

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TemplateAssets.length);
  };

  const handleTemplateSeclection = () => {
    setUiState(3);
    setTemplate(false);
    setMainUi(true);
    setStartUi(false);
    unityWebGL.sendMessage("UIController", "TemplateFinFn", currentIndex);

    setCurrentIndex(Math.floor(TemplateAssets.length / 2));
  };

  return (
    <div className="fixed w-full h-full z-40 flex flex-col items-center justify-center bg-stone-900 text-white">
      <button
        className="absolute w-full h-full z-30"
        onClick={() => {
          setUiState(1);
          setTemplate(false);
        }}
      />
      <div className="absolute flex flex-row justify-center h-[60%] z-40">
        {TemplateAssets.map(({ title, videoUrl }, i) => (
          <motion.div
            key={i}
            className="absolute flex flex-col h-full items-center w-[280px]"
            animate={{
              x: (i - currentIndex) * 285,
              scale: i === currentIndex ? 1 : 0.8,
              opacity: i === currentIndex ? 1 : 0.5,
            }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <div className="mb-3 text-2xl">{title}</div>
            <button
              className="bg-stone-900 h-[100%] rounded-2xl object-cover"
              onClick={handleTemplateSeclection}
            >
              <video
                src={videoUrl}
                autoPlay
                loop
                playsInline
                controlsList="nodownload nofullscreen"
                className="overflow-hidden object-cover h-full rounded-2xl"
              />
            </button>
          </motion.div>
        ))}
      </div>
      <button
        className="absolute bottom-[10%] bg-white text-black px-[16px] flex justify-center items-center rounded-full z-40"
        onClick={handleNext}
      >
        <span className="block mr-1 font-semibold">Next</span>

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
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
}
