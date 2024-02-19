import "./App.css";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar/navbar";

function App() {
  return (
    <>
      <Navbar name={"Javed"} />
      <Hero age={25} />
    </>
  );
}

export default App;
