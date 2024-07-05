import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { FaUser, FaRegUser } from "react-icons/fa";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FiShoppingCart, FiSearch } from "react-icons/fi";


const Header = () => {

    const [menuOpened, setmenuOpened] = useState(false);
    const toggleMenu = () => setmenuOpened(!menuOpened);
    const { getTotalCartItems } = useContext(ShopContext);


    return (
        <header className="fixed top-0 left-0 m-auto max_padd_container w-full
         bg-primary ring-1 ring-slate-900/5 z-10">
            <div className="px-4 flexBetween py-3 max-xs:px-2">


                {/* Navbar Desktop*/}
                <Navbar containerStyles=
                    {"hidden md:flex gap-x-5 xl:gap-x-[1.5rem] medium-15"}
                />

                {/* Navbar Mobile*/}
                <Navbar containerStyles=
                    {`${menuOpened ?
                        "flex center flex-col gap-y-12 fixed top-[60px] right-[0] p-12 bg-black h-[60vh] shadow-md w-full medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
                        :
                        "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
                        }`
                    }
                />

                { /*logo 
                lg:pr-48
                 hover:text-secondary
                */}
                <div className="lg:text-[30px] text-[25px] lt-5 font-bold ml-[-21px] lg:pr-48">
                    <Link to={'/'}>
                        <h1 >ROADHOUSE</h1>
                    </Link>
                </div>


                {/*Buttons */}
                <div className="flexBetween sm:gap-x-2 gap-[5px] bold-16 lg:gap-x-0 mr-[-25px]">

                    <div className="flexBetween sm:gap-x-6 gap-[5px]">
                        <NavLink className={"flex"}>
                            <FiSearch className="h-[25px] w-[25px]" />
                        </NavLink>

                        <NavLink to={"cart-page"} className={"flex"}>
                            <FiShoppingCart className="h-[25px] w-[25px]" />
                            <span className="relative flexCenter w-5 h-5 rounded-full 
                            bg-red text-white right-[11px] medium-44 -top-2">{getTotalCartItems()}</span>
                        </NavLink>


                        {localStorage.getItem('auth-token') ?
                            <NavLink onClick={() => {
                                localStorage.removeItem('auth-token'); window.location.replace('/')
                            }} to={"logout"}
                                className={' flexCenter gap-x-2 medium-16'}>
                                <FaUser className="h-[25px] w-[25px]" />
                            </NavLink> 
                            :
                            <NavLink to={"Login"} className={" flexCenter "}>
                                <FaRegUser className="h-[25px] w-[25px]" />
                            </NavLink>
                        }
                    </div>

                    <div className="flex items-center justify-center">
                        {!menuOpened ? (
                            <IoIosMenu className="md:hidden cursor-pointer
                          p-[2px]  ring-slate-900/30 h-8 w-8
                        rounded-full " onClick={toggleMenu} />

                        ) : (

                            <IoMdClose className="md:hidden cursor-pointer
                         p-[2px]  ring-slate-900/30 h-8 w-8
                        rounded-full " onClick={toggleMenu} />)}
                    </div>

                </div>
            </div>
        </header >
    )
}

export default Header