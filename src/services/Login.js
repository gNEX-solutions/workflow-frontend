const LoginData = (type, userData) => {
  const baseUrl = 'http://localhost:3000';

  return new Promise((resolve, reject) => {
    fetch(baseUrl + type, {
      method: 'POST',
      body: JSON.stringify(userData)
    })
      .then(responce => responce.json())
      .then(responceJson => {
        resolve(responceJson);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default LoginData;
