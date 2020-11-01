import React, { Component } from "react";
import { Card}  from "react-bootstrap";

class Blog extends Component  {
    render() {
        return (
            <div style={{display: 'flex', justifyContent:'center', padding:30}}>
                <div className="blogBox">
                <Card style={{ width: '38rem'}}>
                    <Card.Body>
                        <Card.Title>{this.props.content.blogTitle}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize:12}}>By {this.props.content.blogAuthor.authorName}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize:12}}>Category : {this.props.content.blogCategory.categoryName}
                        </Card.Subtitle>
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