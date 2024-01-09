import { LoadingPhrases } from "@/libs/client/phrases";
import { useEffect, useState } from "react";

export default function LoadingWeb({ unityWebGL }: { unityWebGL: any }) {
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

  return (
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
  );
}
