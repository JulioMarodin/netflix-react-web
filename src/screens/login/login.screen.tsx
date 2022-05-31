import { Grid } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react"
import { Wrapper } from "./login.styled"

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleChange = useCallback(
    ({target}: React.ChangeEvent<HTMLInputElement>) => {
      setData(prevData => ({
        ...prevData,
        [target.name]: target.value
      }))
    },
    [setData]
  )

  useEffect(
    () => console.log(data), [data]
  )

  return (
    <Wrapper container justifyContent='center' alignContent='center'>
      <Grid container justifyContent='center' alignContent='center' xs={4}>
        <input type='email' name='email' onChange={handleChange}/>
        <input type='password' name='password' onChange={handleChange}/>
      </Grid>
    </Wrapper>
  )
}

export default Login;