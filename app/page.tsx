import Image from "next/image";
import Topbar from "./components/Topbar";
import Firstimage from "./components/Firstimage";
import Paragraph from "./components/Paragraph";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="max-sm:flex max-sm:w-full  max-sm:flex-col max-sm:items-center max-sm:relative bg-[#E9F4F2] w-[430px] relative flex flex-col items-center">
      <Topbar />
      <Firstimage />
      <Paragraph />
      <Footer />
    </main>
  );
}
