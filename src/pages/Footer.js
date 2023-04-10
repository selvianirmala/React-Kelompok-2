import logoHeader from "../assets/logo-header.png"
import facebookIcon from "../assets/facebook.svg"
import twitterIcon from "../assets/twitter.svg"
import instagramIcon from "../assets/instagram.svg"
import youtubeIcon from "../assets/youtube.svg"
import SocialMedia from "../components/SocialMedia"
import whatsAppIcon from "../assets/whatsapp.svg"
import emailIcon from "../assets/email.svg"
import locationIcon from "../assets/location.svg"
import React from "react"
import styles from "./Footer.styles"

const ICON_PROPS = [
    { src: facebookIcon, href:"https://facebook.com"},
    { src: twitterIcon, href:"https://twitter.com"},
    { src: instagramIcon, href:"https://instagram.com"},
    { src: youtubeIcon, href:"https://youtube.com"},
]

const MENU = [
    {href: "#", label: "Tentang kami"},
    {href: "#", label: "Blog"},
    {href: "#", label: "Karir"},
    {href: "#", label: "Galeri"}
]

const Footer = () => {
    return(
        <div style={styles.container}>
            <div style={styles.itemContainer}>
                <div>
                    <img style={styles.logo} src={logoHeader} />
                    <p style={styles.description}>
                        PDAM Purwa Tirta Dharma Menyediakan air bersih yang sehat yang mampu memberikan kontribusi PAD pada kabupaten Grobogan
                    </p>
                    <div >
                        {
                            ICON_PROPS.map((item, idx) => (
                                <SocialMedia 
                                    key={idx}
                                    iconSrc={item.src} 
                                    to={item.href}
                                />
                            ))
                        }
                    </div>
                </div>
                    
                <div style={styles.flexBox}>
                    <h2 style={styles.h2}>NAVIGASI</h2>
                    <div style={styles.navDetail}>
                        <a href= "#" style={styles.activeLink}>Home</a>
                        {MENU.map((item, idx) => {
                            return(
                                <a href={item.href}
                                    style={styles.inActiveLink}
                                    key={idx}>
                                        {item.label}
                                    </a>
                            )
                        })}
                    </div>
                </div>

                <div style={styles.flexBox}>
                    <h2 style={styles.h2}>KONTAK</h2>
                    <div style={styles.kontakBox}>
                        <div style={styles.kontakFlex}>
                            <img src={locationIcon} />
                            <span style={styles.kontakText}>Jl. Gajah Mada No.3, Jetis Selatan, Purwodadi, Kec. Purwodadi, Kabupaten Grobogan, Jawa Tengah 58111</span>
                        </div>

                        <div style={styles.kontakFlex}>
                            <img src={whatsAppIcon} />
                            <span style={styles.kontakText}>+62 896 666 666</span>
                        </div>

                        <div style={styles.kontakFlex}>
                            <img src={emailIcon} />
                            <span style={styles.kontakText}>hallo@purwatirtadharma.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;