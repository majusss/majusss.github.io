import Image from "next/image";
import preview from "@/media/preview.png";

export default function Phone() {
  return (
    <div className="float relative h-[600px] max-w-[300px] rounded-[2.5rem] border-[14px] border-onSurface bg-onSurface dark:border-onSurface">
      <div className="rounded-s-lg absolute -start-[17px] top-[72px] h-[32px] w-[3px] bg-onSurface dark:bg-onSurface"></div>
      <div className="rounded-s-lg absolute -start-[17px] top-[124px] h-[46px] w-[3px] bg-onSurface dark:bg-onSurface"></div>
      <div className="rounded-s-lg absolute -start-[17px] top-[178px] h-[46px] w-[3px] bg-onSurface dark:bg-onSurface"></div>
      <div className="rounded-e-lg absolute -end-[17px] top-[142px] h-[64px] w-[3px] bg-onSurface dark:bg-onSurface"></div>
      <div className="bg-white h-[572px] w-[272px] overflow-hidden rounded-[2rem] dark:bg-onSurface">
        <Image src={preview} className="h-[572px] w-[272px]" alt="" />
      </div>
    </div>
  );
}
