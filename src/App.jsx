import { useState } from "react";
import ColourList from "./ColourList";
import Form from "./Form";
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colours, setColours] = useState(new Values('#99cd0a').all(10));

  const addColour = (colour) =>{
    try {
      const newColours = new Values(colour).all(10);
      setColours(newColours);
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <main>
      <Form addColour={addColour}/>
      <ColourList colours={colours}/>
      <ToastContainer position="top-right"/>
    </main>
  )
};
export default App;
