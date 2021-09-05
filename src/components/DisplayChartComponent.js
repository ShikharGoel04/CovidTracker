import React,{useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

export default function DisplayChart({option}) {
    const [states,setStates]=useState([]);
const [confirmed,setConfirmed]=useState([]);
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
countryData.map((item) => (statesName.push(item.provinceState)))
countryData.map((item) => (cases.push(item.cases28Days)))
console.log(statesName)
console.log("cases",cases)
// console.log(states)
// countryData.map((item) => setStates(state=> state + item.provinceState) )

return (
<>
<Bar
          data={{labels:statesName,datasets:[{data:cases,label: 'cases28days',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
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