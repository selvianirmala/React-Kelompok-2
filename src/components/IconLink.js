const styles = {
    space: {
        marginBottom: "20px"
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