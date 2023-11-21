import ToggleThemeButton from "../ToggleThemeButton";
import Title from "./Title";
import useAppData from "@/src/data/hook/useAppData";

interface TopBarProps {
  title: string;
  subTitle: string;
}

export default function TopBar(props: TopBarProps) {
  const {theme, toggleTheme } = useAppData();

  return (
    <div className={`flex`}>
        <Title title={props.title} subTitle={props.subTitle} />
        <div className={`
          flex flex-grow justify-end
        `}>
          <ToggleThemeButton theme={theme} toggleTheme={toggleTheme}/>
        </div>
    </div>
  )
}