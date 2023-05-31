import { BsGithub } from "react-icons/bs";
import Wrapper from "../wrappers/Wrapper";

const Footer = () => {
  return (
    <div className="bg-[#f6f6f6] py-5 mt-10 mb-auto ">
      <Wrapper>
        <div className="flex justify-between">
          <h2 className="text-red-600 text-2xl font-bold leading-7">
            GlobalNews
          </h2>

          <h4 className="text-sm text-gray-500 cursor-pointer">
            Powered by <span className="underline">News API</span>
          </h4>

          <div className="text-red-600">
            <BsGithub />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
