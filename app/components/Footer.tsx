import Link from "next/link";

const Footer = () => {
  return (
    <div className="max-sm:flex max-sm:justify-center text-white  mb-[70px]">
      <Link href={"Register"}>
        <button className="w-[378px] h-[62px] relative z-10 bg-[#61C2D0]  text-[18px] font-bold ">
          {" "}
          GET STARTED
        </button>
      </Link>
      <svg
        className="max-sm:absolute max-sm:right-0 max-sm:bottom-0 absolute right-0 bottom-0 "
        width="211"
        height="181"
        viewBox="0 0 211 181"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="153" r="100" fill="#A1E0E9" fill-opacity="0.33" />
        <circle cx="157" cy="100" r="100" fill="#A1E0E9" fill-opacity="0.33" />
      </svg>
    </div>
  );
};

export default Footer;
