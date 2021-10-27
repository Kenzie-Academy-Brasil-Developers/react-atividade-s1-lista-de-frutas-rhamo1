const List = ({ list }) => {
  console.log();
  return (
    <ul>
      {list.map((fruit) => (
        <li>{fruit.name}</li>
      ))}
    </ul>
  );
};

export default List;
