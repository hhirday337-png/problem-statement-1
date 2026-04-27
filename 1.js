
async function fetchUsers() {
  try {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    
    const data = await response.json();

    
    displayUsers(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


function displayUsers(users) {
  const container = document.getElementById("userContainer");

  users.forEach(user => {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>City: ${user.address.city}</p>
      <hr>
    `;
    container.appendChild(userDiv);
  });
}


fetchUsers();
