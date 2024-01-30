import Image, { StaticImageData } from "next/image";

export function ExportBtn({
  insta,
  tiktok,
  youtube,
  x,
  imgSrc,
}: {
  insta?: boolean;
  tiktok?: boolean;
  youtube?: boolean;
  x?: boolean;
  imgSrc: StaticImageData;
}) {
  return (
    <div className="flex flex-col justify-center items-center mx-3">
      <div className="p-3 border-2 border-gray-300 border-solid rounded-full">
        <Image src={imgSrc} alt="export" className="w-[25px]" />
      </div>
      <div className="text-sm">
        {insta ? "Instagram" : tiktok ? "Tiktok" : youtube ? "Youtube" : "X"}
      </div>
    </div>
  );
}
