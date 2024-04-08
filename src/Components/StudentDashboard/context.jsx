import React, { useReducer,useEffect} from "react";
import { useContext } from "react";
import reducer from "./reducer";
let api="http://hn.algolia.com/api/v1/search?";
const initial={
    isloading:false,
    query:"REACT",
    nbpages:0,
    page:0,
    hits:[],
}
const appcontext=React.createContext();
const AppProvider=({children})=>{
   const[state,dispatch]=useReducer(reducer,initial)

   const fetchApiData=async(url)=>{
    dispatch({type:"SET_LOADING"})
     try{
       const res=await fetch(url);
       const data=await res.json();
       console.log(data)
       dispatch({type:"GET_STORIES",
        payload:{
            hits:data.hits,
            nbpages:data.nbpages,
        }
        
    })  
     }
     catch(error){
       console.log(error)
     }
   }
   //serach
   const searchCourse=(course)=>{
    dispatch({type:'SEARCH_QUERY',
Bikash:course,})
   }
   //pagination
   const getNextPage=()=>{
    dispatch({
        type:'NEXT_PAGE'
    })
   }
   const getPrevPage=()=>{
    dispatch({
        type:'PREV_PAGE'
    })
   }
   useEffect(()=>{
     fetchApiData(`${api}query=${state.query}&page=${state.page}`);
   },[state.query,state.page])
    return(
   <appcontext.Provider value={{...state,searchCourse,getNextPage,getPrevPage}}>
    {children}
   </appcontext.Provider>
    )
};
const useGlobalContext=()=>{
    return useContext(appcontext);
}
export {appcontext,AppProvider,useGlobalContext}