import React, { Component } from "react";
import AuthContext from "../auth-context";


class Login extends Component {
  
  static contextType = AuthContext;

  componentDidMount = () => {
    console.log(this.context);
  }
  
  render() {
    return (
      <div>
        {/* Remove the AuthContext.Consumer since we have set the
        static contextType for AuthContext which we can access 
        using this.context */}
        {/*  <AuthContext.Consumer> */}
          {/* {authContext => { */}
            {/* return ( */}
              {/* <button onClick={authContext.toggleAuth}> */}
                
                {/* {authContext.isAuth ? "Logout" : "Login"} */}
              {/* </button> */}
            {/* ); */}
          {/* }} */}
        {/* </AuthContext.Consumer> */}
      
        {/* The above code can be changed to the one down below */}
          <button onClick={this.context.toggleAuth}>
            {this.context.isAuth ? 'Logout' : 'Login'}
          </button>
      </div>
    );
  }
}

export default Login;
