import Wrapper from "../wrappers/Wrapper";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="flex sm:flex-col  sm:justify-center justify-between sm:pt-4 py-20">
        <div className="flex sm:mb-4">
          {[
            "GlobalNews",
            "Trending",
            "Health",
            "Business",
            "Sport",
            "Technology",
          ].map((item: string, index: number) => {
            return (
              <div
                className={`  px-3 ${
                  index === 0
                    ? "text-red-600 text-2xl sm:pl-0 font-bold leading-7 border-r-2 border-r-gray-500 border-solid "
                    : "text-gray-800 text-base sm:pr-2  leading-7 font-semibold cursor-pointer hover:bg-gray-100 "
                }`}
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
        <input
          placeholder="Search..."
          className="border-b-2 border-b-gray-500 border-solid outline-none"
        />
      </div>
    </Wrapper>
  );
};

export default Navbar;
