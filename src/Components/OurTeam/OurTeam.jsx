import "./OurTeamStyle.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const OurTeam = ({cards}) => {
    return (
        <div className="second-about-comp">
            <div className="about-head">
                <h3>Our Team</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <Row xs={1} md={3} className="g-4">
                {cards.map((card) => (
                    <Col key={card.id}>
                    <Card className="card5" style={{height: '30rem'}}>
                        <Card.Img variant="top" src={card.img} className="cardimg5" />
                        <Card.Body className="cardbody5">
                        <Card.Title className="cardtitle5">{card.cardtitle}</Card.Title>
                        <p className="career1">{card.career}</p>
                        <Card.Text className="cardtext5">
                            {card.text}
                        </Card.Text>
                        <div className="iconss">
                            <i className={card.icons[0]}></i>
                            <i className={card.icons[1]}></i>
                            <i className={card.icons[2]}></i>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default OurTeam