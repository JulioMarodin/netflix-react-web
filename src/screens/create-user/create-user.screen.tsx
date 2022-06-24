import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { errorSelector, tokenSelector } from 'store/user/user.selector';
import userSlice from 'store/user/user.slice';
import * as yup from 'yup';
import { Error } from 'types/yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { SHOWS_URL } from 'screens/shows/shows.types';
import { Wrapper } from 'screens/login/login.styled';
import { Grid } from '@mui/material';
import Input from 'components/input/input';
import FormError from 'components/form-error/form-error';
import Button from 'components/button/button';
import { USER_TOKEN_COOKIE } from 'store/user/user.types';
import { LOGIN_URL } from 'screens/login/login.types';

function CreateUser() {
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

  const handleSend = useCallback(async () => {
    try {
      const schema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required(),
      });

      await schema.validate(data);
      setError('');

      dispatch(userSlice.actions.createUser(data));
      navigate(LOGIN_URL);
    } catch (yupError: any) {
      setError((yupError as Error).errors[0]);
    }
  }, [data]);

  const handleLogin = () => {
    navigate(LOGIN_URL);
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
        <Button onClick={handleSend}>Criar Usuário</Button>
        <p>Já possui uma conta?</p>
        <Button onClick={handleLogin}>Login</Button>
      </Grid>
    </Wrapper>
  );
}

export default CreateUser;
