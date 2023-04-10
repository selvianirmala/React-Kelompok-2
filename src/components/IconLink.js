const styles = {
    space: {
<<<<<<< HEAD
        marginBottom: "20px"
=======
        marginTop: "34px",
        width: 32
>>>>>>> footer
    }
}

const IconLink = (props) => {
    return(
        <a 
            href={props.to}
        >
            <img style={styles.space}
                src={props.iconSrc}
            />
        </a>
    )
}

export default IconLink