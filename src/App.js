import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import { makeStyles } from "@mui/styles";

function App() {
const useStyle = makeStyles(()=>({
  App:{
    backgroundColor:"#14161a",
    color:"white",
    minHeight:"100vh",
  },
}));
const classes = useStyle();
  return (
      <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/Coin/:id" element={<CoinPage />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
