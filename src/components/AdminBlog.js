import React from "react";
import { Card}  from "react-bootstrap";
import axios from "axios";
import history from "./../history";
const api = axios.create({
    baseURL: `http://localhost:8080/blog`
  })
  class AdminBlog extends React.Component {

    deleteBlog(btitle) {
        const headers = {
            'Content-Type' : 'text/plain'
        };
        api.delete("/deleteBlog",{
            params: {
                title : btitle
            }
        },{headers}).then(res => {
            window.alert("Post Deleted!")
            history.push("/viewAdminBlog")
        })

    }
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
                        <button className="blogDelete" onClick={() => this.deleteBlog(this.props.content.blogTitle)}>Delete</button>
                    </Card.Body>
                </Card>
                </div>
            </div>
        );
    }
}
export default AdminBlog;
