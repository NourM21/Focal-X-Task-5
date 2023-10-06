import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCourses } from "../store/actions/courses.action"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import img from "./../../../Const/NewsImages/News-3.jpg"

export default function Courses() {
    const data = useSelector((state) => state?.courses.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCourses())
    }, [])
    
    return (
        <div className="news-comp">
            <Row xs={1} md={2} className="g-5">
                {data && data?.map((course) => {
                    return (
                        <Col key={course.id}>
                        <Card className="card" style={{ flexDirection: "column"}}>
                            <Card.Img variant="left" src={course.image} className="cardimg" style={{ height: "300px" }}/>
                            <Card.Body className="cardbody">
                            <Card.Title className="cardtitle">{course.name}</Card.Title>
                            <div className="time">
                            <p><i className="fa fa-user"></i>{course.teacher}</p>
                                <p><i className="fa fa-calendar"></i>{course.startAt}</p>
                                <p><i className="fa fa-calendar"></i>{course.endAt}</p>
                            </div>
                            <Card.Text className="cardtext" style={{ color: "gray", marginTop: "15px", marginBottom: "15px" }}>
                                {course.desc}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    );
}