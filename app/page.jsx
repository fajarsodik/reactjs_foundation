import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : "default title"}</h1>;
}

export default function HomePage() {
  const names = ["fajar", "sodik", "mochamad"];
  function handleClick() {
    setLikes(likes + 1);
  }
  const [likes, setLikes] = React.useState(0);
  return (
    <div>
      {/* Nesting the Header component */}
      <Header title="Joskun" />
      <Header title={"joskun"} />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like({likes})</button>
    </div>
  );
}