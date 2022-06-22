import * as yup from 'yup';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';
import Input from 'components/input/input';
import Button from 'components/button/button';
import userSlice from 'store/user/user.slice';
import FormError from 'components/form-error/form-error';
import { authenticated } from 'store/user/user.selector';
import { Error } from 'types/yup';
import { Wrapper } from './login.styled';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const userAuthenticated = useSelector(authenticated);

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData],
  );

  const handleSend = useCallback(
    async () => {
      try {
        const schema = yup.object().shape({
          email: yup.string().required().email(),
          password: yup.string().required(),
        });

        await schema.validate(data);
        setError('');

        dispatch(userSlice.actions.authentication(data));
      } catch (yupError: any) {
        setError((yupError as Error).errors[0]);
      }
    },
    [data],
  );

  useEffect(() => {
    console.log(userAuthenticated);
  }, [userAuthenticated]);

  return (
    <Wrapper container justifyContent="center" alignContent="center">
      <Grid item xs={2}>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
        />
        <Button onClick={handleSend}>Entrar</Button>
        <FormError message={error} />
      </Grid>
    </Wrapper>
  );
}

export default Login;
