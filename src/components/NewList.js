const NewList = (props) =>{
  
  const handleRemoveItem = (e) => {
     
    props.handleRemoveData();
   
   };

  return (
<>
    <div className="delete-list">
       
        {props.data !=="" ? (<div>You Like to Learn: <span>{props.data} 
        <button type="button" onClick={handleRemoveItem}>Delete</button></span></div> ): ""} 
          
    </div>
    </>
  
  );
     }
    
    export default NewList;

 