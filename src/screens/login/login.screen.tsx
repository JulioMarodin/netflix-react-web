import { Grid } from "@mui/material";
import React, { useCallback, useState } from "react";
import { Wrapper } from "./login.styled";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import FormError from '../../components/form-error/form-error'
import * as yup from 'yup';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  const handleChange = useCallback(
    ({target}: React.ChangeEvent<HTMLInputElement>) => {
      setData(prevData => ({
        ...prevData,
        [target.name]: target.value
      }))
    },
    [setData]
  )

  const handleSend = useCallback(
    async () => {
      try {
        const schema = yup.object().shape({
          email: yup.string().required().email(),
          password: yup.string().required()
        })

        await schema.validate(data)
        setError('')
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          setError(error.errors[0])
        }
      }
    },
    [data]
  )
  
  return (
    <Wrapper container justifyContent='center' alignContent='center'>
      <Grid item xs={2}>
        <Input
          type='email' 
          name='email' 
          placeholder='E-mail'
          onChange={handleChange}
        />
        <Input
          type='password' 
          name='password' 
          placeholder='Senha'
          onChange={handleChange}
        />
        <Button onClick={handleSend}>Entrar</Button>
        <FormError message={error} />
      </Grid>
    </Wrapper>
  )
}

export default Login;