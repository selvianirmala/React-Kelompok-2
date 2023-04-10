const styles = {
    icon: {
        width: "36px",
        height: "36px",
        margin: "25px 46px 0 0"
    }
}

const SocialMedia = (props) => {
    return(
        <a 
            href={props.to}
        >
            <img style={styles.icon}
                src={props.iconSrc}
            />
        </a>
    )
}

export default SocialMedia