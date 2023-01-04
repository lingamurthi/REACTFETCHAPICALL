import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState,useEffect,useRef } from "react";
import Pagination from "./Pagination";
import Post from "./Post";
import Search from "./Search";

function Test()
{

    
    const inputRef = useRef();
const [name,setName]=useState([{}])


const [currentPage,setCurrentPage]=useState(1);
const [postPerPage,setPostPerPage]=useState(3);

const indexOfLastPost=currentPage*postPerPage
const indexOfFirstPost=indexOfLastPost-postPerPage
const currentPost= name.slice(indexOfFirstPost,indexOfLastPost)
useEffect(() => {
    const url = "https://reqres.in/api/users?page=2";

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json.data);
           
            setName(json.data);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
}, []);
   



const paginate=pageNumber=>{
    setCurrentPage(pageNumber)
}

console.log(name.length);



return(
    <div>

<Search 
      name={name}
      setName={setName}/>
    <br/>
    <br/>
    <br/>
    <br/>
     <Post name={currentPost}/>
      <Pagination 
      postPerPage={postPerPage}
      totalPosts={name.length}
      paginate={paginate}/>

      
      
      
    </div>
)

}




export default Test