import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="elebrimir">Pablo Cortés</TwitterFollowCard>
      <TwitterFollowCard userName="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>
      <TwitterFollowCard userName="NASA">NASA</TwitterFollowCard>
      <TwitterFollowCard userName="roscosmos">Roscosmos</TwitterFollowCard>
    </section>
  );
}
