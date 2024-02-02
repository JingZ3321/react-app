// import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  return (
    <>
      <h1>List</h1> {/* React.createElement('h1') */}
      {items.length === 0 ? <p>No Item found</p> : null}
      {items.length === 0 && <p>No Item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
