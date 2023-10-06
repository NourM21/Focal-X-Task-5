import "./HeroStyle.css"

const Hero = ({title, para_2, btn}) => {
    return (
        <div className="hero">
            <h1>{title}</h1>
            <p className="para_2">{para_2}</p>
            <button>{btn}</button>
        </div>
    )
}

export default Hero