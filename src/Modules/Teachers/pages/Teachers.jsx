import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTeachers } from "../store/actions/teachers.action"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import img from "./../../../Const/NewsImages/News-1.jpg"

export default function Teachers() {
    const data = useSelector((state) => state?.teachers.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTeachers())
    }, [])
    
    return (
        <div className="news-comp">
            <Row xs={1} md={2} className="g-5">
                {data && data?.map((teacher) => {
                    return (
                        <Col key={teacher.id}>
                        <Card className="card" style={{ flexDirection: "column"}}>
                            <Card.Img variant="left" src={teacher.image} className="cardimg" style={{ height: "300px" }}/>
                            <Card.Body className="cardbody" style={{ paddingLeft: "30px" }}>
                            <Card.Title className="cardtitle">{teacher.name}</Card.Title>
                            <div className="time">
                            <p><i className="fa fa-volume-control-phone"></i>{teacher.phone}</p>
                                <p><i className="fa fa-user"></i>{teacher.email}</p>
                            </div>
                            <Card.Text className="cardtext" style={{ marginTop: "15px", marginBottom: "15px", color: "gray" }}>
                                {teacher.courses.map((course, index) => <p key={index} style={{ display: "inline", marginRight: "15px" }}>{course}</p>)}
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