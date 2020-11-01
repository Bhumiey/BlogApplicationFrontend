import React, { Component } from "react";
import history from './../history';
 export default class AdminHome extends Component {
     addNewBlog(Event) {
        history.push("/addNewBlog")
     }
     viewAllBlogs(Event) {
         history.push("/viewAdminBlog")
     }
     render() {
         return (
             <div className="AdminHome">
                 <div className="lander">
                    <h2>Welcome</h2>
                    <button className="BlogButton" onClick={this.addNewBlog}>
                        Add New
                    </button>
                    <button className="BlogButton" onClick={this.viewAllBlogs}>
                        View all Blogs
                    </button>
                 </div>
             </div>
         );
     }
 }