import "./FooterContactStyle.css"

const FooterContact = ({title_4, para_1, links_1}) => {
    return (
        <div className="footer-contact">
            <h3>{title_4}</h3>
            <p>{para_1}</p>
            <ul>
                {links_1.map((link) => <li key={link.id}>{link}</li>)}
            </ul>
        </div>
    )
}

export default FooterContact