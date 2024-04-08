const reducer=(state,action)=>{
  switch(action.type){
    case "SET_LOADING":
        return{
            ...state,
            isLoading:true
        }
    case "GET_STORIES":
        return{
            ...state,
            isLoading:false,
            hits:action.payload.hits,
            nbpages:action.payload.nbpages,
        }
        case "SEARCH_QUERY":
            return{
                ...state,
                query:action.Bikash,
            }
            case'NEXT_PAGE':
            let pn1=state.page
            if(pn1>=50){
                state.page=50
            }
            return{
                ...state,
                page:state.page+1
            }
            case'PREV_PAGE':
            let pn=state.page
            if(pn<=1){
                state.page=1;
            }
           
            return{
                ...state,
                page:state.page-1
            }
  }
 
    return state;
}
export default reducer;