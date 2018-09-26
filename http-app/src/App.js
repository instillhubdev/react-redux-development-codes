import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
// ******** httpService is for setting the axios client to reach out to server
import http from "./services/httpService";
// ******** configModule is for configuring the common endpoint using which we wull make the request to the server
import config from "./config.json";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount = async () => {
    // In Modern Javascript we use the async await way of writing
    // the async code.
    const { data: posts } = await http.get(config.apiEndPoint);
    this.setState({ posts: posts });
  };

  handleAdd = async () => {
    console.log("Add");
    const { length: numberOfPosts } = this.state.posts;
    const post = {
      _id: numberOfPosts + 1,
      title: "This is a new post"
    };
    //Make the async call to server
    const { data: newPost } = await http.post(config.apiEndPoint, post);
    const { id, title } = newPost;
    alert(
      `The post with the given ${id} and the title ${title} has been created`
    );
    const posts = this.state.posts.slice();
    posts.unshift(newPost);
    this.setState({ posts: posts });
    toast.success("The post has successfully been added", { autoClose: 1500 });
  };

  //Pessimistic update
  // 1.Server call first then the update of the UI

  // Optimistic update
  // 1. Update the UI first and then initiate the server call

  handleUpdate = async post => {
    console.log("Update", post);
    post.title = "This is updated";
    const { data } = await http.put(`${config.apiEndPoint}/${post.id}`, post);
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = Object.assign({}, post);
    this.setState({ posts: posts });
    toast.success("The post has successfully been updated", {
      autoClose: 1500
    });
    console.log(data);
  };

  handleDelete = async post => {
    //Update the UI first in OU
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts: posts });
    //Server call in OU
    try {
      await http.delete(`${config.apiEndPoint}/${post.id}`);
      toast.success("The post has successfully been deleted", {
        autoClose: 1000
      });
    } catch (ex) {
      //Expected Errors (Api errors predict and return 404: not found
      // 400: bad request). Client side errors
      if (ex.response && ex.response.status === 404) {
        toast.info("The post has already been deleted");
      }

      //Unexpected Errors
      // Network down, server down, database down, bug in our application
      // log them
      // Display generic and friendly error message

      toast.info("Something went wrong", { autoClose: 1500 });
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
