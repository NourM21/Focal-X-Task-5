import Hero from "./../Components/Hero/Hero.jsx"
import AboutComponent from "../Components/AboutComponent/AboutComponent.jsx"
import { title, para_2, btn } from "./../Data/AboutPageData.js"

const AboutPage = () => {
    return (
        <>
            <Hero title={title} para_2={para_2} btn={btn}/>
            <AboutComponent />
        </>
    )
}

export default AboutPage