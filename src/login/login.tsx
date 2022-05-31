import { Grid } from "@mui/material"
import React, { useCallback } from "react"
import { Wrapper } from "./login.styled"

export default function Login() {
  // const handleChange = useCallback(
  //   callback (e: any) => {
  //     const {target} = e;
  //     console.log(e)
  //   },
  //     deps: []
  // )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const textInput = event.target.value;
    console.log(textInput)
  }

  return (
    <Wrapper container justifyContent='center' alignContent='center'>
      <input type='text' name='email' onChange={handleChange}/>
    </Wrapper>
  )
}

function callback(event: Event | undefined, any: any): any {
    throw new Error("Function not implemented.")
}