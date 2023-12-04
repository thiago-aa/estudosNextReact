interface ButtonProps {
  bgColor?: 'green' | 'blue' | 'gray';
  className?: string;
  children: any;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const bgColor = props.bgColor ? props.bgColor : 'gray';

  return (
    <button className={`
     text-white px-4 py-2 rounded-md
     ${props.className}
    `} 
    style={{backgroundColor: bgColor}}
    onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}