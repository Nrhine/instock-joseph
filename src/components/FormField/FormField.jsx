import './FormField.scss'

function FormField({ className, placeholder, name }) {
  return (
    <input className={"form-field " + className} type="text" placeholder={placeholder} name={name} />
  )
}

export default FormField