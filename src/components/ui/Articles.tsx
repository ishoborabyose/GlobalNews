import Wrapper from "../wrappers/Wrapper";
import { BsArrowRight } from "react-icons/bs";
interface MyObject {
  image: string;
  publisher: string;
  title: string;
  description: string;
  category: string;
  read: string;
}

const Articles: React.FC = () => {
  const data: MyObject[] = [
    {
      image:
        "https://play-lh.googleusercontent.com/MJGdLDGjToSdYvuMtZm6WLEFGCAyz50pN5YRBEvFtAmNmHdTThla5omYE-3LY2WgW7A",
      publisher: "Formula 1 • 3 hours ago",
      title: "'He deserves a lot more'Verstappen backs Alonso",
      description:
        "Max Verstappen believes his fellow two-time world champion Fernando Alonso 'deserves a lot more' victories in Formula I and has backed the Spaniar...",
      category: "sport",
      read: "• 8 min read",
    },
    {
      image:
        "https://play-lh.googleusercontent.com/MJGdLDGjToSdYvuMtZm6WLEFGCAyz50pN5YRBEvFtAmNmHdTThla5omYE-3LY2WgW7A",
      publisher: "Formula 1 • 3 hours ago",
      title: "'He deserves a lot more'Verstappen backs Alonso",
      description:
        "Max Verstappen believes his fellow two-time world champion Fernando Alonso 'deserves a lot more' victories in Formula I and has backed the Spaniar...",
      category: "sport",
      read: "• 8 min read",
    },
    {
      image:
        "https://play-lh.googleusercontent.com/MJGdLDGjToSdYvuMtZm6WLEFGCAyz50pN5YRBEvFtAmNmHdTThla5omYE-3LY2WgW7A",
      publisher: "Formula 1 • 3 hours ago",
      title: "'He deserves a lot more'Verstappen backs Alonso",
      description:
        "Max Verstappen believes his fellow two-time world champion Fernando Alonso 'deserves a lot more' victories in Formula I and has backed the Spaniar...",
      category: "sport",
      read: "• 8 min read",
    },
    {
      image:
        "https://play-lh.googleusercontent.com/MJGdLDGjToSdYvuMtZm6WLEFGCAyz50pN5YRBEvFtAmNmHdTThla5omYE-3LY2WgW7A",
      publisher: "Formula 1 • 3 hours ago",
      title: "'He deserves a lot more'Verstappen backs Alonso",
      description:
        "Max Verstappen believes his fellow two-time world champion Fernando Alonso 'deserves a lot more' victories in Formula I and has backed the Spaniar...",
      category: "sport",
      read: "• 8 min read",
    },
  ];
  return (
    <Wrapper>
      <div className="mt-16">
        <div className="flex justify-center items-center">
          <img
            className="w-1/2 rounded-md "
            src="https://i0.wp.com/fabukmagazine.com/wp-content/uploads/2023/02/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg?resize=768%2C576&ssl=1"
            alt="netflix"
          />
          <div className="ml-12  ">
            <p className="text-gray-500 py-2 mb-5 text-xl leading-7 font-medium">
              Netflix • 12 minutes ago
            </p>

            <h2 className="text-gray-800 text-4xl mb-8 font-bold leading-10">
              Where To Watch 'John Wick: Chapter 41
            </h2>
            <p className="text-gray-500 text-xl font-medium leading-7 mb-5">
              There's been no official announcement regarding John Wick: Chapter
              4's streaming release. However, given it's a Lionsgate film, John
              Wick: Chapter 4 will eventually be released on Starz,...
            </p>
            <p className="text-gray-500 py-2 text-xl leading-7 font-medium">
              <span className="text-red-600">Movies</span> • 4 min read
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-between my-12 py-3">
            <h1 className="text-gray-800 text-5xl  font-bold leading-10">
              Latest News
            </h1>
            <p className="text-red-600 flex items-center gap-2 text-2xl leading-7 font-bold">
              See all <BsArrowRight />{" "}
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {data.map((item, index) => (
              <div key={index}>
                <img className="rounded-md" src={item.image} alt="capture" />
                <div>
                  <h2 className="text-gray-500 py-2 mb-2 text-lg leading-7 font-medium">
                    {item.publisher}
                  </h2>
                  <h1 className="text-gray-800 text-2xl mb-4 font-bold leading-7">
                    {item.title}
                  </h1>
                  <p className="text-gray-500 text-lg font-medium leading-7 mb-3">
                    {item.description}
                  </p>
                  <div className="flex gap-2  py-2 text-lg leading-7 font-medium">
                    <h6 className="text-red-600">{item.category}</h6>
                    <h6 className="text-gray-500">{item.read}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Articles;
