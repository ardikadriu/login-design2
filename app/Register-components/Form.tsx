import Registerbutton from "./Registerbutton";
import Link from "next/link";

const Form = () => {
  return (
    <div className="  max-sm:flex max-sm:items-center max-sm:flex-col max-sm:mt-[162px] mt-40">
      <div className="text-center">
        <h1 className="text-[32px] text-black">Welcome Onboard!</h1>
        <h3 className="text-black ">Lets help you meet up tasks.</h3>
      </div>
      <form
        action=""
        className="max-sm:w-full max-sm:flex max-sm:items-center max-sm:flex-col flex flex-col items-center"
      >
        {" "}
        <input
          className="mt-[74px] w-[380px] pl-5 pt-4 pb-4 rounded-[30px] outline-0"
          type="text"
          placeholder="Enter your name"
        />
        <input
          className="mt-[40px] w-[380px] pl-5 pt-4 pb-4 rounded-[30px] outline-0"
          type="email"
          placeholder="Enter your email"
        />
        <input
          className="mt-[40px] w-[380px] pl-5 pt-4 pb-4 rounded-[30px] outline-0"
          type="password"
          placeholder="Enter your password"
        />
        <input
          className="mt-[40px] w-[380px] pl-5 pt-4 pb-4 rounded-[30px] outline-0"
          type="password"
          placeholder="Re-enter your passworda"
        />
        <button
          type="submit"
          className="w-[378px] h-[62px] bg-[#61C2D0] text-[18px] font-bold relative z-10 max-sm:mt-[105px] mt-[105px]"
        >
          {" "}
          REGISTER
        </button>
        <h1 className="text-[#00000080] my-[14px] relative z-10">
          Dont have an account?{" "}
          <Link href={"Login"}>
            <span className="text-[#0DA1CF] text-[17px] ml-[11px] ">
              Sign in
            </span>
          </Link>
        </h1>
        <svg
          className="absolute right-0 bottom-0  z-0"
          width="211"
          height="181"
          viewBox="0 0 211 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="153"
            r="100"
            fill="#A1E0E9"
            fill-opacity="0.33"
          />
          <circle
            cx="157"
            cy="100"
            r="100"
            fill="#A1E0E9"
            fill-opacity="0.33"
          />
        </svg>
      </form>
    </div>
  );
};

export default Form;
