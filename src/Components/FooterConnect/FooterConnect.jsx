import "./FooterConnectStyle.css"

const FooterConnect = ({title_1, icons}) => {
    return (
        <div className="footer-connect">
            <h3>{title_1}</h3>
            <ul>
                {icons.map((icon) => <li key={icon.id}><i className={icon}></i></li>)}
            </ul>
        </div>
    )
}

export default FooterConnect