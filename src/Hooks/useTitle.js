import { useEffect } from "react"

const useTitle =title=>{
   useEffect(()=>{
    document.title=`cloud kitchen ${title}`
   }
     
    ,[title])
}

export default useTitle;