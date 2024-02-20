import Image from "next/image";
import Woman from "@/public/Loginpage/LoginImage.png";
const Loginimage = () => {
  return (
    <div className="max-sm:mt-[200px] mt-[150px]">
      <Image src={Woman} width={268} height={263} alt="woman" />
    </div>
  );
};

export default Loginimage;
