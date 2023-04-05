
import icon1 from '../../assets/Professional.svg'
import icon2 from '../../assets/24_H.svg'
import icon3 from '../../assets/Headphone.svg'
import styles from "./Content1.styles"

const ICON_PROPS = [
    { src: "", href:"#"},
]

const Content = () => {
    return(
        <div style={styles.container}>
            <div style={styles.box0}>
                <h1 style={styles.title}>Kenapa Memilih Kami?</h1>
                <span style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                </span>
            </div>
            <div style={styles.box1}>
                <img src={icon1}></img>
                <span style={styles.iconTitle}>
                    Professional
                </span>
            </div>
            <div style={styles.box2}>
                <img src={icon2}></img>
                <span style={styles.iconTitle}>
                    24H Non-Stop
                </span>
            </div>
            <div style={styles.box3}>
                <img src={icon3}></img>
                <span style={styles.iconTitle}>
                    Full Support
                </span>
            </div>
        </div>
    )
}

export default Content