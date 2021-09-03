import React,{useEffect,useState} from 'react';
import Display from './DisplayComponent';
import '../css/style.css';
export default function CountryReport({option}) {

const [covidData,setCovidData] =useState('');
console.log(option);
useEffect( ()=>{
    fetch(`https://covid19.mathdro.id/api/countries/${option}`)
    .then((response) => response.json())
    .then((res) => setCovidData(res))
},[option])
console.log(covidData);
let tracker=covidData?[{confirmed:covidData.confirmed.value},{recovered:covidData.recovered.value},{deaths:covidData.deaths.value}]:[];

return(
   
    <>
     <h1>{option}</h1>
       <div className="displayCases">
          
          {tracker.map((item,key) => {
              return(
              <Display className="displayCaseVal" title={Object.keys(item)[0]} value={Object.values(item)[0]} />
              )
          })}
      {/* <p className="displayCaseVal">confirmed: {covidData?covidData.confirmed.value:''}</p>
      <p className="displayCaseVal">recovered: {covidData?covidData.recovered.value:''}</p>
      <p className="displayCaseVal">deaths: {covidData?covidData.deaths.value:''}</p> */}
      
      </div>
    

    </>
)


}