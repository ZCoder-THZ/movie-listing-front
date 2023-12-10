import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import Movies from "../components/Movies";
const apiUrl = import.meta.env.VITE_API_URL;

const Account = () => {
  const { token, setToken } = useContext(AuthContext);
  const [user, setUser] = useState([]);
  const [createdMovies, setCreatedMovies] = useState([]);

  useEffect(() => {
    async function getAccountInfo() {
      const response = await axios.get(`${apiUrl}/account/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const getAccount = await response.data.data;
      setUser(getAccount.user);
      setCreatedMovies(getAccount.data);
    }
    getAccountInfo();
  }, []);

  return (
    <div className="flex ">
      {/* <div className="profile  bg-red-500 w-[20rem]">
              <h3 className="">{user.name}</h3>
              <h3 className="">{user.email}</h3>
              <h3 className="">{user.email}</h3>


          </div>
          <div className="movies bg-slate-500 ">
              {
                  relatedMovies.map(movie => (<Movies movie={movie} key={movie.id} />))

              }
          </div> */}
      <div className="h-screen overflow-y-scroll bg-white">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8">
          <div className="post p-5 lg:p-1 rounded-md">
            <div className="lg:fixed lg:top-7 lg:left-14 lg:w-3/12 md:fixed md:w-5/12">
              <div className="bg-white justifyc p-5 rounded-lg shadow-md max-w-md w-full mb-4">
                <div className="relative">
                  <img
                    src="https://placekitten.com/500/150"
                    alt="Banner Profile"
                    className="w-full rounded-t-lg"
                  />
                  <img
                    src="https://placekitten.com/150/150"
                    alt="Profile Picture"
                    className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
                  />
                </div>

                <div className="flex items-center mt-12">
                  <h2 className="text-xl  font-bold text-gray-800">
                    {user.name}
                  </h2>
                </div>

                <p className="text-left text-gray-700 mt-2">{user.email} </p>

                <div className="flex items-center mx-auto mt-4 space-x-4">
                  <a href="#" className="text-blue-500 hover:underline">
                    {" "}
                    Twitter{" "}
                  </a>
                  <a href="#" className="text-blue-500 hover:underline">
                    {" "}
                    GitHub{" "}
                  </a>
                  <a href="#" className="text-blue-500 hover:underline">
                    {" "}
                    LinkedIn{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 p-4 bg-white mt-3" id="posted">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {createdMovies.map((movie) => (
                <Movies movie={movie} key={movie.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
