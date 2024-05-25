import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const logoAnimation = {
   hidden: {
      x: 100,
      opacity: 0,
   },
   visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.3 },
   },
}


const Header = ({ search, setSearch }) => {
   const handleSearchChange = e => setSearch(e.target.value)

   return (
      <header className="w-full py-10 px-10 mb-4 top-0 bg-white flex justify-between items-center border-b sticky">
         <Logo />
         <div className="sm:w-[200px] md:w-[300px]">
            <input 
               type="text" 
               placeholder="Поиск покемона" 
               className="sm:w-[200px] md:w-[300px] py-2 px-2 outline-none border rounded text-[#707070]"
               value={search}
               onChange={handleSearchChange}
            />
         </div>
      </header>
   )
}

const Logo = () => {
   return (
      <Link to='/'>
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
         >
            <motion.h1 
               variants={logoAnimation}
               className='sm:text-2xl md:text-5xl text-black font-medium text-center'
            >
               Pokemon List
            </motion.h1>
         </motion.div>
      </Link>
   )
}

export default Header