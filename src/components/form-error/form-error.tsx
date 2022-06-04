import { Error } from "./form-error.styled";

const FormError = (props: any) => {
  const { message, ...restProps } = props

  return (
    <Error {...restProps}>
      {message}
    </Error>
  )
}

export default FormError