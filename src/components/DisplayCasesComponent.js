import React from 'react';
import '../css/style.css'
import Display from './DisplayComponent'
export default function DisplayCases({confirmed,recovered,deaths}){
    let tracker=[{confirmed:confirmed},{recovered:recovered},{deaths:deaths}]
return (
  <div className="displayCases">
          
          {tracker.map((item,key) => {
              return(
              <Display className="displayCaseVal" title={Object.keys(item)[0]} value={Object.values(item)[0]} />
              )
          })}
      </div>

)




}