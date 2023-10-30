import React, { useEffect, useState,useContext } from 'react';

import { register } from '../api/auth';
import { getToken ,storeToken} from '../api/store';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';





const SignUp = () => {

  const navigate=useNavigate()
  const {isAuth,setAuth}=useContext(AuthContext)
  const {token,setToken}=useContext(AuthContext)

  
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });


  useEffect(() => {
    if (token) {
      // Redirect to another route if the token exists
      navigate('/')
    }
  }, [token]);

  const [errors,setErrors]=useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })


  // Handle input changes and update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const validationFormData=()=>{
      // Object.entries convert obj to array
    // example[
    //   ['name', ''],
    //   ['email', ''],
    //   ['password', 'somePassword'],
    //   ['password_confirmation', '']
    // ]


    const updatedErrors = {};


    Object.entries(formData).forEach(([key, value]) => {
      if (value === '') {
        updatedErrors[key] = [key]+ ' is required';
      }
      
   
    });

    if(formData.password_confirmation!==formData.password){
      updatedErrors.password_confirmation='password doesn\'t match';

    }

    setErrors(updatedErrors);
    

  }
      

  // Handle form submission
  const handleSubmit =async (e) => {
    const { name, value } = e.target;
 
    e.preventDefault();

    validationFormData()

      if(errors.name !=='' && errors.email !=='' && errors.password!=='' && errors.password_confirmation!==''){

        if(errors.name!=='name is required' && errors.email !=='email is required' && errors.password!=='passowrd is required' && errors.password_confirmation !=='password_confirmation is required' && errors.password_confirmation !=='password doesn\'t match'){
   
         const response=await register(formData);
      
          if(response.status!==null){


            storeToken(response.token)
            setAuth(true);
            navigate('/')
            
          }


        }

      }



    // You can perform further actions, such as sending the data to an API, here.
  };

  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="px-6 py-4">
        {/* ... Your existing code ... */}
        <h3 className="text-center">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />

            <span className="text-red-500">{errors.name??''}</span>
          </div>

          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
                       <span className="text-red-500">{errors.email??''}</span>


          </div>

          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
                        <span className="text-red-500">{errors.password??''}</span>

          </div>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Confirm Password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleInputChange}
            />
                        <span className="text-red-500">{errors.password_confirmation??''}</span>


          </div>

          <div className="flex items-center justify-between mt-4">
            {/* ... Your existing code ... */}
            <button
              className="px-6 mx-auto py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      {/* ... Your existing code ... */}
    </div>
  );
};

export default SignUp;
