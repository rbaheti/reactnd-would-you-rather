import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import {Container, Row, Col,  ListGroup, ListGroupItem} from "react-bootstrap";

import {getAvatar} from "../utils/helper";

class UserScoreCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {user} = this.props;
    const name = user.name;
    const numOfAns = Object.keys(user.answers).length;
    const numOfQuestions = user.questions.length;
    const scores = numOfAns + numOfQuestions;
    const image = getAvatar(user.avatarURL);

    return (
      <Card style={{width: "30rem"}} className="m-3">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Container>
          <Row>
            <Col sm={2}>
              <img src={image} alt={user.avatarURL} width="50" height="50"/>
            </Col>
            <Col sm={6}>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Answered Questions: {numOfAns}</ListGroupItem>
                <ListGroupItem>Created Questions: {numOfQuestions}</ListGroupItem>
              </ListGroup>
            </Col>
            <Col sm={4}>
              <ListGroup className="list-group-flush align-middle">
                <ListGroupItem>Score</ListGroupItem>
                <ListGroupItem>{scores}</ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Card>
    );
  }
}

export default UserScoreCard;
