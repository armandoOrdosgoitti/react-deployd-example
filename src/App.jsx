import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
  });
  const handleChange = (event) =>{
    const {name,value} = event.target
    setValues({
      ...values,
      [name]:value
    })
  }
 const handleSubmit = (e) =>{
  console.log(values.nombre + values.apellido);
  e.preventDefault();
  setValues({
    nombre:"",
    apellido:""
  })
 }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" placeholder="nombre" onChange={handleChange} value={values.nombre}/>
      <input type="text" name="apellido" placeholder="apellido" onChange={handleChange} value={values.apellido} />
      <input type="submit" value="aa" />
    </form>
  );
}

export default App;
