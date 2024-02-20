import Formlogin from "../Login-components/Formlogin";
import Loginimage from "../Login-components/Loginimage";
import Topbar from "../components/Topbar";

const page = () => {
  return (
    <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:relative bg-[#E9F4F2] text-white w-[430px] flex flex-col items-center relative ">
      <Topbar />
      <Loginimage />
      <Formlogin />
    </div>
  );
};

export default page;
