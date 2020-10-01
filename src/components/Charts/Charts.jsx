import React, {useState} from "react";
import { Bar } from "react-chartjs-2";
import {NativeSelect, Grid} from '@material-ui/core';
import Card from '../Card/Card'
import "./Charts.css";


const Charts = ({ data }) => {
    const [options, setOptions] = useState('belipaketinternet')

    const beliPaketCard = data[0].journeyName.beliPaketInternet.map(cards => {
      return  <Grid item xs={12} sm={3}> <Card color={cards.color} value={cards.value} label={cards.label} /></Grid> 
    })

    const loginCard = data[0].journeyName.login.map(cards => {
      return <Grid item xs={12} sm={3}> <Card color={cards.color} value={cards.value} label={cards.label} /></Grid>
    })

    const beliPaket =  (
      <Bar
        data={{
          labels: data[0].journeyName.beliPaketInternet.map((item) => item.label),
         
          datasets:[{label:'Axis', backgroundColor:[
              'gray',
              'green',
              'blue',
              'red',
              'yellow',
              'purple'
          ], data: data[0].journeyName.beliPaketInternet.map((item) => item.value)}]
        }}
      ></Bar>
    ) 

    
    const login =  ( <Bar
      data={{
        labels: data[0].journeyName.login.map((item) => item.label),
       
        datasets:[{label:'Axis', backgroundColor:[
            'green',
            'blue',
            'red',
            'yellow',
        ], data: data[0].journeyName.login.map((item) => item.value)}]
      }}
    ></Bar> )

    console.log(data[0].journeyName.login);
  return <div className='container-bar'>
    <div className="card-container">
    <Grid container justify='center' spacing={3}>
   {options === 'belipaketinternet' ? beliPaketCard : loginCard}
   </Grid>
    </div>
   
    <NativeSelect  onChange={(e) => setOptions(e.target.value)}>
                <option value="belipaketinternet">Beli Paket Internet</option>
                <option value="login">Login</option>
            </NativeSelect>
            <div className="container-chart">
       { options === 'belipaketinternet' ? beliPaket : login }
    </div>
        </div>;
};

export default Charts;
