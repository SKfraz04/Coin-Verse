// import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import React from "react";
import Carousel from "../banner/Carousel";

// const useStyle = makeStyles(() => ({
//   banner: {
//     backgroundImage: "url(./banner2.jpg)"  },
// }));

const Banner = () => {
  // const classes = useStyle();
  return (
    // <div className={classes.banner}>
    //   <Container className={classes.bannerContant}>
    //     <div className={classes.banner.tagline}>banner</div>
    //   </Container>
    // </div>
    <div className="banner">
      <img src="./banner2.jpg" alt="bgbanner" />
      <div className="bannerContant">
        <h1>CryptoVerse</h1>
        <p>Get All The Info Regarding Your Favorite Crypto Currency</p>
      </div>
      <Container>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
