import Wrapper from "../wrappers/Wrapper";

const Moto = () => {
  return (
    <Wrapper>
      <div className="bg-[#f6f6f6] py-9">
        <div className="flex flex-col items-center">
          <h1 className="text-gray-500 py-2 text-lg leading-7 font-medium">
            WELCOME TO GLOBAL NEWS
          </h1>
          <h3 className="text-3xl font-bold leading-7 py-2 text-gray-800 ">
            Bringing the <span className="text-red-600">World</span> to Your
            Doorstep.
          </h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default Moto;
