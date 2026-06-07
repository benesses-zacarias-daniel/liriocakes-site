import { BrowserRouter } from "react-router-dom";
import Context from "./components/context/Context";
import AppContext from "./components/layout/AppContext";


const App = () => {
  return (
    <BrowserRouter>
      <Context>
        <AppContext />
      </Context>
    </BrowserRouter>
  );
}

export default App;
