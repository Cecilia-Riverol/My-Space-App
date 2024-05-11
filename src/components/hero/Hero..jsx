import { Typography } from "@mui/material";
import "./Hero.css";


function Hero () {
    const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/1/18/Creative-Tail-rocket.svg';
    return (
    <>
    <Typography variant="h1" gutterBottom>Welcome</Typography>
        <img src={imageUrl} alt="Rocketship" id="Rocket"/>
        </>
    );   
}

export default Hero;