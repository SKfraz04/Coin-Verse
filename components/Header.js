import {
  AppBar,
  Container,
  createTheme,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const Header = () => {
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();
  console.log("CryptoState");

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  const useStyle = makeStyles(() => ({
    title: {
      color: "gold",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));
  const classes = useStyle();
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="navbar">
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                className={classes.title}
                onClick={() => navigate("/")}
                variant={"h6"}
              >
                CryptoVerse
              </Typography>
              <Select
                variant="outlined"
                style={{
                  width: 100,
                  height: 40,
                  marginRight: 15,
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default Header;
