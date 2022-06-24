import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSelector } from 'store/shows/shows.selector';
import showSlice from 'store/shows/shows.slice';

function Shows() {
  const list = useSelector(listSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showSlice.actions.getList());
  }, []);

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <p>Hello World!</p>
  );
}

export default Shows;
