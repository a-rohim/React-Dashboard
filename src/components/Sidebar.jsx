import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { links } from '../data/dummy.jsx'
import { useStateContext } from '../contexts/ContextProvider.jsx'


const Sidebar = () => {
    let { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext()

    const activeLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2`;
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <div
            className=' ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 overflow-x-hidden md:hover:overflow-x-hidden '>
            {activeMenu && (<div className=' w-[17rem] overflow-hidden '>
                <div className='flex justify-between items-center mr-2 '>
                    <Link to={'/'} onClick={() => screenSize <= 900 ? setActiveMenu(!activeMenu) : ''} className='items-center gap-4 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900 '>
                        <SiShopware /> <span>abdurrohim</span>
                    </Link>
                    <TooltipComponent content={'Menu'} position='BottomCenter'>
                        <button type='button' onClick={() => { setActiveMenu(!activeMenu) }}
                            className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden text-gray-700 dark:bg-gray-300'><MdOutlineCancel /></button>
                    </TooltipComponent>
                </div>
                <div className='mt-4 '>
                    {links.map(item => <div key={item.title} >
                        <p className='text-gray-400 mt-4 uppercase'>
                            {item.title}
                        </p>
                        {item.links.map(links => <NavLink
                            to={`/${links.name}`}
                            key={links.name}
                            onClick={() => { screenSize <= 900 ? setActiveMenu(!activeMenu) : '' }}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                            style={({ isActive }) => (isActive ? { backgroundColor: currentColor } : {})}
                        >
                            {links.icon}
                            <span className='capitalize'>{links.name} </span>
                        </NavLink>)}
                    </div>)}

                </div>
            </div>)}
        </div>
    )
}

export default Sidebar