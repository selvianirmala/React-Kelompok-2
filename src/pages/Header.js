import phoneIcon from "../assets/phone-call.svg"
import sosmedText from "../assets/Social Media.svg"
import facebookIcon from "../assets/facebook.svg"
import twitterIcon from "../assets/twitter.svg"
import instagramIcon from "../assets/instagram.svg"
import youtubeIcon from "../assets/youtube.svg"
import IconLink from "../components/IconLink"
import styles from "./Header.styles"

const ICON_PROPS = [
<<<<<<< HEAD
    { src: sosmedText, href:"#"},
=======
>>>>>>> footer
    { src: facebookIcon, href:"https://facebook.com"},
    { src: instagramIcon, href:"https://instagram.com"},
    { src: twitterIcon, href:"https://twitter.com"},
    { src: youtubeIcon, href:"https://youtube.com"},
]

const Header = () => {
    return(
        <div style={styles.container}>
            <div style={styles.itemContainer}>
                <div style={styles.leftSection}>
                    <h1 style={styles.title}>Menjadi Perusahaan<br/>Air Minum Modern</h1>

                    <p style={styles.descripttion}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    </p>

                    <button style={styles.button}>
                        <img style={styles.phoneIcon} src={phoneIcon}/>
                            <span style={styles.textButton}>
                                Hubungi kami
                            </span>
                    </button>
                </div>

                <div style={styles.rightSection}>
<<<<<<< HEAD
=======
                    <img src={sosmedText}></img>
>>>>>>> footer
                    {
                        ICON_PROPS.map((item, idx) => (
                            <IconLink 
                                key={idx}
                                iconSrc={item.src} 
                                to={item.href}
                            />
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Header