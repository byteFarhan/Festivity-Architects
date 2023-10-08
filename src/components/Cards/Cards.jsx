import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Cards = () => {
  const datas = useLoaderData();
  return (
    <div className="px-5 lg:px-0 max-w-[1400px] grid gap-4 lg:gap-6 mx-auto my-10 lg:my-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {datas.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Cards;
