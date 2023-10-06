import "./BestEducationStyle.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const BestEducation = ({bestEduCards, bestEduTitle, bestEduPara}) => {
    return (
        <div className="best-edu">
            <div className="edu-head">
                <h3>{bestEduTitle}</h3>
                <p>{bestEduPara}</p>
            </div>
            <Row xs={1} md={3} className="g-4">
            {bestEduCards.map((card) => (
                <Col key={card.id}>
                <Card className="edu-card">
                    <i className={card.icon}></i>
                    <Card.Body>
                    <Card.Title className="edu-title">{card.title}</Card.Title>
                    <Card.Text className="edu-text">
                        {card.desc}
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </div>
    )
}

export default BestEducation