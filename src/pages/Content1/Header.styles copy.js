import bgHeader from "../assets/header.jpg"

const styles = {
    container: {
        backgroundImage: `url(${bgHeader})`,
        maxHeight: "693px",
        padding: "169px 75px",
        boxSizing: "border-box"
    },
    itemContainer: {
        display: "flex",
        justifyCOntent: "space-between"
    },
    title: {
        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: "700px",
        fontSize: "50px",
        lineHeight: "62px",
        color: "#FFFFFF"
    },
    descripttion: {
        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: "400px",
        fontSize: "30px",
        lineHeight: "38px",
        margin: "22px 0",
        color: "#FFFFFF"
    }, 
    button: {
        width: "261px",
        height: "71px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
        borderRadius: "10px",
        backgroundColor: "white"
    },
    textButton: {
        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "25px",
        color: "#157599",
        marginLeft: "8px"
    },
    phoneIcon: {
        width: 24,
        height: 24
    },
    leftSection: {
        flex: 2
    },
    rightSection: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        alignItems: "flex-end"
    }
}

export default styles