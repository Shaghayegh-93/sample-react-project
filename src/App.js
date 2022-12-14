
import "./App.css";
import DaysForcast from "./DaysForcast";
import Header from "./Header";


export default function App() {
  return (
    <div className="App container gx-0 border rounded-2 my-5">
      <Header />
      <DaysForcast />
      <a href="https://github.com/Shaghayegh-93/sample-react-project">Github link</a>
    </div>
  );
}
