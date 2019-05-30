import React, {
  useReducer,
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react"

function appReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          text: "",
          completed: false,
        },
      ]
    case "remove":
      return state.filter(todo => todo.id !== action.id)
    case "complete":
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    case "reset": {
      return action.payload
    }
    default:
      return state
  }
}

const Context = createContext()

function useEffectOnce(cb) {
  // customized hook, which onkly run function once [AMAZING ONE !!!]
  const didRun = useRef(false)
  useEffect(() => {
    if (!didRun.current) {
      cb()
      didRun.current = true
    }
  })
}

export default function TodoApp() {
  const [state, dispatch] = useReducer(appReducer, [])

  useEffectOnce(() => {
    const raw = localStorage.getItem("data")
    dispatch({ type: "reset", payload: JSON.parse(raw) })
  })

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state))
  }, [state])
  return (
    <Context.Provider value={dispatch}>
      <h3>Hooks Based Todo App</h3>
      <button onClick={() => dispatch({ type: "add" })}>Add Todo</button>
      <TodoList todos={state} />
    </Context.Provider>
  )
}

function TodoList({ todos }) {
  return todos.map(todo => <EachTodo key={todo.id} {...todo} />)
}

function EachTodo({ id, completed, text }) {
  const dispatch = useContext(Context)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: "complete", id })}
      />
      <input
        type="text"
        defaultValue={text}
        // onChange={event => {
        //   console.log(event.target.value)
        //   text = event.target.value
        //   return text
        // }}
      />
      <button onClick={() => dispatch({ type: "remove", id })}>Delete</button>
    </div>
  )
}
