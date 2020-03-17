import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const ADD_TO_GOING = "going/ADD_TO_GOING"

// 3. initial state
const initialState = {
  going: []
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_GOING:
      const exists =
        state.going.filter(going => going.id === action.payload.id).length > 0
      if (exists) {
        const item = state.going.find(going => going.id === action.payload.id)
        item.quantity = item.quantity + 1

        return {
          ...state,
          going: state.going.map(p => (item.id === p.id ? item : p))
        }
      } else {
        return {
          ...state,
          going: [...state.going, { ...action.payload, quantity: 1 }]
        }
      }
    default:
      return state
  }
}

// 5. action creators
function addToGoing(going) {
  return {
    type: ADD_TO_GOING,
    payload: going
  }
}

// 6. custom hook
export function useGoing() {
  const dispatch = useDispatch()
  const add = going => dispatch(addToGoing(going))
  const going = useSelector(appState => appState.goingState.going)

  useEffect(() => {}, [dispatch])

  return { going, add }
}
