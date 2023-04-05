import React from 'react'
import iconSecFive from '../assets/secfive.svg'

const styles = {
    container: {
        width: '1085px',
        height: '478px',
        display: 'flex',
        padding: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        borderBox: 'box-sizing',
        margin: 'auto'
    },
    leftSection: {
        marginRight: '30px'
    },
    rightSection: {
        marginLeft: '30px'
    },
    title: {
        fontFamily: 'Quicksand',
        fontSize: '40px',
        fontWeight: 700,
        lineHeigh: '50px'
    },
    body: {
        fontFamily: 'Quicksand',
        fontSize: '20px',
        fontWeight: 400,
        lineHeigh: '25px'
    },
    buttonContact: {
        width: '310px',
        height: "89px",
        backgroundColor: '#157599',
        color: '#fff',
        fontFamily: 'Quicksand',
        fontSize: '30px',
        fontWeight: 700,
        lineHeigh: '38px',
        borderRadius: '8px',
    },
    buttonConsul: {
        width: '310px',
        height: "89px",
        backgroundColor: '#fff',
        color: '#157599',
        fontFamily: 'Quicksand',
        fontSize: '30px',
        fontWeight: 700,
        lineHeigh: '38px',
        borderRadius: '8px',
        border: '3px solid #157599',
        marginLeft: '10px'
    },
    image: {
        width: '207px',
        height: '207px',
        marginLeft: '20px'
    }
}

function SectionFive() {
  return (
    <div>
        <div style={styles.container}>
            <div style={styles.rightSection}>
                <h1 style={styles.title}>Layanan berkualitas tinggi untuk <br/> masyarakat Indonesia.</h1>
                <p style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <button style={styles.buttonContact}>Kontak Kami</button>
                <button style={styles.buttonConsul}>Konsultasi</button>
            </div>
            <div style={styles.leftSection}>
                <img src={iconSecFive} style={styles.image} />
            </div>
        </div>
    </div>
  )
}

export default SectionFive