"use client";

import { RecoilRoot } from "recoil";
import Char_Gahter from "../public/web/Char_Gahter.png";
import Question from "../public/web/Question.png";
import howTo1 from "../public/web/howTo1.png";
import howTo2 from "../public/web/howTo2.png";
import howTo3 from "../public/web/howTo3.png";
import howTo4 from "../public/web/howTo4.png";
import logo_Insta from "../public/web/logo_Insta.png";
import logo_Tiktok from "../public/web/logo_Tiktok.png";
import logo_x from "../public/web/logo_x.png";
import logo_youtube from "../public/web/logo_youtube.png";
import mainLogo from "../public/app/Virtuvid_Logo_White.png";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <RecoilRoot>
      <main className="flex h-screen w-full flex-col items-center ">
        <header className="fixed bg-mainCol w-full h-[60px] z-30 flex items-center justify-between">
          <Image src={mainLogo} alt="Logo" className="w-[100px] mx-3" />
          <BtnStart
            borderLine
            className="border-3 border-white border-solid mr-2"
          />
        </header>
        <div className="w-full h-[650px] mt-[60px] block ">
          <div
            className="
          text-[25px] lg:text-[50px] 
          leading-[35px] lg:leading-[70px]
          absolute w-full h-[650px] z-20 flex justify-center items-center flex-col font-extrabold text-white drop-shadow-lg  "
          >
            <div>
              <span className="text-mainCol">단 3장의</span>
              <span>사진으로 완성하는</span>
            </div>
            <div>
              <span className="bg-mainCol">수천 개의 챌린지</span>
              <span> 영상.</span>
            </div>
            <BtnStart bg className="mt-12" />
          </div>
          <video
            src="/web/videos/vid_header.mp4"
            autoPlay
            loop
            playsInline
            controlsList="nodownload nofullscreen"
            className="w-full h-[650px] object-cover"
          />
        </div>
        <div>
          <div className="font-bold flex flex-col justify-center items-center mt-16">
            <div className="text-[15px]">
              요즘 유행하는 챌린지 나도 하고싶은데
            </div>
            <div className="text-[25px] leading-7 mt-1">
              이번 생은 몸치라서...
            </div>
          </div>
          <div className="mt-10 h-[200px] flex items-center justify-center">
            <div className="absolute flex flex-col justify-center items-center text-[25px] font-extrabold pb-9 leading-7">
              <div>
                <span className="text-mainCol">버츄비드</span>
                <span>와 함께라면</span>
              </div>
              <div>너도 할 수 있어!</div>
            </div>
            <Image
              src={Question}
              alt="Question"
              className="min-w-[10px] max-w-[350px] "
            />
          </div>
          <div className="mt-10 flex flex-col items-center justify-center">
            <div className="text-[25px] w-[300px] text-center font-extrabold leading-7">
              <div>
                누구나 스마트폰만 있으면 <br /> 준비 완료.
              </div>
            </div>
            <div className="mt-3">
              버츄비드에서는 얼굴사진 단 3장으로
              <br /> 나와 똑닮은 아바타를 만들 수 있어요.
              <br /> 부디 그 곳에선 자유롭게 춤 춰 줘...✨
            </div>
            <Image
              src={Char_Gahter}
              alt="Char_Gahter"
              className="mt-3 
              w-[400px]
              lg:w-[500px]
              "
            />
          </div>
          <div className="mt-14 flex flex-col justify-center items-center">
            <div className="text-[25px] w-[300px] text-center font-extrabold leading-7">
              터치 한 번으로 만드는 <br /> 수천 개의 챌린지 영상.
            </div>
            <div className="text-center mt-6">
              매일 업데이트 되는 수천 개의 챌린지 템플릿.
              <br /> 터치 한 번으로 적용해요.
              <br /> 버츄비드와 함께라면 나도 댄싱머신! 쇼츠 공장장!🏭
            </div>
          </div>
          <div>
            <video
              src="/web/videos/vid_middle.mp4"
              autoPlay
              loop
              playsInline
              controlsList="nodownload nofullscreen"
              className="w-full h-[450px] object-cover"
            />
          </div>
          <div className="mt-10 flex flex-col items-center justify-center">
            <div className="text-[25px] w-[300px] text-center font-extrabold leading-7">
              재밌는건 즉시 공유.
            </div>
            <div className="text-center mt-4">
              멋진 춤을 추는 또 다른 세계의 나.
              <br /> 혼자 볼 수 없겠죠?
              <br /> 완성한 영상을 친구들에게 공유해요. 지금 당장!🚨
            </div>
            <div className="mt-4 w-[500px] flex justify-center">
              <ExportBtn insta />
              <ExportBtn tiktok />
              <ExportBtn youtube />
              <ExportBtn />
            </div>
            <BtnStart className="mt-9" />
          </div>
        </div>
        <div className=" mt-20 bg-neutral-700 w-full flex flex-col justify-center items-center p-10">
          <span className="text-mainCol text-[30px] font-semibold">
            버츄비드 사용법
          </span>
          <Howto
            title="[STEP1] 내 아바타 만들기"
            contents={`내 얼굴 사진을 찍어 \n 나만의 아바타를 만들어요!`}
            imgSrc={howTo1}
          />
          <Howto
            title="[STEP2] 템플릿 선택"
            contents={`내 얼굴 사진을 찍어 \n 나만의 아바타를 만들어요!`}
            imgSrc={howTo2}
          />
          <Howto
            title="[STEP3] 녹화하기"
            contents={`내 얼굴 사진을 찍어 \n 나만의 아바타를 만들어요!`}
            imgSrc={howTo3}
          />
          <Howto
            title="[STEP4] 공유하기"
            contents={`내 얼굴 사진을 찍어 \n 나만의 아바타를 만들어요!`}
            imgSrc={howTo4}
          />

          <div className="flex flex-col justify-center items-center text-white">
            <span className="font-bold text-[25px]">
              지금 바로 만들어보세요!
            </span>
            <BtnStart className="mt-5" />
          </div>
        </div>
        <div
          className="mt-[50px] 
        w-[300px]
        lg:w-[550px]
        "
        >
          <div className="mb-3 font-bold">자주 묻는 질문</div>
          <QuestionContents
            question="Q. 제 얼굴 사진이 다른 곳에 사용되나요?"
            answer={`이 앱은 사용자의 얼굴 사진을 기반으로 아바타를 생성해요.\n사진을 찍거나 갤러리에서 선택하면, 그 사진이 서버로 전송되죠.\n거기서 AI가 마법 같은 일을 해서, 당신만의 개성 넘치는 아바타를 만들어줍니다!

중요한 점은, 아바타 생성이 끝나면, 여러분의 사진은 서버에서 즉시 삭제된다는 거예요.
개인정보 보호에 신경 쓰는 거죠.
이렇게 해서 여러분은 안심하고 멋진 아바타를 만들 수 있어요.
            
간단하면서도 재미있는 과정이죠? 여러분도 한번 시도해보세요!`}
          />
          <QuestionContents
            question="Q. 템플릿을 직접 제작하고 싶어요."
            answer={`템플릿 커스터마이징 기능은 출시할 예정이에요!
저희가 준비한 템플릿 먼저 즐기며 조금만 기다려주세요!`}
          />
          <QuestionContents
            question="Q. 나만의 아바타를 업로드 할 수 있나요?"
            answer={`나만의 아바타 기능은 출시할 예정이에요!
먼저 AI 아바타를 만들어보며 저희 콘텐츠를 즐겨주세요!`}
          />
        </div>
        <footer
          className="text-center text-sm text-neutral-400 pb-10
          mt-[50px]
          lg:mt-[200px]

        "
        >
          Copyright © Vivlepark Inc.
        </footer>
      </main>
    </RecoilRoot>
  );
}

export function BtnStart({
  bg,
  borderLine,
  ...props
}: { bg?: boolean; borderLine?: boolean } & React.HTMLAttributes<HTMLElement>) {
  return (
    <div {...props}>
      <Link
        href="/app"
        className={` ${bg ? `px-5 py-3 text-2xl` : `px-3 py-2`} ${
          borderLine ? `border-2` : null
        }  bg-mainCol rounded-full flex items-center text-white font-semibold drop-shadow-lg`}
      >
        시작하기
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className={`${bg ? `w-6 h-6` : `w-5 h-5`} ml-1`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      </Link>
    </div>
  );
}

export function ExportBtn({
  insta,
  tiktok,
  youtube,
  x,
}: {
  insta?: boolean;
  tiktok?: boolean;
  youtube?: boolean;
  x?: boolean;
}) {
  return (
    <div className="flex flex-col justify-center items-center mx-3">
      <div className="p-3 border-2 border-gray-300 border-solid rounded-full">
        <Image
          src={
            insta
              ? logo_Insta
              : tiktok
              ? logo_Tiktok
              : youtube
              ? logo_youtube
              : logo_x
          }
          alt="export"
          className="w-[25px]"
        />
      </div>
      <div className="text-sm">
        {insta ? "Instagram" : tiktok ? "Tiktok" : youtube ? "Youtube" : "X"}
      </div>
    </div>
  );
}

export function Howto({
  title,
  contents,
  imgSrc,
}: {
  title: string;
  contents: string;
  imgSrc: StaticImageData;
}) {
  return (
    <div className="my-6 flex flex-col justify-center items-center text-white">
      <div className="font-bold">{title}</div>
      <div className="whitespace-pre-wrap text-center mt-1 mb-3">
        {contents}
      </div>
      <Image src={imgSrc} alt={title} />
    </div>
  );
}

export function QuestionContents({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-2">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {question}
      </button>
      {isOpen ? (
        <div className="whitespace-pre-wrap text-sm p-4 mb-5">{answer}</div>
      ) : null}
    </div>
  );
}
