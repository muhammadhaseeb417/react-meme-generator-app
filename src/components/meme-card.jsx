import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MemeCard(props) {
    return (
        <Card style={{ width: '18rem' }} className='card-meme'>
            <Card.Img variant="top" src={props.src} style={{ height: "200px" }} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Button variant="primary">Edit Meme</Button>
            </Card.Body>
        </Card>
    );
}

export default MemeCard;