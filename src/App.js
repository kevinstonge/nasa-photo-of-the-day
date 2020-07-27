import React, {useState, useEffect} from "react";
import "./App.scss";
import Header from "./components/Header";
import APOD from "./components/APOD";
import axios from "axios";
import formatDate from "./formatDate";
// const devTemp = () => {
//   return JSON.parse(`{"data":{
//     "copyright":"Jeff Dai",
//     "date":"2020-07-25",
//     "explanation":"On July 23, this Long March 5 heavy-lift rocket rose into a blue morning sky from China's Hainan Island Wenchang Satellite Launch Center. The rocket carried an orbiter, lander, and rover to ask Heavenly Questions on the ambitious Tianwen-1 mission to Mars. In fact Tianwen-1 was the second of three missions scheduled for a July departure to the Red Planet. The United Arab Emirates launched its Amal (Hope) Mars probe on July 19.  NASA's launch of its Mars Perseverance Rover from Cape Canaveral Air Force Station, USA is scheduled for July 30. That is the last planned Mars launch for 2020 though. The minimum-energy launch window for an expedition to Mars is coming to a close in 2020 and will reopen in 2022.  Comet NEOWISE images from planet Earth: July 24, 23, 22",
//     "hdurl":"https://apod.nasa.gov/apod/image/2007/169A2911Dai.jpg",
//     "media_type":"image",
//     "service_version":"v1",
//     "title":"Tianwen-1 Mission to Mars",
//     "url":"https://apod.nasa.gov/apod/image/2007/169A2911Dai1024.jpg"},
//     "status":200,"statusText":"OK","headers":{"content-type":"application/json"},"config":{"url":"https://api.nasa.gov/planetary/apod?api_key=2tHL7PTeXk91n3n1G7DcZtgEMAbC5VzzpLmh0BvF","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1},"request":{}}`);
// }
// const getAPOD = () => {
//   // const apodURL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_API_KEY}`;
//   // axios.get(apodURL).then(d=>{console.log(JSON.stringify(d))})
// }
const getAPOD = (date) => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_API_KEY}&date=${formatDate(date)}`).then(d=>{return d});
}

function App() {
  const [date, setDate] = useState(new Date());
  // const data = devTemp(date);
  const [data,setData] = useState({});
  useEffect(()=>{
    const getData = async() => {
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_API_KEY}&date=${formatDate(date)}`).then(r=>{
        setData(r);
        console.log("getData request deeper");
      });
      console.log("getData request processed");
    }
    getData();
  },[]);
  return (
    <div className="App">
      <Header />
      <APOD data={data} />
    </div>
  );
}

export default App;
