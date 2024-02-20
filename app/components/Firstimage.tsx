import Image from "next/image";
import Tick from "@/public/Firstpage/Tick.png";
import Human from "@/public/Firstpage/Human.png";

const Firstimage = () => {
  return (
    <div className="max-sm:mt-[208px] max-sm:flex max-sm:relative mt-[208px] flex relative  ">
      <div className=" h-[308px] border-[#DADBDC] border-[14px] bg-white rounded-[29px] items-center flex-col flex relative px-5">
        <div className="w-[43.574px] h-[13px] bg-[#DADBDC] mt-[5px] rounded-[14px] flex-shrink-0 "></div>
        <div className="w-[92.422px] h-[10.227px] rounded-[14px] mt-[70px] bg-[#DADBDC] flex-shrink-0"></div>
        <div className="w-[92.422px] h-[10.227px] rounded-[14px] mt-[10px] bg-[#DADBDC] flex-shrink-0"></div>
        <div className="w-[92px] flex justify-start mt-[10px]">
          <div className="w-[62.422px] h-[10.227px] rounded-[14px] bg-[#DADBDC]"></div>
        </div>
        <Image
          className="max-sm:mt-[27px] mt-[27px] "
          src={Tick}
          width={73}
          height={69}
          alt="Tick"
        />
      </div>
      <Image
        className="max-sm:absolute max-sm:bottom-0 max-sm:left-[-40px] absolute bottom-0 left-[-40px]"
        src={Human}
        width={61}
        height={179}
        alt="human"
      />
    </div>
  );
};

export default Firstimage;
