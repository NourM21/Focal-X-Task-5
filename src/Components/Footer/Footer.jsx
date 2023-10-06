import "./FooterStyle.css"
import FooterAbout from "./../FooterAbout/FooterAbout"
import FooterConnect from "./../FooterConnect/FooterConnect"
import FooterProjects from "./../FooterProjects/FooterProject"
import FooterGallery from "./../FooterGallery/FooterGallery"
import FooterContact from "./../FooterContact/FooterContact"
import { title, title_1, title_2, title_3, title_4, para, para_1, img_1, img_2, links, links_1, icons } from "./../../Data/FooterData"

const Footer = () => {
    return (
        <div className="footer">
            <div className="info">
                <div>
                    <FooterAbout title={title} para={para}/>
                    <FooterConnect title_1={title_1} icons={icons}/>
                </div>
                <FooterProjects title_2={title_2} links={links}/>
                <FooterGallery title_3={title_3} img_1={img_1} img_2={img_2}/>
                <FooterContact title_4={title_4} para_1={para_1} links_1={links_1}/>
            </div>
            <p>Copyright ©2023. All Rights Reserved. -- Designed with love by <span>Untree.co</span> Distributed By <span>ThemeWagon</span></p>
        </div>
    )
}

export default Footer