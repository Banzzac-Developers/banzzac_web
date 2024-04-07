import styled from "@emotion/styled";
import { useEffect } from "react";

declare global {
    interface Window {
        kakao: any;
    }
}
export default function KakaoMap(){
    useEffect(() => {
      const container = document.getElementById(`map`); // 지도를 담을 영역의 DOM 레퍼런스
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도 중심 좌표
        level: 3, // 지도의 레벨(확대, 축소 정도)
      };
  
      const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      
    }, []);
  
    return <Map id="map" style={{ width: "100%", height: "100%" }} />;
  }



const Map = styled.div`
    position: absolute;
    z-index: 0;
`