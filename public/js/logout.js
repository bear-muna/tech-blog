// Sends request to back end to logout
const logout = async (e) => {
  e.preventDefault();
  console.log("TESTING");
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};
  
  document.querySelector('#logout').addEventListener('click', logout);