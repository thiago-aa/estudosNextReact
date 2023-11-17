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
    <div>
      <SideMenu/>
      <TopBar title={props.title} subTitle={props.subTitle}/>
      <Content>
        {props.children}  
      </Content>
    </div>
  )
}