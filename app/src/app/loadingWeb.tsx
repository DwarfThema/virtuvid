import { LoadingPhrases } from "@/libs/client/phrases";
import { useEffect, useState } from "react";
import Logo from "../../../public/images/Virtuvid_Logo_White.png";
import Image from "next/image";

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

  //ref For Main Image
  const [isMainFin, setIsMainFin] = useState(false);
  const [isMainFinFade, setIsMainFinFade] = useState(false);

  useEffect(() => {
    if (unityWebGL.isLoaded) {
      setTimeout(() => {
        setIsMainFin(true);
      }, 2500);
    }

    if (isMainFin) {
      setTimeout(() => {
        setIsMainFinFade(true);
      }, 1500);
    }
  }, [isMainFin, unityWebGL.isLoaded]);

  return (
    <div
      className={` ${isMainFinFade ? `hidden -z-50` : `block z-50`}
      
       absolute  w-full h-full`}
    >
      <div
        className={` ${
          !isMainFin ? `opacity-100` : `opacity-0`
        } transition-opacity ease-in-out duration-[1500ms] absolute w-full h-full z-40 bg-[url('/images/Gradient.jpg')] bg-cover  flex justify-center items-center`}
      >
        <Image src={Logo} alt="Virtuvid Logo" className="w-[70%]" />
      </div>

      <div
        className={`${
          unityWebGL.isLoaded ? `opacity-0` : `opacity-100`
        } transition-opacity ease-in-out duration-[1000ms] absolute w-full h-full z-50 flex flex-col items-center justify-center bg-stone-900 text-white  font-extrabold`}
      >
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
    </div>
  );
}
