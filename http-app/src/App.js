import React, { Component } from "react";
import axios from 'axios';
import "./App.css";

const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts';

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount = async () => {
      // In Modern Javascript we use the async await way of writing 
      // the async code.
      const { data: posts} = await axios.get(apiEndPoint);
      this.setState({ posts: posts });
    }

  handleAdd = async () => {
    console.log("Add");
    const { length: numberOfPosts } = this.state.posts;
    const post = {
      _id : numberOfPosts+1,
      title : 'This is a new post'
    }
    //Make the async call to server
    const { data: newPost }= await axios.post(apiEndPoint,post);
    const { id,title } = newPost;
    alert(`The post with the given ${id} and the title ${title} has been created`);
    const posts = this.state.posts.slice();
    posts.unshift(newPost);
    this.setState({ posts: posts });
  };

  //Pessimistic update 
  // 1.Server call first then the update of the UI
  
  // Optimistic update
  // 1. Update the UI first and then initiate the server call 



  handleUpdate = async (post) => {
    console.log("Update",post);
    post.title = 'This is updated';
    const { data } = await axios.put(`${apiEndPoint}/${post.id}`,post);
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = Object.assign({},post);
    this.setState({ posts: posts });
    console.log(data);
  };

  handleDelete = async post => {
    //Update the UI first in OU
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts: posts });
    //Server call in OU
    try {
      await axios.delete(`${apiEndPoint}/${post.id}`);
    } catch (ex) {
      alert('Something went wrong!');
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
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
