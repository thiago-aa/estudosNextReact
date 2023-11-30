interface ButtonProps {
  bgColor?: 'green' | 'blue' | 'gray';
  className?: string;
  children: any;
}

export default function Button(props: ButtonProps) {
  const bgColor = props.bgColor ? props.bgColor : 'gray';
  console.log("cor do botão:", bgColor);

  return (
    <button className={`
     text-white px-4 py-2 rounded-md
     ${props.className}
    `} style={{backgroundColor: bgColor}}>
      {props.children}
    </button>
  )
}