import {Component} from "react";
import {Form,Button} from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component{
    state={
        query: ""
    }

    setVal = (e) =>{
        e.preventDefault();
        this.setState({
            query: e.target.value
        });
    }
        
    render(){
        return(
            <div className="d-flex flex-column">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Book Search:</Form.Label>
                  <Form.Control onChange={(e)=>{this.setVal(e)}} value={this.state.value} type="input" placeholder="Enter a fantasy book title"  />
                    <Button onClick={()=>{}} aria-label="Enter">
                        <p className="mb-0">Enter</p>
                    </Button> 
                    {console.log(this.state.query)}             
                </Form.Group>
            </Form>
            <div className="d-flex flex-wrap">
                <SingleBook query={this.state.query}/>            
            </div>
            </div>
            )
        }
        
}

    

export default BookList