import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const data2 = data.find((data) => data.bookId == id);
  console.log(data2);

  return <div>{data2.bookName}</div>;
};

export default Details;
