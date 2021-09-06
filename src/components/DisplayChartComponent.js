import React,{useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

export default function DisplayChart({option}) {
const [countryData,setCountryData]=useState([]);
useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/countries/${option}/confirmed`)
    .then((response) => response.json())
    .then((res) => {
    setCountryData(res)
    })
    },[option])
console.log("countryData",countryData);
let statesName=[];
let cases=[];
let deaths=[];
countryData.map((item) => (statesName.push(item.provinceState)))
countryData.map((item) => (cases.push(item.confirmed)))
countryData.map((item) => (deaths.push(item.deaths)))

return (
<>
<Bar
          data={{labels:statesName,datasets:[{data:cases,label: 'confirmed',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2},{data:deaths,label: 'deaths',
          backgroundColor: 'yellow',
          borderColor: 'green',
          borderWidth: 2}]}}
          options={{
            title:{
              display:true,
              text:'Covid infected cases in last 28 days',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
</>
)



}