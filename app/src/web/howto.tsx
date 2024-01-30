import Image, { StaticImageData } from "next/image";

export default function Howto({
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
