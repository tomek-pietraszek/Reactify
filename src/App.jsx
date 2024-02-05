import Login from "./components/Login";
import Spotify from "./components/Spotify";
import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/Constants";
import { useEffect } from "react";

function App() {
  //use custom hook
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;
    // console.log(hash);
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      // console.log(token);
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);

  return <div>
  {token ? <Spotify /> : <Login />}
  </div>;
}

export default App;
