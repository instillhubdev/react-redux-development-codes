import React from "react";
import { Route } from "react-router-dom";
import SideBar from "../sidebar";
import Posts from "../posts";
import Users from "./users";


const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar/>
      {/* This is the nested routing where we have the main routing and then the nested routing within it */}
      <Route path='/admin/users' component={Users}/>
      <Route path='/admin/posts' component={Posts}/>
    </div>
  );
};

export default Dashboard;
