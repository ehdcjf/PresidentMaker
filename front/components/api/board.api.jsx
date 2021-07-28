const showAll = async(dispatch) => { 

  dispatch({ type: 'GET_COMMENT' })
  try {
    const response = await fetch('http://localhost:3002/board?type=all&page=1')
    const data = await response.json()

    
    dispatch({ type: 'GET_All_LIST_SUCCESS', payload: data })
  } catch (e) {
    dispatch({ type: 'GET_ALL_LIST_ERROR', payload: e })
  }

 
}