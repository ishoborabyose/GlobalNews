import { FaBusinessTime } from "react-icons/fa";

interface MyObject {
  title: string;
  icon: React.ReactNode;
}
const LeftSide: React.FC = () => {
  const data: MyObject[] = [
    {
      title: "Business",
      icon: <FaBusinessTime />,
    },
    {
      title: "Business",
      icon: <FaBusinessTime />,
    },
  ];
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          {item.icon}
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default LeftSide;
