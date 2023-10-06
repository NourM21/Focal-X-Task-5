import "./NewsComponentStyle.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';

const NewsComponent = ({cards}) => {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 4; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
            {number}
            </Pagination.Item>,
        );
    }
    return (
        <div className="news-comp">
            <Row xs={1} md={2} className="g-5">
                {cards.map((card) => (
                    <Col key={card.id}>
                    <Card className="card" style={{height: '20rem'}}>
                        <Card.Img variant="left" src={card.img} className="cardimg" />
                        <Card.Body className="cardbody">
                        <Card.Title className="cardtitle">{card.cardtitle}</Card.Title>
                        <div className="time">
                            <p><i className="fa fa-calendar"></i>June 22, 2020</p>
                            <p><i className="fa fa-user"></i>Untree.co</p>
                        </div>
                        <Card.Text className="cardtext">
                            {card.text}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
            <Pagination className="pagination">{items}</Pagination>
        </div>
    )
}

export default NewsComponent