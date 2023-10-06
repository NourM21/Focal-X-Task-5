import "./FooterProjectsStyle.css"

const FooterProject = ({title_2, links}) => {
    return (
        <div className="footer-projects">
            <h3>{title_2}</h3>
            <ul>
                {links.map((link) => <li key={link.id}>{link}</li>)}
            </ul>
        </div>
    )
}

export default FooterProject