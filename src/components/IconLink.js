const styles = {
    space: {
        marginTop: "34px",
        width: 32
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