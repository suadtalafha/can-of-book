import React from 'react'
import { Card } from 'react-bootstrap'
class BookCard extends React.Component {
    render() {
        return (
            <div>
                {this.props.showBook&& 
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.renderBook.name} </Card.Title>
                         
                        <Card.Text>
                        {this.props.renderBook.name}
                        </Card.Text>
                           
                        <Card.Text>
                        {this.props.renderBook.description}
                        </Card.Text>
  
                        <Card.Text>
                        {this.props.renderBook.status}
                        </Card.Text>
                        <Card.Img variant="top" src= {this.props.renderBook.img} />

                    </Card.Body>
                </Card>}
            </div>
        )
    }
}

export default BookCard
