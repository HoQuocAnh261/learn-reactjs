import "./App.css";
import ButtonState from "./components/ButtonState";
import ImageViewer from "./components/ImageViewer";
import RateState from "./components/RateState";

function App() {
  return (
    <div>
      <ButtonState />
      <hr />
      <RateState />
      <hr />
      <ImageViewer />
    </div>
  );
}

export default App;
