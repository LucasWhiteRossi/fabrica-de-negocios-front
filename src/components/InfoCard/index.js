import { Card } from 'react-bootstrap'

export function InfoCard(props){
    return (
        <div className="d-flex">
            <Card bg={props.bg}>
                <Card.Header as="h5">{props.title}</Card.Header>
                <Card.Body>
                    {props.children}
                </Card.Body>
            </Card>
        </div>
    );
}