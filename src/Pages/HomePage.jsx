import Hero from "./../Components/Hero/Hero.jsx"
import HomeComponent from "./../Components/HomeComponent/HomeComponent"
import { title, para_2, btn } from "./../Data/HomePageData.js"

const HomePage = () => {
    return (
        <>
            <Hero title={title} para_2={para_2} btn={btn}/>
            <HomeComponent />
        </>
    )
}

export default HomePage