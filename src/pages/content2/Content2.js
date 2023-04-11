import img1 from '../../assets/img1Section2.png'
import img2 from '../../assets/img2Section2.png'
import img3 from '../../assets/img3Section2.png'
import styles from "./Content2.styles"

const CARD = [
    {bgBtnTop: "#DA2525", img: img1, textP: "Pemberhentian Air Mengalir Sementara Pada Daerah ..."},
    {bgBtnTop: "#CCBC29", img: img2, textP: "PDAM Purwa Tirta Dharma memberikan bantuan ..."},
    {bgBtnTop: "#DA2525", img: img3, textP: "Tarif per-Bulan Naik Menjadi 10% Dari Tarif Normal ..."}
]

const Content2 = () => {
    return (
        <div style={styles.container}>
            <div>
                <h1 style={styles.title}>Ikuti Pengumuman Terbaru Kami</h1>
                <p style={styles.description}>
                    Jangan sampai ketinggalan pengumuman hingga berita terbaru kami
                </p>
            </div>

            <div style={styles.flex}>
                {/* card */}
                {CARD.map((item, idx) => {
                    return (
                        <div key={idx} style={styles.flexContainer}>
                            <button style={{...styles.buttonTop, background: item.bgBtnTop }}>Pengumuman</button>

                            <div style={styles.card}>
                                <img src={item.img} style={styles.img} />
                                <p style={styles.textP}>{item.textP}</p> 

                                <button style={styles.buttonBottom}>Lebih Lanjut</button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Content2