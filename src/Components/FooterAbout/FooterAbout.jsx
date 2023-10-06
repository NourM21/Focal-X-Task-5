import "./FooterAboutStyle.css"

const FooterAbout = ({title, para}) => {
    return (
        <div className="footer-about">
            <h3>{title}</h3>
            <p>{para}</p>
        </div>
    )
}

export default FooterAbout