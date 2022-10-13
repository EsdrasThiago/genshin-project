const TIMEOUT = 1500;
const SUCCESS_STATUS = 'OK';

const simulateRequest = (response) => (callback) => {
    setTimeout(() => {
      callback(response);
    }, TIMEOUT);
  };

export const addUser = (user) => new Promise((resolve) => { 
    localStorage.setItem('user', user);
    simulateRequest(SUCCESS_STATUS)(resolve);
});

export const getUser = () => new Promise((resolve) => {
    const user = localStorage.getItem('user');
    simulateRequest(user)(resolve);
})