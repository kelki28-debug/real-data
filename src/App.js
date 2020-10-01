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
            value: 13,
            label: "Status",
            color:'gray'
          },
          {
            value: 8,
            label: "Konfirmasi",
            color:'green'
          },
          { value: 10, label: "Metode Aktifasi", },
          { value: 6, label: "Pilih Paket", color:'red' },
          {
            value: 9,
            label: "Menu Paket",color:'yellow',
          },
          { value: 9, label: "Home", color:'purple' },
        ],
        login: [
          {
            value: 22, label:'Home', color:'green'},{
            value: 22, label:'Login Process',color:'blue'},
            {value: 22, label:'Login Page',  color:'red'},
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
