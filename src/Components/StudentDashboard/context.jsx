// AppProvider.js
import React, { useReducer, useEffect } from "react";
import { useContext } from "react";
import reducer from "./reducer";

const api = "http://hn.algolia.com/api/v1/search?";
const initial = {
  isLoading: false,
  query: "REACT",
  nbpages: 0,
  page: 0,
  hits: [],
  email: "",
};

const appContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbpages: data.nbpages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const searchCourse = (course) => {
    dispatch({ type: "SEARCH_QUERY", Bikash: course });
  };

  const getNextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };

  const getPrevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };

  useEffect(() => {
    fetchApiData(`${api}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <appContext.Provider
      value={{ ...state, searchCourse, getNextPage, getPrevPage }}
    >
      {children}
    </appContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(appContext);
};

export { appContext, AppProvider, useGlobalContext };
