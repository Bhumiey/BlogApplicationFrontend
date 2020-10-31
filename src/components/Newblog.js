import React, { Component } from "react";
import axios from "axios"
const api = axios.create({
    baseURL: `http://localhost:8080/blog`
  })
class Newblog extends Component {
    state = {
        blogTitle: '',
        author: '',
        category: '',
        blogContent: '',
    }
    handleTitleChange(Event) {
        this.setState({
            blogTitle: Event.target.value
        });
    }
    handleAuthorChange(Event) {
        this.setState({
            author: Event.target.value
        });
    }handleContentChange(Event) {
        this.setState({
            blogContent: Event.target.value
        });
    }
    handleCategoryChange(Event) {
        this.setState({
            category: Event.target.value
        });
    }
    postBlog(event) {
        event.preventDefault();
        const newBlog = {
            
            blogCategory: {
                categoryName: this.state.category
            },
            blogContent: this.state.blogContent,
            blogAuthor: {
                authorName: this.state.author
            },
            blogTitle : this.state.blogTitle,
        };
        api.post("/addBlog",{newBlog}).then(res => {
            console.log(res);
        })
    }
    render() {
        return(
            <div className="NewBlog"> 
                <form onSubmit={this.postBlog}>
                    <div className="formInput">
                    <label>
                        Blog Title
                        <input type="text" name="title" value={this.state.blogTitle} onChange={this.handleTitleChange.bind(this)}></input>
                    </label>
                    </div>
                    <div className="formInput">
                    <label>
                        Blog Category
                        <input type="text" name="category" value={this.state.category} onChange={this.handleCategoryChange.bind(this)}></input>
                    </label>
                    </div>
                    <div className="formInput">
                    <label>
                        Blog Author 
                        <input type="text" name="author" value={this.state.author} onChange={this.handleAuthorChange.bind(this)}></input>
                    </label>
                    </div>
                    <div className="formInput">
                    <label>
                        Blog Content
                        <input type="text"  name="content" value={this.state.blogContent} onChange={this.handleContentChange.bind(this)}></input>
                    </label>
                    </div>
                    <button type="submit">Post</button>
                </form>
            </div>
        );
    }
}
export default Newblog;