import NewList from "./NewList";
import {useState} from 'react';

const list = [
  { label: 'Select', value: '' },
  { label: 'React', value: 'React JS' },
  { label: 'Angular', value: 'Angular JS' },
  { label: 'Vue', value: 'Vue JS' },
];

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select  value={value} onChange={onChange} className="dropdown-item" >
        {options.map((option) => (
          <option key={option.value} value={option.value} selected>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

 
const DisplayList = () =>{
 
  
  const [value, setValue] = useState('');
  
function handleChange(event){
  
   const selectval=event.target.value;
    setValue(selectval);    
       
};
const handleRemoveData =() =>{
 setValue('');
  
}

return(
    <div>
      
        <Dropdown 
        label="Selected Languages are :"
        options={list}
        key={value}
        value={value}
        onChange={handleChange}
        
        
      />
      
      <NewList data={value} handleRemoveData={handleRemoveData} />
     
    
    </div>

);
}

export default DisplayList;

/* <ul>
    {props.items.map((item) => (
      <NewList key={item.id} item={item} onRemove={onRemove} />
    ))}
  </ul> 
<div className="todo-list">
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span>{item.firstname}</span>
          <span>{item.lastname}</span>
          <span>{item.year}</span>
          
        </li>
      ))}
    </ul>
    </div>
  */