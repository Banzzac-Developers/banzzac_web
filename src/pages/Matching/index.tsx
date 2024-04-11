
import Navigator from "@layouts/Navigator";
import MultiSlider from "@components/Slider/Slider";
import Twinkle from "@components/Twinkle/Twinkle";
import TemperatureBar from "@components/TemperatureBar/TemperatureBar";
import { useEffect, useState } from "react";
import axios from "axios";
import RoundHeader from "@layouts/RoundHeader";


export default function Matching() {
  const [chatlist, setChatList] = useState([{senderId:"me",receiverId :"you",message : "ㅎㅇ",sendImg:""},{senderId:"me",receiverId :"you",message : "ㅎㅇ2",sendImg:""},{senderId:"me",receiverId :"you",message : "good",sendImg:""}])
  const [data, setData]=useState({senderId:"me",receiverId :"you",message : "",sendImg:""});

  function sendData(){

    axios.post("http://localhost/test/person",data).then(({data})=>{
      console.log("post 로 넘겨서 받은 데이타 : ")
      console.log(data)
    }).catch((e)=>{
      console.log(e)
    })

  }



  useEffect(()=>{
    axios.get("http://localhost/api/matching/condition").then(({data})=>{
      console.log(data)
    }).catch((e)=>{
      console.log("error")
      console.log(e)
    })
  },[])

  useEffect(()=>{
    console.log(data);
  },[data])


  function sendMessage(){
    axios.post("http://localhost/api/exam/send",data).then(({data})=>{
      let copy = [...chatlist]
      copy.push(data)
      setChatList(copy)
    }).catch((e)=>{console.log(e)})
  }

  return (
    <>
      <RoundHeader />
      <MultiSlider />
      <input type="text" onChange={(e)=>{setData((prev)=>({...prev,message : e.target.value}))}} placeholder="message"/>
      <button onClick={()=>{
          sendMessage()
      }}>전송</button>
      {chatlist.map((element)=>{
        return (<>
              <h6>{element.senderId}</h6>
              <p>{element.message}</p>
          </>
        )
      })}

      <Twinkle avg={30} isClick={true}/>
      <TemperatureBar point={72.6}/>
      <Navigator/>
    </>
  );
}
