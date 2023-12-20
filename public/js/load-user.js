import { getAuth} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { app, database } from "./config"; // Assuming this is the correct path to your config.js file
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const auth = getAuth(app);

// Function to retrieve users from the database and populate the table
function getUsers() {
  const tableBody = document.querySelector("#dataTable tbody");

  // Retrieve the "users" node from the database
  const usersRef = ref(database, "users");

  onValue(usersRef, (snapshot) => {
    const users = snapshot.val();

    // Clear existing table rows
    tableBody.innerHTML = "";

    // Iterate over each user
    for (const userId in users) {
      const user = users[userId];

      // Create a new row in the table
      const row = document.createElement("tr");

      // Create table cells and populate them with user data
      let firstNameCell = document.createElement("td");
      firstNameCell.textContent = user.firstName;
      row.appendChild(firstNameCell);

      let lastNameCell = document.createElement("td");
      lastNameCell.textContent = user.lastName;
      row.appendChild(lastNameCell);

      let editCell = document.createElement("td");
      let editLink = document.createElement("a");
      editLink.href = `edit-user.html?id=${userId}`; // Edit button/link URL with user ID
      editLink.textContent = "Edit";
      editCell.appendChild(editLink);
      row.appendChild(editCell);
      
      // Append the row to the table body
      tableBody.appendChild(row);
    }
  });
}

// Call the function to populate the table when the page loads
window.addEventListener("DOMContentLoaded", getUsers);