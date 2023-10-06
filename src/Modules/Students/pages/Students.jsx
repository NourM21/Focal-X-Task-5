import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchStudents } from "../store/actions/students.action"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import img from "./../../../Const/NewsImages/News-2.jpg"

export default function Students() {
    const data = useSelector((state) => state?.students.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStudents())
    }, [])
    
    return (
        <div className="news-comp">
            <Row xs={1} md={2} className="g-5">
                {data && data?.map((student) => {
                    return (
                        <Col key={student.id}>
                        <Card className="card" style={{ flexDirection: "column"}}>
                            <Card.Img variant="left" src={student.image} className="cardimg" style={{ height: "400px" }}/>
                            <Card.Body className="cardbody" style={{ paddingLeft: "30px" }}>
                            <Card.Title className="cardtitle">{student.name}</Card.Title>
                            <div className="time">
                                <p><i className="fa fa-volume-control-phone"></i>{student.phone}</p>
                                <p><i className="fa fa-user"></i>{student.email}</p>
                            </div>
                            <Card.Text className="cardtext" style={{ marginTop: "15px", marginBottom: "15px", color: "gray" }}>
                                {student.courses.map((course, index) => <p key={index} style={{ display: "inline", marginRight: "15px" }}>{course}</p>)}
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