import "./HomeNewsComponentStyle.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const HomeNewsComponent = ({homeNewsTitle, homeNewsPara, homeCards}) => {
    return (
        <div className="news-comp">
            <div className="home-news-head">
                <h3>{homeNewsTitle}</h3>
                <p>{homeNewsPara}</p>
            </div>
            <Row xs={1} md={2} className="g-5">
                {homeCards.map((card) => (
                    <Col key={card.id}>
                    <Card className="card" style={{height: '20rem'}}>
                        <Card.Img variant="left" src={card.img} className="cardimg" />
                        <Card.Body className="cardbody">
                        <Card.Title className="cardtitle">{card.cardtitle}</Card.Title>
                        <div className="time">
                            <p><i className="fa fa-calendar"></i>June 22, 2020</p>
                            <p><i className="fa fa-user"></i>Admin</p>
                        </div>
                        <Card.Text className="cardtext">
                            {card.text}
                        </Card.Text>
                        <a href="#">Learn More</a>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeNewsComponent