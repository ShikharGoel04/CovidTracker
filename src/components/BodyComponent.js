import React,{ useState,useEffect } from 'react';
import Display from './DisplayComponent';
import CountryReport from './CountryReportComponent';
import '../css/style.css';
export default function Body(){
    const [option,setOption] = useState('AFG');
    const [covidData,setCovidData]=useState('');
    const[countries,setCountries] =useState({});
    
    useEffect(() => {
    fetch('https://covid19.mathdro.id/api/countries')
    .then((response) => response.json())
    .then((res) => setCountries(res))
    },[])
    useEffect(() => {
        fetch('https://covid19.mathdro.id/api')
        .then((response) => response.json())
        .then((res) => setCovidData(res))
    },[])
    let tracker=covidData?[{confirmed:covidData.confirmed.value},{recovered:covidData.recovered.value},{deaths:covidData.deaths.value}]:[];
    console.log(tracker);
    console.log("countries",countries.countries);
    let countryList=countries?countries.countries:[];
    console.log("countryList",countryList);
    
    return(
       <>
        {covidData?console.log(covidData.confirmed):covidData.confirmed}
        <h1>Covid Tracker</h1>
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
        <>
        <h3>Select Country : 
        &nbsp;<select className="selectOption" onChange={(e) => {setOption(e.target.value);}}>
            {
                countryList?(countryList.map((item) => {
                   return(
                    <option id={Object.values(item)[0]}   value={Object.values(item)[2]}>  {Object.values(item)[0]}</option>
                    )
                }   
            )):''
            }
              </select>
              </h3>
              <CountryReport option={option} />
           </>
        {console.log(option)}   
        </>
    )




}
