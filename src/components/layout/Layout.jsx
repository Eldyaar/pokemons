import { Outlet } from "react-router-dom"

import Header from "../header/Header"

const Layout = ({ search, setSearch }) => {
   return (
      <>
         <Header search={search} setSearch={setSearch} />
         <main>
            <Outlet />
         </main>
      </>
   )
}

export default Layout