import Link from "next/link";

const Formlogin = () => {
  return (
    <div>
      {" "}
      <form className="max-sm:flex max-sm:flex-col max-sm:items-center flex flex-col items-center">
        <input
          className="w-[380px] h-[49px] py-[10px] outline-none rounded-[30px] pl-[30px] "
          type="email"
          placeholder="Email"
        />
        <input
          className="w-[380px] h-[49px] mt-[35px] py-[10px] outline-none rounded-[30px] pl-[30px]"
          type="password"
          placeholder="Password "
        />

        <h1 className="text-[#61C2D0] max-sm:mt-11 mt-11">Forgot Password</h1>

        <button
          type="submit"
          className="w-[378px] h-[62px] bg-[#61C2D0] text-[18px] font-bold relative z-10 max-sm:mt-12 mt-12"
        >
          {" "}
          LOG IN
        </button>
        <p className="text-[#00000080] my-[14px] relative z-10 py-2">
          Dont have an account?{" "}
          <Link href={"Register"}>
            <span className="text-[#0DA1CF] text-[17px] ml-[11px]">
              Sign up
            </span>
          </Link>
        </p>
      </form>
      <svg
        className="absolute right-0 bottom-0 "
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

export default Formlogin;
