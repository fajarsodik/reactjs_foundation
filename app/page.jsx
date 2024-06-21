import LikeButton from "./like-button";

function Header({ title }) {
  return <h1>{title ? title : "default title"}</h1>;
}

export default function HomePage() {
  const names = ["fajar", "sodik", "mochamad"];

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
      <LikeButton />
    </div>
  );
}
