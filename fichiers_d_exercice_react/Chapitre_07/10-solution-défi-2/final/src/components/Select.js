import { useAppContext } from "../context"

function Select() {
    const options = ["All", "Completed"]
    const { dispatch } = useAppContext() 
    const handleOnSelect = e =>  dispatch({type: "select", payload: { option : e.target.value }})
    return (
      <div className="d-flex justify-content-end align-items-center my-3 ">
        <select className="select form-select form-control form-control-sm" onChange={handleOnSelect}>
          {options.map(option => <option value={option}>{option}</option>)}
        </select>
      </div>
    );
  }

  export default Select