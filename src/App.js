import React, { useEffect, useState } from "react";
import arr from "./data";
import findTime from "./Component/findTime";
import Tbody from "./Component/Tbody";
import Canvas from "./Component/Canvas";
import './App.css'
let App = () => {
  let [data, setData] = useState([...arr]);
  let [amap, setamap] = useState([]);
  let totalTime = [];

  let obj = {};

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (obj[data[i].EmployeeName]) {
        obj[data[i].EmployeeName].push(data[i]);
      } else {
        obj[data[i].EmployeeName] = [data[i]];
      }
    }

    for (let key in obj) {
      let cdata = obj[key];
      let ttime = 0;

      for (let i = 0; i < cdata.length; i++) {
      ttime += findTime(cdata[i]);}
      ttime /= 60;
      ttime=Math.round(ttime)
      totalTime.push({ ttime, key });
      setamap(totalTime)
    }
  }, []);

  return (
    <div className="flex">
      <div>
        <h1> Table Data </h1>
      <table border='2'>
      <tr >
      <td>Sr.No</td>
      <td>Name</td>
      <td>time/hr</td>
    </tr>

        <tbody> {amap.map((item, index) => <Tbody item={item} ind={index} key={index }/>)} </tbody>
      </table>

      </div>
      
      <div className="center">
        <h1 className="mfauto">Pie chart</h1>
      <Canvas amap={amap}/>
      </div>
     

    </div>
  );
};

export default App;
