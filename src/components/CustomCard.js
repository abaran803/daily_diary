import {Button, Card} from "react-bootstrap";

const CustomCard = (props) => {
    return (
            <Card className='md-lg-4 mb-md-3 mb-sm-2 bg bg-success bg-opacity-25'>
                <Card.Img variant="top" height='200px' src="https://source.unsplash.com/random"/>
                <Card.Body>
                    <Card.Title>{props.card.title}</Card.Title>
                    <Card.Text className='text text-secondary'>
                        {props.card.description.substring(0,92)}...
                    </Card.Text>
                    <Button variant="outline-success">Show Details</Button>
                </Card.Body>
            </Card>
    )
}

export default CustomCard;