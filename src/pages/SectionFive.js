import React from 'react'
import iconSecFive from '../assets/secfive.svg'
import styles from './SectionFive.styles'

function SectionFive() {
  return (
    <div>
        <div style={styles.container}>
            <div>
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