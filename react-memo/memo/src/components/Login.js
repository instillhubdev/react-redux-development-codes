// import React from 'react';

// const login = props => {
//   console.log(props);
//   return(
//     props.authenticated ? (
//       <button onClick={props.onLogout}>Logout</button>
//     ) :
//       (
//         <button onClick={props.onLogin}>Login</button>
//       )
//   );

// }

// export default login;


import React from 'react';

const login = props => {
  console.log(props);
  return (
    <React.Fragment>
      <button onClick={props.onLogin}>Login</button>
      <button onClick={props.onLogout}>Logout</button>
    </React.Fragment>
  );
}

// React.memo does shallow check for props rather than doing 
// deep check for objects and therefore what it does 
// is it compares the old props with the new props,if they are the 
// same,it won't re-render the component.If the new props are different 
// compared to old ones,then and only then it will re-render the component.
export default React.memo(login);

// Use React.memo only when you know the new props can be the same as the older ones 

// Third and the final feature that came with React 16.6

// React.lazy is used to load the components asynchronously and are loaded only when they 
// are really required when they are being rendered only then the code will be loaded otherwise the code will not be loaded. 

// It is very useful in case of routing 
// This will prevent unnecessarily loading of code for all the routing components 
// It might be the case that some of these components might never be visited. 

// We want to make sure that we load these components only when we need them 


// For Routing Scenario
// To implement lazy loading we will use dynamic importing instead of the normal importing that we do 
// const Posts = React.lazy(() => import('./containers/posts'));
// We can use only default imports not with normal imports
//  import { Suspense } from 'react'
{/* <Route path="/posts" render={() => (<Suspense fallback={<div>Loading....</div>}><Posts/></Suspense>)}></Route> */}

