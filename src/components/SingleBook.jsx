import bookList from "../books/fantasy.json";
import {Card, Button} from "react-bootstrap";
import {Component} from "react";

class SingleBook extends Component{

    state={
        selected: false,
        highlight: "3px solid #00FF00",
        noHighlight:"none"
    }

    render (){
        return(
            <>
                {bookList.map((book, index) => (
                    book.title.toLowerCase().includes(this.props.query.toLowerCase()) && (
                    <Card className="ml-4" style={{ width: '16rem' }} key={`book-${index}`}
                    onClick={
                        ()=>{
                        this.setState({selected: true});
                        console.log(this);
                        }
                    }>
                    {this.state.selected?// <--all are highlighted on click   //this.state.selected && this.book.id === book.id? <--breaks when clicked
                    (<Card.Img variant="top" src={book.img} style={{border: this.state.highlight}} />) :
                    (<Card.Img variant="top" src={book.img} style={{border: this.state.noHighlight}} />)}
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>
                        {book.category}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                )))}
            </>
        );
    };
}

export default SingleBook;







//const SingleBook = ()=>{
//    return(
//        <>
//            {bookList.map((book, index) => (
//                <Card className="ml-4" style={{ width: '16rem' }} key={`book-${index}`}>
//                <Card.Img variant="top" src={book.img} />
//                <Card.Body>
//                  <Card.Title>{book.title}</Card.Title>
//                  <Card.Text>
//                    {book.category}
//                  </Card.Text>
//                  <Button variant="primary">Go somewhere</Button>
//                </Card.Body>
//              </Card>
//            ))}
//        </>
//    );
//};