/**
 *  This code can be reused at several places as per our requirements 
 * in various projects. This is the api service for all our application
 * routes and setting up the interceptors and setting the common end 
 * point for all our requests to the server.
 * 
 */

import axios from "axios";
import winston from 'winston';
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    //All unexpected errors must be logged out to the user,
    // using the logger middleware 

    if (!expectedError) {
      winston.log(0,`Logging error ${error}`);
      //For displaying the toast notifications we can use the toast object
      toast.error("An unexpected error occured");
      //For displaying some information we can use the toast function
      //since in Javascript functions are objects
      toast("An unexpected error occured");
    }
    return Promise.reject(error);
  });

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put, 
    delete: axios.delete 
}