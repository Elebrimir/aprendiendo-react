import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "elebrimir",
    name: "Pablo Cortés",
    isFollowing: true,
  },
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    userName: "NASA",
    name: "NASA",
    isFollowing: false,
  },
  {
    userName: "roscosmos",
    name: "Roscosmos",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map((user) => (
        <TwitterFollowCard
          key={user.userName}
          userName={user.userName}
          initialIsFollowing={user.isFollowing}
        >
          {user.name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
