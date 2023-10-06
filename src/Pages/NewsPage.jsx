import Hero from "./../Components/Hero/Hero.jsx"
import NewsComponent from "../Components/NewsComponent/NewsComponent.jsx"
import { title, para_2, btn, cards } from "./../Data/NewsPageData.js"

const NewsPage = () => {
    return (
        <>
            <Hero title={title} para_2={para_2} btn={btn}/>
            <NewsComponent cards={cards}/>
        </>
    )
}

export default NewsPage