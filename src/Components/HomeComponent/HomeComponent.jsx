import './HomeComponentStyle.css'
import BrowseCat from "./../BrowseCat/BrowseCat"
import BecomeInstructor from "./../BecomeInstructor/BecomeInstructor"
import BestEducation from '../BestEducation/BestEducation'
import HomeNewsComponent from './../HomeNewsComponent/HomeNewsComponent'
import ChooseUs from './../ChooseUs/ChooseUs'
import RightCourse from '../RightCourse/RightCourse'
import { browseTitle, browseCatCards, browsePara, browseLink, rightCourseTitle, rightCourseDesc, rightCourseCards, title_1, para_2_1, btn_1, homeCards, homeNewsTitle, homeNewsPara } from './../../Data/HomePageData'
import { bestEduCards, bestEduTitle, bestEduPara, image, chooseTitle, chooseText, accInfo } from "./../../Data/AboutPageData"
import Hero from '../Hero/Hero'

const HomeComponent = () => {
    return (
        <div className='home-comp'>
            <BrowseCat browseTitle={browseTitle} browseCatCards={browseCatCards} browsePara={browsePara} browseLink={browseLink}/>
            <BecomeInstructor />
            <BestEducation bestEduCards={bestEduCards} bestEduTitle={bestEduTitle} bestEduPara={bestEduPara}/>
            <RightCourse rightCourseTitle={rightCourseTitle} rightCourseDesc={rightCourseDesc} rightCourseCards={rightCourseCards}/>
            <Hero title={title_1} para_2={para_2_1} btn={btn_1}/>
            <HomeNewsComponent homeCards={homeCards} homeNewsTitle={homeNewsTitle} homeNewsPara={homeNewsPara}/>
            <ChooseUs image={image} chooseTitle={chooseTitle} chooseText={chooseText} accInfo={accInfo}/>
        </div>
    )
}

export default HomeComponent