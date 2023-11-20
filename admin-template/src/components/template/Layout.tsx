import Content from "./Content";
import SideMenu from "./SideMenu";
import TopBar from "./TopBar";

interface LayoutProps {
  title: string;
  subTitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`flex h-screen w-screen`}>
      <SideMenu/>
      <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}>        
        <TopBar title={props.title} subTitle={props.subTitle}/>
        <Content>
          {props.children} 
        </Content>
      </div>
    </div>
  )
}