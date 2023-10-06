import './BrowseCatStyle.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const BrowseCat = ({browseTitle, browseCatCards, browsePara, browseLink}) => {
    return (
        <div className='browse-cat'>
            <h3>{browseTitle}</h3>
            <Row xs={1} md={4} className="g-4">
            {browseCatCards.map((card) => (
                <Col key={card.id}>
                <Card className="browse-card">
                    <i className={card.icon}></i>
                    <Card.Body className='browse-body'>
                    <Card.Title className="browse-title">{card.title}</Card.Title>
                    <Card.Text className="browse-text">
                        {card.desc}
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
            <p>{browsePara} <a href='#'>{browseLink}</a></p>
        </div>
    )
}

export default BrowseCat