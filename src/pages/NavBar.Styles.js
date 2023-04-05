const Styles = {
    container: bgColor => {
        return{
            height: "80px",
            display: "flex",
            backgroundColor: bgColor,
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 70px",
            position: "fixed",
            boxSizing: "border-box",
            width: "100%",
            zIndex: 999,
            transition: "all .4s"
        }
    },
    menu: {
        fontFamily: 'Lato',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 22,
        color: "white",
        margin: "0 15px",
        textDecoration: "none"
    },
    searchIcon: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: "8px",
        border: "none",
        marginRight: 10,
    },
    button: {
        background: "white",
        borderRadius: "8px",
        border: "none",

        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "18px",
        padding: 10,
        color: "#157599"
    },
    rightSession: {
        display: "flex",
        alignItems: "center"
    }
}

export default Styles;