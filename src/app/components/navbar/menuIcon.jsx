import { motion } from "framer-motion";


export default function MenuICON({isopen , setopen}){

    const handleClick = () =>{
        setopen(!isopen);
    }

    return (
        <div 
        className="flex flex-col  fixed space-y-px pt-4 pr-1 cursor-pointer
          self-center z-50 "
        onClick={handleClick}> 
          <motion.div
          className="w-5 h-1  self-start"
          animate={{ rotate: isopen ? -45 : 0, y: isopen ? 4 : 0, x: isopen ? -6 : 0 }}
          transition={{ duration:  0.5 ,ease:"backIn"}}
          style={{ originX: 0, originY: 0 ,backgroundColor:"var(--foreground)" }}
      ></motion.div>

      <motion.div
          animate={{ rotate: isopen ? 45 : 0 }}
          transition={{ duration:  0.5 ,ease:"backInOut"}}
          style={{ originX: 0.5, originY: 0 ,backgroundColor:"var(--foreground)" }}
          className="w-10 h-1 "
      ></motion.div>

      <motion.div
          animate={{ rotate: isopen ? -45 : 0 }}
          transition={{ duration:  0.5 ,ease:"anticipate"}}
          style={{ originX: 0.5, originY: 0.5 ,backgroundColor:"var(--foreground)" }}
          className="w-5 h-1  self-end"
          
      ></motion.div></div>
    );
}