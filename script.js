async function fetchUsers() {
  const usersContainer = document.getElementById("users");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const users = await response.json();

    users.forEach(user => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");

      userDiv.innerHTML = `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
      `;

      usersContainer.appendChild(userDiv);
    });
  } catch (error) {
    usersContainer.textContent = "Error: " + error.message;
    usersContainer.style.color = "red";
  }
}

// Run the function after page loads
window.addEventListener("DOMContentLoaded", fetchUsers);
