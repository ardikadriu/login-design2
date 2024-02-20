import Form from "../Register-components/Form";
import Registerbutton from "../Register-components/Registerbutton";
import Topbar from "../components/Topbar";

const page = () => {
  return (
    <div className="max-sm:flex max-sm:flex-col max-sm:w-full max-sm:relative overflow-hidden text-white bg-[#E9F4F2] w-[430px] flex flex-col items-center relative">
      <Topbar />
      <Form />
    </div>
  );
};

export default page;
