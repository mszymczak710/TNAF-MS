import './Select.css';
import people from '../Users/Users';

const Select = (users) => {
  return (
   <select>
    <option>Select a user</option>
    {people.map((person) => {
       return (
        <option> {person.firstName} {person.lastName} </option>
       );})}
   </select>
  );
}

export default Select;