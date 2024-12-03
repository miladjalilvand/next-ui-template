import { motion } from "framer-motion";

export default function Menu({isopen , setopen}){

    return(

        <motion.div 
        initial={{ x: !isopen ? "100%" : "0%" }}
       
        animate={{ x: isopen ? "0%" : "100%" }} 

        transition={{ duration: 0.5, ease: "circInOut" }}
   
        className="fixed z-40 flex flex-col justify-between
         w-full bg-foreground opacity-50 min-h-screen md:w-1/3">



       </motion.div>
    );
}