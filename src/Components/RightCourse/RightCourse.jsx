import './RightCourseStyle.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const RightCourse = ({ rightCourseTitle, rightCourseDesc, rightCourseCards }) => {
    return (
        <div className='right-course'>
            <div className="right-course-head">
                <h3>{rightCourseTitle}</h3>
                <p>{rightCourseDesc}</p>
            </div>
            <Row xs={1} md={3} className="g-5">
                {rightCourseCards.map((rightCourseCard) => (
                    <Col key={rightCourseCard.id}>
                    <Card className="right-course-card" style={{height: '40rem'}}>
                        <Card.Img variant="top" src={rightCourseCard.image} className="right-course-cardimg" />
                        <Card.Body className="right-course-cardbody">
                        <div className='right-course-card-head'>
                            <p className='lesson-num'><i className='fa fa-book'></i>{rightCourseCard.lessonNum}</p>
                            <p className='lesson-rating'><i className='fa fa-star'></i>{rightCourseCard.rating}</p>
                        </div>
                        <Card.Title className="right-course-cardtitle">{rightCourseCard.title}</Card.Title>
                        <Card.Text className="right-course-cardtext">
                            {rightCourseCard.desc}
                        </Card.Text>
                        <div className='right-course-card-footer'>
                            <p className='lesson-price'>{rightCourseCard.price}</p>
                            <a href='#'>Learn More</a>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default RightCourse