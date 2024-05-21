const LoadedData = ({ data2 }) => {
  const { bookName } = data2;
  return (
    <div>
      <h1>{bookName}</h1>
    </div>
  );
};

export default LoadedData;
