import { useState, useEffect } from "react";
import { menuURL } from "../utils/constants";

export default function useRestInfo(resId) {

    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchInfo();
      }, []);
    
      const fetchInfo = async () => {
        const data = await fetch(menuURL + resId);
        const json = await data.json();
    
        setRestInfo(json.data);
      };

  return (restInfo);
}
