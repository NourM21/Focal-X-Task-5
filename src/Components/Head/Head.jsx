import "./HeadStyle.css"

const Head = ({headInfo, headBtns}) => {
    return (
        <div className="head-1">
            <div className="info">
                {headInfo.map((info) => (<div className="info1" key={info.id}><i className={info.icon}></i><p className="para">{info.text}</p></div>))}
            </div>
            <div className="btns">
                {headBtns.map((btn) => (<div className="btns1" key={btn.id}><i className={btn.icon}></i><button className="btn">{btn.text}</button></div>))}
            </div>
        </div>
    )
}

export default Head