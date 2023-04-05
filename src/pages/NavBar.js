import logo from "../assets/logo.svg"
import searchIcon from '../assets/search.svg'
import styles from "./NavBar.Styles"
import React from "react"

const MENU = [
    {href: "#", label: "Beranda"},
    {href: "#", label: "Tentang"},
    {href: "#", label: "Galeri"},
    {href: "#", label: "Blog"},
]

const NavBar = () => {
    const [bgColor, setBgColor] = React.useState("transparent")
    // // akan dirender setiap kali ada perubahan

    // React.useEffect(() => {
    //     console.log("Render componen every time");
    // })

    // // Walaupun ada state yang berubah, dia tidak dijalankan ulang
    // // fase mounting
    // React.useEffect(() => {
    //     console.log("Mounting");
    //         // fase unmounting
    //         return() => {
    //             console.log("unmounting");
    //         }
    // }, [])

    // //diberi depedency (ditambahkan pada kurung siku), setiap state yg dimasukkan berubah, maka fungsi harus dijalankan ulang
    // // fase updating
    // React.useEffect(() => {
    //     console.log("Update");
    // }, [bgColor]) 

    const [isScroll, setIsScroll] = React.useState(false)
    // pada dom ada fungsi scroll y untuk mengetahui posisi kursor(?)
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false)
    }

    React.useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)

        return () => {
            window.removeEventListener("scroll", listenScrollEvent)
        }
    }, [])

    React.useEffect(() => {
        setBgColor(isScroll ? "#157599" : "transparent")
    }, [isScroll])

    return(
        <div style={styles.container(bgColor)}>
            <div>
                <img src = {logo} />
            </div>
                
            <div>
                {MENU.map((item, idx) => {
                        return(
                            <a href={item.href}
                                style={styles.menu}
                                key={idx}>
                                    {item.label}
                                </a>
                        )
                    }
                )}
            </div>

            <div style={styles.rightSession}>
                <img 
                    src={searchIcon}
                    style={styles.searchIcon} />
                <button 
                    style={styles.button}
                >
                    Customer Service
                </button>
            </div>
        </div>
    )
}

export default NavBar;