import React, { Component } from "react";
import Blog from "./Blog";
import axios from "axios"
const api = axios.create({
    baseURL: `http://localhost:8080/blog`
  })

export default class Home extends Component {
    
    state = {
        blogs: []
    }
    constructor() {
        super();
        api.get('/getBlog').then(res => {
          console.log(res.data)
          this.setState({ blogs : res.data.blogList})
        })
      }
    render() {
        return (
            <div className="Home">
                {this.state.blogs.map((blog, index) => <Blog key={index} content={blog}></Blog>)}
            </div>
        );
    }
}