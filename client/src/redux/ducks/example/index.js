import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_EXAMPLE = "ex/GET_EXAMPLE"

const initialState = {
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EXAMPLE:
      return { ...state, user: action.payload }
    default:
      return state
  }
}

function getRandom() {
  return dispatch => {
    axios.get("/api/random").then(resp => {
      const data = resp.data
      dispatch({
        type: GET_EXAMPLE,
        payload: data
      })
    })
  }
}

export function useExample() {
  const dispatch = useDispatch()
  const person = useSelector(appState => appState.exampleState.user)
  const get = () => dispatch(getRandom())
  useEffect(() => {
    get()
  }, [])
  return { person, get }
}
