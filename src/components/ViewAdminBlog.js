import React from "react";
import AdminBlog from "./AdminBlog";
import axios from "axios"
const api = axios.create({
    baseURL: `http://localhost:8080/blog`
  })
class ViewAdminBlog extends React.Component {
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
            <div className="ViewAdminHome">
                {this.state.blogs.map((blog, index) => <AdminBlog key={index} content={blog}></AdminBlog>)}
            </div>
        );
    }
}

export default ViewAdminBlog;