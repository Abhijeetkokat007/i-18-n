import React from 'react'
import { useEffect, useState } from 'react';
import I18n from '../../Utils/I18n';
import './Home.css';

function Home() {
    // const [lang, setLang] = useState("mr");
    const userCount = 30;
  return (
    <div> 
       <h1 className='nav-container'>Internationalization</h1>
    <div className='i18n-container'>
      
      
     <div className='text-center'>
      <p>Select Language</p>
     <select className='drop-lan'  value={localStorage.getItem("language")}
      onChange={(e) => {
        localStorage.setItem("language", e.target.value);
        window.location.reload();
      }}
      >
        <option value="mr">Marathi</option>
        <option value="hi">Hindi</option>
        <option value="en">English</option>
      </select>
     </div>

      {/* <h1>{I18n("welcomeMessage")}</h1> */}
      <h1 className='hed-1'>{I18n("normalMessage")}</h1>
      <h3 className='queation-1'>{I18n("greetingMessage")}</h3>
      <p className='ans-1'>{I18n("ans-1")}</p>

      <h3 className='queation-1' >{I18n("question-2")}</h3>
      <p className='ans-1'>{I18n("ans-2")}</p>

      <h3 className='queation-1'>{I18n("question-3")}</h3>
      <p className='ans-1'>{I18n("ans-3")}</p>


      <p>
        {/* {I18n("userStartMessage", "<studentCount>", userCount)} */}
      </p>
    </div>
    </div>
  )
}

export default Home;
