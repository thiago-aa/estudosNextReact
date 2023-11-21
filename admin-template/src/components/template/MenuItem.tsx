import Link from "next/link";
import { render } from "react-dom";

interface MenuItemsProps {
  url?: string;
  text: string;
  icon: any;
  onClick?: (evento: any) => void;
  className?: string;
}

export default function MenuItems(props: MenuItemsProps) {
  function renderLink() {
    return (
      <div className={`
        flex flex-col justify-center items-center
        h-20 w-full text-gray-600 
        dark:text-gray-200
        ${props.className}
      `}>
        {props.icon}
        <span className={`
          text-xs font-light 
        `}>
          {props.text}
        </span>
      </div>
    )
  }

  return (
    <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800`} >
      {
        props.url ? (
          <Link href={props.url}>
            {renderLink()}
          </Link>
        ) : (
          renderLink()
        )
      }
    </li>
  )
}