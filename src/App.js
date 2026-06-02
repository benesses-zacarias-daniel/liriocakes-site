import { HashRouter } from "react-router-dom";
import Context from "./components/context/Context";
import AppContext from "./components/layout/AppContext";


const App = () => {
  return (
    <HashRouter>
      <Context>
        <AppContext />
      </Context>
    </HashRouter>
  );
}

export default App;
