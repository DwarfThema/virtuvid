import Link from "next/link";

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
