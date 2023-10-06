import "./BecomeInstructorStyle.css"
import img1 from "./../../Const/NewsImages/News-1.jpg"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { cardTitle, cardText, listGroupItems, cardBtn } from "../../Data/AboutPageData";

const BecomeInstructor = () => {
    return (
        <div className="first-about-comp">
            <Card style={{ width: '100%', height: '30rem' }} className="card1">
                <div className="info1">
                    <Card.Body className="cardbody1">
                        <Card.Title className="cardtitle1">{cardTitle}</Card.Title>
                        <Card.Text className="cardtext1">
                            {cardText}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {listGroupItems.map((item) => (<><ListGroup.Item className="carditem" key={item.id}><i className="fa fa-check"></i>{item}</ListGroup.Item></>))}
                    </ListGroup>
                    <button className="btn">{cardBtn}</button>
                </div>
                <Card.Img variant="left" src={img1} className="cardimg1"/>
            </Card>
        </div>
    )
}

export default BecomeInstructor