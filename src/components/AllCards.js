import {Container, Row, Col} from "react-bootstrap";
import CustomCard from "./CustomCard";
import {getAllPost} from "../api/Api";
import {useEffect, useState} from "react";

const AllCards = props => {

    const cardData = [
        {'title': 'Card Title1', 'description': "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {'title': 'Card Title2', 'description': "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {'title': 'Card Title3', 'description': "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {'title': 'Card Title4', 'description': "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {'title': 'Card Title5', 'description': "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {'title': 'Card Title6', 'description': "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {'title': 'Card Title7', 'description': "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {'title': 'Card Title8', 'description': "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {'title': 'Card Title9', 'description': "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {'title': 'Card Title10', 'description': "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {'title': 'Card Title11', 'description': "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {'title': 'Card Title12', 'description': "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {'title': 'Card Title13', 'description': "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {'title': 'Card Title14', 'description': "Some quick example text to build on the card title and make up the bulk of the card's content."},
        {'title': 'Card Title15', 'description': "Some quick example text to build on the card title and make up the bulk of the card's content."}
    ];

    return (
        <Container fluid className='w-75'>
            <Row>
                {props.posts ? props.posts.map((item, index) => (
                    <Col key={index} lg={4} md={6} sm={12}><CustomCard card={item}/></Col>
                )) : <div>No post found!!!</div>}
            </Row>
        </Container>
    )
}

export default AllCards;