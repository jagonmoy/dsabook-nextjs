export const getLocalStorageusername = () => {
    if (typeof window !== 'undefined') {
        const username = localStorage.getItem('username');
        return username || '';
      }
    return '';
};
export const getUserStateFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const username = localStorage.getItem('loggedIn');
      if(username) return true ;
      else return false;
    }
    return false;
};
  