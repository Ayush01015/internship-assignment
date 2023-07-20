import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import MobileHeader from "./Components/MobileHeader/MobileHeader";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection:"column"
      }}
    >
      <div
            style={{
        display: "flex",
      }}
      >
        <Header />
        <Body />
      </div>
      <MobileHeader />
    </div>
  );
}

export default App;
