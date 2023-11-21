import React from 'react'
import { useEffect, useState } from 'react';
import I18n from '../../Utils/I18n';
import './Home.css';

function Home() {
    // const [lang, setLang] = useState("mr");
    const userCount = 30;
  return (
    <div>
      
      <h1>{I18n("welcomeMessage")}</h1>
      <p>{I18n("normalMessage")}</p>
      <h3>{I18n("greetingMessage")}</h3>

      <select value={localStorage.getItem("language")}
      onChange={(e) => {
        localStorage.setItem("language", e.target.value);
        window.location.reload();
      }}
      >
        <option value="mr">Marathi</option>
        <option value="hi">Hindi</option>
        <option value="en">English</option>
      </select>

      <p>
        {I18n("userStartMessage", "<studentCount>", userCount)}
      </p>
    </div>
  )
}

export default Home
