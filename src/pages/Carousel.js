import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import img1 from "../assets/slider1.png"
import img2 from "../assets/slider2.png"
import img3 from "../assets/slider3.png"
import styles from "./Carousel.styles"

const slider = () => {
    return(
        <div style={styles.container}>
            <AwesomeSlider>
                <div data-src={img1} />
                <div data-src={img2} />
                <div data-src={img3} />
            </AwesomeSlider>
        </div>
    )
}
  


export default slider