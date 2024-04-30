import { useState, useRef, forwardRef } from "react";
import { v4 as uuid} from "uuid";
import "./App.css";

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

function Select() {
  return (
    <div className="d-flex justify-content-end align-items-center my-3 ">
      <select className="select form-select form-control form-control-sm">
        <option value="1">All</option>
        <option value="2">Completed</option>
        <option value="3">Active</option>
        <option value="4">Has due date</option>
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
  const ref = useRef()
  const [input, setInput] = useState(null)
  const [items, setItems] = useState([
    { id: 1, content: "pay bills", done: true },
    { id: 2, content: "learn React", done: false },
  ]);
  const [all, setAll] = useState(items)

  const handleOnChange = e => setInput(e.target.value)
  const handleOnSubmit = e => {
    e.preventDefault()
    if (!input) { return false } 
    setItems([{id: uuid(), content: input, done: false}, ...items]);
    setInput(null)
    ref.current.value = null;
  }
  const handleOnCheck = (id, bool) => {
    const updated = items.map(item => item.id === id ? {...item, done: bool} : item)
    setItems(updated)
    setAll(updated)
  }
  return (
    <Container title="Gestionnaire de tâches">
      <Form ref={ref} onChange={handleOnChange} onSubmit={handleOnSubmit}/>
      <Select />
      <List items={items} onCheck={handleOnCheck}/>
    </Container>
  );
}

export default App;
