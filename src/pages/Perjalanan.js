import koma from "../assets/koma.svg"
import React from "react"
import deskripsi from "../assets/deskripsi.svg"
import orang from "../assets/orang.svg"
import IconLink from "../components/IconLink"


const Styles = {
    container: {
        backgroundColor: "#F2F2F2"

    },

    foto: {
        marginRight:"113px",
        width: "487px",
        height: "580px"
    },
    fontDeskripsi: {

        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontweight: "400px",
        fontSize: "25px",
        lineHeight: "48px",
        marginRight: 40,
        marginLeft: 40,
        marginTop: 24,
        marginBottom: 38
    },

    buttonPosition:{
        flex:1,
        display: "flex",
        flexDirection:'column',
        alignItems: "flex-end",
        justifyContent:"center"


    },

    button: {
        background: "white",
        border: "none",
        weight:"261px",
        height:"56px",
        border: "3px solid #157599",
        borderRadius: "8px",
        marginRight: "500px",


        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "25px",
        paddingRight: 59,
        paddingLeft: 60,
        paddingTop: 16,
        paddingBottom: 16,
        color: "#157599"
    },
    rightSession: {
        display: "flex",
        alignItems: "center"
    },
    kenal:{
        width: "420px",
        height: "110px",
        left: "236px",
        top: "2394px",
        marginLeft:"354px",

        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "40px",
        lineHeight: "50px"
    },
    ady:{

        width: "180px",
        height: "23px",
        marginRight:"420px",
        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: "22px",

    },
    posisiAdy:{
        marginLeft:"1000px",
        paddingTop:"10000 px"
    },

    koma1:{
        marginTop:"8px",
        marginLeft:"282px",
        top: "2342px",
        left:"188px"
        }, 
    president:{

        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        marginRight:"380px",
        lineHeight: "15px"

        },

    posKet:{
        width: "180px",
        height: "23px",
        left: "840px",
        top: "3137px"
        },

    cardDeskripsi:{
        marginLeft:"330px",
        marginBottom:"400px",
        height: "638px",
        width: "529px",
        backgroundColor: "#ffffff",
        borderRadius:"4px"

    },
    koma:{
        marginTop:"97px",
        paddingRight:"8px"

    },
    posisiPresident:{
        width: "487px",
        height: "580px",
        marginLeft:"1000px"
    },
    profileContainer:{
        display:'flex'
    },
    leftSection:{
        flex:1
    },
    rightSection:{
        flex:1,
        display: "flex",
        flexDirection:'column',
        alignItems: "flex-end"
    },



}



const Perjalanan = () =>{
    return(
<div style={Styles.container}>
            <div style={Styles.koma1}>

            <img src={koma} style={Styles.koma}/>
            <img src={koma} style={Styles.koma}/>

            </div>
            <h2 style={Styles.kenal}>
            Mari Kenali Kami dan Perjalanan Kami
            </h2>
    <div style={Styles.profileContainer}>
        <div style={Styles.leftSection}>
            <div style={Styles.cardDeskripsi}>
                <h4 style={Styles.fontDeskripsi}>
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore “.
                </h4>
            </div>    
        </div>
        <div style={Styles.rightSection}> 
        <img src={orang} style={Styles.foto}/>
        <span style={Styles.ady}>Ir.H.Ady Setiawan.SH</span>
        <span style={Styles.president}>President of PDAM Purwa Tirta Dharma</span>
        <div style={Styles.buttonPosition}>
            <button style={Styles.button}>
                Lebih Lengkap
            </button>
        </div>
        </div> 
    </div> 
            
</div>
        



    )
}
export default Perjalanan