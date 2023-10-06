import "./FooterGalleryStyle.css"

const FooterGallery = ({title_3, img_1, img_2}) => {
    return (
        <div className="footer-gallery">
            <h3>{title_3}</h3>
            <div className="div">
                {img_1.map((image) => <img src={image} key={image.id} />)}
            </div>
            <div className="div1">
                {img_2.map((image) => <img src={image} key={image.id} />)}
            </div>
        </div>
    )
}

export default FooterGallery