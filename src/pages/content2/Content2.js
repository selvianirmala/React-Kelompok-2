import img1 from '../../assets/img1Section2.png'
import img2 from '../../assets/img2Section2.png'
import img3 from '../../assets/img3Section2.png'

const styles = {
    container: {
        padding: "90px 75px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#F3F3F3'
    },
    title: {
        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: "400px",
        fontSize: "30px",
        lineHeight: "38px",
        margin: "22px 0",
        color: "#000",
        textAlign: "center"
    },
    description: {
        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: "400px",
        fontSize: "20px",
        lineHeight: "38px",
        margin: "22px 0",
        color: "#000",
        textAlign: "center"
    },
    flex: {
        display: "flex",
        justifyContent: "space-between",
        margin: "auto 70px"
    },
    flexContainer: {
        textAlign: 'center'
    },
    buttonTop: {
        marginBottom: "12px",
        width: "106px",
        height: "34px",
        borderRadius: "8px",
        color: "white",
        border: 0,
        fontFamily: 'Quicksand',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '12px',
        lineHeight: '15px'
    },
    buttonBottom: {
        width: '156px',
        height: '42px',
        borderRadius: '8px',
        border: '1px solid #157599',

        backgroundColor: '#FFFFFF',
        color: '#157599',
        fontFamily: 'Quicksand',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '22px',
        marginRight: '150px'       
    },
    card: {
        paddingTop: 30,
        width: "369px",
        height: "461px",

        background: "#EFEFEF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "8px",        
    },
    img: {
        width: "309px",
        height: "298px"
    },
    textP: {
        textAlign: "left",
        width: '306px',
        marginLeft: 30,

        fontFamily: 'Quicksand',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '25px'
    },

}


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

                {/* <div style={styles.flexContainer}>
                    <button style={{...styles.buttonTop, background: "#DA2525"}}>Pengumuman</button>

                    <div style={styles.card}>
                        <img src={img1} style={styles.img} />
                        <p style={styles.textP}>Pemberhentian Air Mengalir Sementara Pada Daerah ...</p> 

                        <button style={styles.buttonBottom}>Lebih Lanjut</button>
                    </div>
                </div>

                <div style={styles.flexContainer}>
                    <button style={{...styles.buttonTop, background: "#CCBC29"}}>Berita Terbaru</button>

                    <div style={styles.card}>
                        <img src={img2} style={styles.img} />
                        <p style={styles.textP}>PDAM Purwa Tirta Dharma memberikan bantuan ...</p> 

                        <button style={styles.buttonBottom}>Lebih Lanjut</button>
                    </div>
                </div>

                <div style={styles.flexContainer}>
                    <button style={{...styles.buttonTop, background: "#DA2525"}}>Pengumuman</button>

                    <div style={styles.card}>
                        <img src={img3} style={styles.img} />
                        <p style={styles.textP}>Tarif per-Bulan Naik Menjadi 10% Dari Tarif Normal ...</p> 

                        <button style={styles.buttonBottom}>Lebih Lanjut</button>
                    </div>
                </div> */}

                {/* end card */}

            </div>
        </div>
    )
}

export default Content2