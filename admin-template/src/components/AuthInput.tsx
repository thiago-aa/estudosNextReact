interface AuthInputProps {
  label: string;
  value: any;
  type: 'email' | 'password' | 'text';
  getValue: (newValue: any) => void;
  required: boolean;
  notRender?: boolean;
  }

export default function AuthInput(props: AuthInputProps) {
const { label, value, type, getValue, required, notRender } = props;
  return notRender ? null : (
    <div className="flex flex-col mt-4">
      <label>{label}</label>
      <input
        value={value}
        type={type}
        onChange={ e => getValue(e.target.value) }
        required={required}
        className={`
          py-4 px-6 rounded-lg bg-gray-200 mt-2
          border focus:border-blue-500 focus:bg-white
          focus:outline-none
        `}
      />
    </div>
  )
}