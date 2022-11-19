import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { isLoading: false, error: null, show: action.show };
    }
    case 'FETCH_FAILED': {
      return { ...prevState, isLoading: false, error: action.error };
    }

    default:
      return prevState;
  }
};

const initialState = {
  show: null,
  isLoading: true,
  error: null,
};

const Show = () => {
  const { id } = useParams();

  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    let isMount = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMount) {
          dispatch({ type: 'FETCH_SUCCESS', show: results });
        }

        return () => {
          isMount = false;
        };
      })
      .catch(err => {
        if (isMount) {
          dispatch({ type: 'FETCH_FAILED', error: err.message });
        }
      });
  }, [id]);

  console.log('show', show);

  if (isLoading) {
    return <div>data is being loaded</div>;
  }
  if (error) {
    return <div>error occured:{error}</div>;
  }

  return <div>this is show page</div>;
};

export default Show;
