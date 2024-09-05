import './FormField.scss'

function FormField({ className, placeholder, name, value, onChange }) {
  return (
    <input 
    className={"form-field " + className} type="text" placeholder={placeholder} name={name} value={value} onChange={onChange} 
    />
  )
}

export default FormField