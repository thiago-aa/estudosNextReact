interface InputProps {
  label: string;
  type?: 'number' | 'text';
  value: any;
  readOnly?: boolean;
  onChange?: (value: any) => void; 
  className?: string;
}

export default function Input(props: InputProps) {
  const {label, value, readOnly, className} = props;
  const type = props.type ? props.type : 'text'
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-2">
        {label}
      </label>
      <input type={type} value={value} readOnly={readOnly} onChange={ e => props.onChange?.(e.target.value) } className={`
        border border-purple-500 rounded-lg
        bg-gray-50
        py-1 px-2
        focus:outline-none ${readOnly ? '' : 'focus:bg-white'}
      `}/>
    </div>
  )
}