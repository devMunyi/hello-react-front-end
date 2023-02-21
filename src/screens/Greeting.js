import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/actions';

function Greeting() {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.greetingDetails?.greeting);

  useEffect(() => {
    if (!message) {
      dispatch(fetchGreeting());
    }
  }, [dispatch, message]);

  return (
    <div className="card p-4">{message}</div>
  );
}

export default Greeting;
