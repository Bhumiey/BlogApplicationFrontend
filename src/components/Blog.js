import React, { Component } from "react";
import { Card}  from "react-bootstrap";

class Blog extends Component  {
    render() {
        return (
            <div style={{display: 'flex', justifyContent:'center', padding:30}}>
                <div style={{borderWidth:  1, borderStyle: "solid", borderColor:"black"}}>
                <Card style={{ width: '38rem'}}>
                    <Card.Body>
                        <Card.Title>{this.props.content.blogTitle}</Card.Title>
                        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                        <Card.Text>
                            {this.props.content.blogContent}
                        </Card.Text>
                        {/* <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                </Card>
                </div>
            </div>
        );
    }
}

export default Blog;