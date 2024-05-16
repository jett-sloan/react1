import "./App.css";
import FirstComponent from "./components/FirstComponent";
import NamedComponent from "./components/NamedComponent";
import Tweet from "./components/Tweet";
import Person from "./components/Person";
export default function App() {
  return (
    <main>
      <Person
        name="Logan"
        age="21"
        hobbies={["games", "cooking", "playing"]}
      ></Person>
      <Tweet
        name="Crofton"
        username="cavemanCroft"
        messages="My third component"
        date="2023-02-01"
      ></Tweet>
      <FirstComponent></FirstComponent>
      <NamedComponent name="Jett"></NamedComponent>
    </main>
  );
}
