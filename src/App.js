import React, { useState } from "react";
import { Charts, Map } from "./components";
import "./App.css";

function App() {
  const [data] = useState([
    {
      provider: "AXIS",
      journeyName: {
        beliPaketInternet: [
          {
            value: 43,
            label: "Status",
            color:'gray'
          },
          {
            value:58,
            label: "Konfirmasi",
            color:'green'
          },
          { value: 29, label: "Metode Aktifasi", },
          { value: 63, label: "Pilih Paket", color:'red' },
          {
            value: 39,
            label: "Menu Paket",color:'yellow',
          },
          { value: 49, label: "Home", color:'purple' },
        ],
        login: [
          {
            value: 54, label:'Home', color:'green'},{
            value: 42, label:'Login Process',color:'blue'},
            {value: 32, label:'Login Page',  color:'red'},
        ],
      },
    },
  ]);



  return (
    <div className='container'>
      <Charts data={data} />
      <Map/>
    </div>
  );
}

export default App;
