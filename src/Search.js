import React,{useState,useRef} from "react";
function Search({name,setName})
{

let inputref=useRef();
    
    
    
        const [filteredValues, setFilteredValues]=useState([{}])
    
    
        
   
       

  const handleSearch=(e)=>
  {
    e.preventDefault()
    let n=inputref.current.value
    console.log(n);
    const filteredValues = name.filter(
        (item) => item.id == n
          
      );
      console.log(filteredValues);
      setFilteredValues(filteredValues);
  }
    


    
    return(
        <div>
     <input name="query" type="text" ref={inputref}/>
     <button onClick={handleSearch}>Search</button>
    
     {
        filteredValues&&
            <div>{filteredValues[0].id}
            {filteredValues[0].email}
            {filteredValues[0].first_name}
            {filteredValues[0].last_name}
            <img src={filteredValues[0].avatar} alt="Girl in a jacket" width="150" height="150"></img></div>
            

        
     }
     
    </div>
    )
}

export default Search