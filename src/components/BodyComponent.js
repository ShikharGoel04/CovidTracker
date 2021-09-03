import React,{ useState,useEffect } from 'react';
import DisplayCases from './DisplayCasesComponent';
import CountryReport from './CountryReportComponent';
import '../css/style.css';
export default function Body(){
    const [option,setOption] = useState('AFG');
    const [covidData,setCovidData]=useState('');
    const[countries,setCountries] =useState({});
    const [countryName, setCountryName] =useState('');
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
    const selectOption =(e) => {
        setOption(e.target.value);
        let index = e.nativeEvent.target.selectedIndex;
        let label = e.nativeEvent.target[index].text;
        setCountryName(label);
        
    }
    return(
       <>
        {covidData?console.log(covidData.confirmed):covidData.confirmed}
        <h1>Covid Tracker</h1>
       {covidData?option==='global'?<><h1>Global</h1><DisplayCases confirmed={covidData.confirmed.value} recovered={covidData.recovered.value} deaths={covidData.deaths.value} /></>:   <CountryReport countryName={countryName} option={option} />:''}

      
        <h3>Select Country : 
        &nbsp;<select className="selectOption" onChange={selectOption}>
        <option id="global" value="global">Global</option>
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
           
          
        {console.log(option)}   
        </>
    )




}
