import React,{useEffect,useState} from 'react';
import DisplayCases from './DisplayCasesComponent';
import DisplayChart from './DisplayChartComponent';
import '../css/style.css';
export default function CountryReport({option,countryName}) {
const [covidData,setCovidData] =useState('');
console.log(option);
const [countryData,setCountryData]=useState('');
useEffect(() => {
fetch(`https://covid19.mathdro.id/api/countries/${option}/confirmed`)
.then((response) => response.json())
.then((res) => {
setCountryData(res)
},[option])
})
useEffect( ()=>{
    console.log("hello")
    fetch(`https://covid19.mathdro.id/api/countries/${option}`)
    .then((response) => response.json())
    .then((res) => setCovidData(res))
},[option])
console.log(covidData);

return(
   <>
     <h1>{countryName}</h1>
     {covidData?<> <DisplayCases confirmed={covidData.confirmed.value} recovered={covidData.recovered.value} deaths={covidData.deaths.value}/>  <DisplayChart countryData={countryData} /></>:''}
    
    </>
)


}