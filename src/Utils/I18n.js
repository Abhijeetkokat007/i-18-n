import React from 'react'
import langaugeconfig from "./lang.json";


const I18n = (keyword, placeholder, value) => {
    const lang = localStorage.getItem("language") || "en";

const text = langaugeconfig[lang][keyword];
if(placeholder && value){
    return text.replace(placeholder, value);
}
    return text;
}

export default I18n;
