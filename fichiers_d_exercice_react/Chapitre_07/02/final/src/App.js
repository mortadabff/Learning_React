import { useState, useRef, useMemo, useReducer, forwardRef } from "react";
import { v4 as uuid} from "uuid";
import "./App.css";

const initialState = {
  items: [{id: 1, content: "pay bills", done: true}, {id: 2, content: "learn React", done: false}],
  all: [{id: 1, content: "pay bills", done: true}, {id: 2, content: "learn React", done: false}],
  input: null
}

function reducer(state, action) {
switch (action.type) {
  case 'submit':
    return {
      ...state, 
      items : [...state.items, action.payload.item]
    };
 
  default:
    throw new Error();
}
}


const Container = ({ children, title }) => {
  return (
    <div className="container py-3">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card" id="list1" style={{ borderRadius: ".15rem" }}>
            <div className="card-body py-4 px-4 px-md-5">
              <h1 className="text-info mb-3">{title}</h1>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Form = forwardRef(({ onChange, onSubmit }, ref) => {
  return (
    <form className="input-group mb-3" onSubmit={onSubmit}>
      <input
        ref={ref}
        type="text"
        className="form-control form-control-lg mx-0"
        placeholder="Add new..."
        style={{ height: "max-content" }}
        onChange={onChange}
      />
      <button type="submit" className="btn btn-info">
        Add
      </button>
    </form>
  )
})

function Select({ onSelect }) {
  const options = ["All", "Completed"]
  const select = e => onSelect(e.target.value)
  return (
    <div className="d-flex justify-content-end align-items-center my-3 ">
      <select className="select form-select form-control form-control-sm" onChange={select}>
        {options.map(option => <option value={option}>{option}</option>)}
      </select>
    </div>
  );
}

function Item({ id, content, done, onCheck }) {
  const toggleCheck = e => onCheck(id, e.target.checked)
  const isDone = done ? "mx-3 item-done" : "mx-3"
  return (
    <li className="list-group-item">
      <input className="form-check-input" type="checkbox" aria-label="..." checked={done} onChange={toggleCheck}/>
      <span className={isDone}>{content}</span>
    </li>
  );
}
function List({ items, onCheck }) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item.id} {...item} onCheck={onCheck}/>
      ))}
    </ul>
  );
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const ref = useRef()
  const [input, setInput] = useState(null)
  const [items, setItems] = useState([{ id: 1, content: "pay bills", done: true }, { id: 2, content: "learn React", done: false }]);
  const [all, setAll] = useState(items)

  const handleOnChange = e => setInput(e.target.value)
  const handleOnSubmit = e => {
    e.preventDefault()
    if (isValid) { 
      setItems([{id: uuid(), content: input, done: false}, ...items]);
      setAll([{id: uuid(), content: input, done: false}, ...items]);
      setInput(null)
      ref.current.value = null;
    }
  }
  const handleOnCheck = (id, bool) => {
    const updated = items.map(item => item.id === id ? {...item, done: bool} : item)
    setItems(updated)
    setAll(updated)
  }

  const handleOnSelect = option => {
    const filtered = items.filter(item => !!item.done)
    setItems(option === "Completed" ? filtered : all)
  }

  const isValid = useMemo(() => {
    return !!input
  }, [input])
  return (
    <Container title="Gestionnaire de tâches">
      <Form ref={ref} onChange={handleOnChange} onSubmit={handleOnSubmit}/>
      <Select onSelect={handleOnSelect}/>
      <List items={items} onCheck={handleOnCheck}/>
    </Container>
  );
}

export default App;
