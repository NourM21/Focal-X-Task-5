import "./ChooseUsStyle.css"
import Accordion from 'react-bootstrap/Accordion'

const ChooseUs = ({image, chooseTitle, chooseText, accInfo}) => {
    return (
        <div className='choose-us'>
            <img className="mainImage" src={image}></img>
            <div className="choose-info">
                <div className="choose-title">
                    <h3>{chooseTitle}</h3>
                    <p>{chooseText}</p>
                </div>
                <Accordion defaultActiveKey="0">
                    {accInfo.map((acc) => (<>
                        <Accordion.Item eventKey={acc.id} style={{ border: "none" }}>
                            <Accordion.Header>{acc.header}</Accordion.Header>
                            <Accordion.Body className="accBody">
                                <img src={acc.image}></img>
                                {acc.body}
                            </Accordion.Body>
                        </Accordion.Item>
                    </>))}
                </Accordion>
            </div>
        </div>
    )
}

export default ChooseUs