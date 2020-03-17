import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_GOING = "invite/GET_GOING"
const GET_NOTGOING = "invite/GET_NOTGOING"
const GET_USER = "invite/GET_USER"

const initialState = {
  user: {},
  going: [],
  notgoing: [],
  goingCount: 0,
  notGoingCount: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOING:
      return { ...state, going: action.payload }
    case GET_NOTGOING:
      return { ...state, notgoing: action.payload }
    case GET_USER:
      return { ...state, user: action.payload }
    default:
      return state
  }
}

function getGoing() {
  return dispatch => {
    axios.get("/api/going").then(resp => {
      dispatch({
        type: GET_GOING,
        payload: resp.data
      })
    })
  }
}

function getNotGoing() {
  return dispatch => {
    axios.get("/api/notgoing").then(resp => {
      dispatch({
        type: GET_NOTGOING,
        payload: resp.data
      })
    })
  }
}

function getUser() {
  return dispatch => {
    axios.get("/api/user").then(resp => {
      dispatch({
        type: GET_USER,
        payload: {
          goingCount: resp.data.GoingCount,
          notGoingCount: resp.data.NotGoingCount,
          user: resp.data.user
        }
      })
    })
  }
}

function getRandom() {
  return dispatch => {
    axios.get("/api/random").then(resp => {
      const data = resp.data
      dispatch({
        type: GET_GOING,
        payload: data
      })
    })
  }
}

export function addGoing(text) {
  return dispatch => {
    axios.post("/Going", { text, status: "active" }).then(resp => {
      dispatch(getRandom())
    })
  }
}

export function useGoing() {
  const dispatch = useDispatch()
  const person = useSelector(appState => appState.goingState.user)
  const get = () => dispatch(getRandom())
  useEffect(() => {
    get()
  }, [])
  return { person, get }
}
