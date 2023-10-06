import "./AboutComponentStyle.css"
import BecomeInstructor from "../BecomeInstructor/BecomeInstructor"
import OurTeam from "../OurTeam/OurTeam"
import BestEducation from "../BestEducation/BestEducation"
import ChooseUs from "./../ChooseUs/ChooseUs"
import { cards, bestEduCards, bestEduTitle, bestEduPara, image, chooseTitle, chooseText, accInfo } from "./../../Data/AboutPageData"

const AboutComponent = () => {
    return (
        <div className="about-comp">
            <BecomeInstructor />
            <OurTeam cards={cards}/>
            <BestEducation bestEduCards={bestEduCards} bestEduTitle={bestEduTitle} bestEduPara={bestEduPara}/>
            <ChooseUs image={image} chooseTitle={chooseTitle} chooseText={chooseText} accInfo={accInfo}/>
        </div>
    )
}

export default AboutComponent