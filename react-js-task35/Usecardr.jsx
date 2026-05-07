// UserCard.jsx

function UserCard({ name, age }) {

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserCard;