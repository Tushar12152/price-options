import { useState } from "react";
import List from "./list";
import {AiOutlineMenuUnfold,AiOutlineClose } from 'react-icons/ai';
const Nav = () => {

    const routes = [
        { name: 'Home', id: 'home', path: '/' },
        { name: 'About', id: 'about', path: '/about' },
        { name: 'Contact', id: 'contact', path: '/contact' },
        { name: 'Products', id: 'products', path: '/products' },
        
      ];

      const [open,setOpen]=useState(false)
      console.log(open)
    return (
        <div>
              <div className="  m-2 bg-sky-200 p-3 md:hidden " onClick={()=>setOpen(!open)}>
                {
                  open===true?<AiOutlineClose className="font-bold text-2xl"></AiOutlineClose>
                  : <AiOutlineMenuUnfold className="font-bold text-2xl"></AiOutlineMenuUnfold>
                }
             
              </div>
              <ul className={`md:flex gap-3 duration-1000 bg-violet-300 lg:w-full w-[20%] p-3 m-2 absolute md:static ${open?'top-14':'-top-60'}`}>
                 {routes.map(route=><List key={route.id} route={route}></List>)}
              </ul>
        </div>
    );
};

export default Nav;