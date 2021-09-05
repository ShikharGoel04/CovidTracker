import React,{ useState,useEffect } from 'react';
import DisplayCases from './DisplayCasesComponent';
import DisplayChart from './DisplayChartComponent';
import '../css/style.css';
export default function Body(){
    const [option,setOption] = useState('global');
    const [covidData,setCovidData]=useState('');
    const[countries,setCountries] =useState({});
    const [countryName, setCountryName] =useState('');
    const [countryData,setCountryData]=useState([]);
    const [states,setStates] =useState('');

    useEffect(() => {
    fetch('https://covid19.mathdro.id/api/countries')
    .then((response) => response.json())
    .then((res) => setCountries(res))
    },[])
    useEffect(() => {
    if(option=='global')
      {
        fetch('https://covid19.mathdro.id/api')
        .then((response) => response.json())
        .then((res) => setCovidData(res))
      }  
      else{
        fetch(`https://covid19.mathdro.id/api/countries/${option}`)
        .then((response) => response.json())
        .then((res) => setCovidData(res))
      }
    },[option])
    // console.log("countryData",countryData)
    console.log("countries",countries)
    console.log("covidData",covidData)
    let countryList=countries?countries.countries:[];
    const selectOption =(e) => {
        setOption(e.target.value);
        let index = e.nativeEvent.target.selectedIndex;
        let label = e.nativeEvent.target[index].text;
        setCountryName(label);
    }

    return(
        
       <>
        <h1>Covid Tracker</h1>
        {covidData?option==='global'?<DisplayCases confirmed={covidData.confirmed.value} recovered={covidData.recovered.value} deaths={covidData.deaths.value} countryName="Global"/>: <DisplayCases confirmed={covidData.confirmed.value} recovered={covidData.recovered.value} deaths={covidData.deaths.value} countryName={countryName}/>:''}

      
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
           
          
     <DisplayChart option={option} />
        </>
    )




}
