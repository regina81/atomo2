import React, { Fragment, useState } from "react";
import { Tabla } from "./components/Tabla.jsx";
import { Atomo } from "./components/Atomo";
import { Cubeta } from "./components/Cubeta";
import { Elemento } from "./components/Elemento";
import { Informacion } from "./components/Informacion";
import './App.css';
import { render } from "@testing-library/react";

class App extends React.Component{
    
    constructor(props) {
        super(props);


        this.handler = this.handler.bind(this);


        this.state = {
            "name": " ",
            "appearance": " ",
            "atomic_mass": 0.000,
            "boil": 0.000,
            "category": " ",
            "color": null,
            "density": 0.00000,
            "discovered_by": " ",
            "melt": 0.00,
            "molar_heat": 0.000,
            "named_by": " ",
            "number": 0,
            "period": 0,
            "phase": " ",
            "source": " ",
            "spectral_img": " ",
            "summary": " ",
            "symbol": " ",
            "xpos": 0,
            "ypos": 0,
            "shells": [
                0
            ],
            "electron_configuration": " ",
            "electron_configuration_semantic": " ",
            "electron_affinity": 0.000,
            "electronegativity_pauling": 0.0,
            "ionization_energies": [
                0
            ],
            "cpk-hex": "000000",
            "nProtones":0,
            "nElectrones":0,
            "nNeutrones":0,     
        };
      }

      handler(elemento_actual,electrones,protones,neutrones){
          this.setState(elemento_actual);
          this.setState({"nProtones":protones});
          this.setState({"nElectrones":electrones});
          this.setState({"nNeutrones":neutrones});
      }




      handleClick() {
        let DatosEnvio ={
            "nombre" : "nombre",
            "nProtones" : this.state.nProtones,
            "nElectrones" : this.state.nElectrones,
            "nNeutrones" : this.state.nNeutrones,
            "idEjercicio" : "idEjercicio"
        }
        // Send data to the backend via POST
        fetch('http://httpoob.xpl0ited1.io:80/', {  // Enter your IP address here
          method: 'POST', 
          eaders: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(DatosEnvio.nProtones) // body data type must match "Content-Type" header
    
        })
        
      }




    render(){
    return (
    <div className="carta">
        <Cubeta handler = {this.handler}/>
        <Tabla datos = {this.state}/>
        <Elemento datos = {this.state} />
        <Informacion datos = {this.state} />
        <button className="guardar" onClick={() => { this.handleClick(this.state) }}>Guardar</button>
    </div>
    );
    }
}

export default App;