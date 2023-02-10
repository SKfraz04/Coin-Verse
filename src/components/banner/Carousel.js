import { makeStyles } from '@mui/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import { TrendingCoins } from '../../Config/api';
import { CryptoState} from "../../CryptoContext"
// import { numberWithCommas } from "../CoinsTable";

const useStyle = makeStyles ((Theme)=> ({
    Careusel:{
        height:"50%",
        display:"flex",
        alineItem:"center",
    },  
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "white",
    },
}));  

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

const Carousel = () => {
  const [trending, setTrending] = useState([]); 
     const classes = useStyle ();
    const {currency} = CryptoState ();
    const fetchTrendingCoins = async () =>{
      const {data} = await axios.get(TrendingCoins (currency))
      setTrending (data);
    };
    console.log(trending);
    useEffect(() => {
      fetchTrendingCoins();
      },
      [currency]);  

        const items = trending.map((coin) => {
          let profit = coin?.price_change_percentage_24h >= 0;

        return(
          <Link className={classes.CarouselItem} to={`/coins/${coin.id}`}>
            <img src={coin?.image} alt={coin.name} height="300" style={{marginBottom:10}} />
             <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {Symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
          </Link>
        )
      })

      const responsive ={
        0:{items:2},
        512:{items:4}
      }
  return (
    <div className={classes.Carousel}>
      <AliceCarousel 
      mouseTracking
      autoPlayInterval={1000}
      infinite
      disableDotsControls
      animationDuration={1500}
      responsive={responsive}
      autoPlay
      items={items}  
      disableButtonsControls    
      />
    </div>
  )
}

export default Carousel