import { useAppContext } from "../context"

function Item({ id, done, content }) {
    const { dispatch } = useAppContext() 
    const toggleCheck = e =>  dispatch({type: "check", payload: { id,  bool: e.target.checked }})
    const isDone = done ? "mx-3 item-done" : "mx-3"
    return (
      <li className="list-group-item">
        <input className="form-check-input" type="checkbox" aria-label="..." checked={done} onChange={toggleCheck}/>
        <span className={isDone}>{content}</span>
      </li>
    );
  }
  function List() {
    const { state } = useAppContext() 
    return (
      <ul className="list-group">
        {state.items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    );
  }
  export default List