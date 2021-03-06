import * as yup from 'yup';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';
import Input from 'components/input/input';
import Button from 'components/button/button';
import userSlice from 'store/user/user.slice';
import FormError from 'components/form-error/form-error';
import { errorSelector, tokenSelector } from 'store/user/user.selector';
import { Error } from 'types/yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { SHOWS_URL } from 'screens/shows/shows.types';
import { USER_TOKEN_COOKIE } from 'store/user/user.types';
import { CREATE_USER_URL } from 'screens/create-user/create-user.types';
import { Wrapper } from './login.styled';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const token = useSelector(tokenSelector);
  const userError = useSelector(errorSelector);
  const navigate = useNavigate();
  const from = useLocation();

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

  const handleSignup = () => {
    navigate(CREATE_USER_URL);
  };

  useEffect(() => {
    if (token) {
      navigate(SHOWS_URL, {
        state: { from },
      });
    }
  }, [token]);

  useEffect(() => {
    const localToken = localStorage.getItem(USER_TOKEN_COOKIE);
    if (localToken) {
      dispatch(userSlice.actions.setData({
        token: localToken,
      }));
    }
  }, []);

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
        <FormError message={error || userError} />
        <Button onClick={handleSend}>Entrar</Button>
        <p>N??o possui uma conta?</p>
        <Button onClick={handleSignup}>Cadastrar</Button>
      </Grid>
    </Wrapper>
  );
}

export default Login;
