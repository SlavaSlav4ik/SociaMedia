import React, { useEffect, useState } from "react";
import gif1 from "../assets/3a0c9909b542717ce9f651d07c4d4592.gif";
import gif2 from "../assets/b3db578eee7f9c757429a68ca32892fa.gif";

import "./GifSlider.css";

const gifs = [gif1, gif2];

const GifSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % gifs.length);
        }, 10000); // каждые 10 секунды

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="gif-slider">
            <img src={gifs[current]} alt="GIF" className="gif-image" />
            <p className="slider-text">Раздел в разработке...</p>
        </div>
    );
};

export default GifSlider;
