import "./App.css";
import { Provider } from "./context/Context";
import Router from "./shared/Router";

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
