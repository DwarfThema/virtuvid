import { RecordingPhrases } from "@/libs/client/phrases";
import { uiStateAtom } from "@/libs/client/recoilAtom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function RecordingLoading({
  animtime,
  isRecording,
}: {
  animtime: number;
  isRecording: boolean;
}) {
  return (
    <div
      id="UI-Recording"
      className="absolute w-full h-full z-30 flex flex-col items-center justify-center text-white bg-stone-900 bg-opacity-50 font-extrabold"
    >
      <div className="flex flex-col items-center justify-start h-[70%] w-[80%]">
        <p className="text-[15px] font-semibold">녹화 중입니다...</p>
        <div
          id="progress"
          className="bg-white w-full h-[10px] overflow-hidden rounded-md mt-2"
        >
          <div
            className="bg-gradient-to-r from-neutral-300 to-neutral-600 h-full"
            style={{ width: `${animtime * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
