import axios from 'axios';

export const PostMethod = (data: {}, uri: string, headers?: {}) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${uri}`;
  const params = {
    method: 'POST',
    data: data,
    headers: headers,
  };
  return axios(url, params)
    .then((response) => {
      return {
        ok: true,
        message: 'succes',
        response: response,
      };
    })
    .catch((error) => {
      return {
        ok: false,
        message: 'Algo salio',
        response: error,
      };
    });
};

export const GetMethod = (uri: string) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${uri}`;
  const params = {
    method: 'GET',
  };
  return axios(url, params)
    .then((response) => {
      return {
        ok: true,
        message: 'Operacion exitosa',
        response: response.data.data,
      };
    })
    .catch((error) => {
      return {
        ok: false,
        message: 'Algo salio mal',
        response: error,
      };
    });
};

export const PutMethod = (data: {}, uri: string, headers?: {}) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${uri}`;
  const params = {
    method: 'PUT',
    data: data,
    headers: headers,
  };
  return axios(url, params)
    .then((response) => {
      return {
        ok: true,
        message: 'succes',
        response: response,
      };
    })
    .catch((error) => {
      return {
        ok: false,
        message: 'Algo salio',
        response: error,
      };
    });
};
