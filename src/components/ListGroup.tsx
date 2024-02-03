function ListGroup() {
  var names = ["Shishir", "Ram", "Shyam", "Hari"];

  return (
    <>
      <h1>This is a heading above the list</h1>
      <ul className="list-group">
        {names.map((names) => (
          <li className="list-group-item" key={names}>
            {names}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
