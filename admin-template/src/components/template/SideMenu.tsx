import useAuth from "@/src/data/hook/useAuth"
import Logo from "../Logo"
import { BellIcon, ConfigsIcon, HomeIcon, QuitIcon } from "../icons"
import MenuItem from "./MenuItem"

export default function SideMenu() {
  const { logout } = useAuth();

  return (
    <aside className={`
      flex flex-col 
      bg-gray-200 text-gray-700
      dark:bg-gray-900
    `}>
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20
      `}>
        <Logo/>
      </div>
      <ul className="flex-grow">
        <MenuItem icon={HomeIcon} text="Início" url="/"/>
        <MenuItem icon={ConfigsIcon} text="Ajustes" url="/ajustes"/>
        <MenuItem icon={BellIcon} text="Novidades" url="/novidades"/>
      </ul>
      <ul>
        <MenuItem icon={QuitIcon} text="Sair" onClick={logout} className={`
          text-red-600 hover:bg-red-400 hover:text-white dark:text-red-400 dark:hover:text-white
        `}/>
      </ul>
    </aside>
  ) 
}