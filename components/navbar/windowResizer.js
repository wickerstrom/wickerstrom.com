import { useEffect, useState } from "react";

export default function useResizer() {
    const [isMobile, setIsMobile] = useState(null);
  
    function handleSizeChange() {
      return setIsMobile(window.innerWidth < 840);
    }
  
    useEffect(() => {
      window.addEventListener("resize", handleSizeChange);
  
      return () => {
        window.removeEventListener("resize", handleSizeChange);
      };
    }, [isMobile]);
  
    return isMobile;
  }