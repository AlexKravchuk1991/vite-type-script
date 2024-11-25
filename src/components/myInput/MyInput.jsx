

function MyInput ({name, type, placeholder, label }){

    return(
        <div>
        <label for={name}>{label}</label>
        <input type={type} name={name} placeholder={placeholder} id={name}/>
         </div>
      
    )
}

export default MyInput