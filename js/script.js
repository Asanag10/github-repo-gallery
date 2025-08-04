// Global variable to select the overview div where profile information will appear
const overview = document.querySelector(".overview");

// Global variable to select the unordered list to display the repos list
const reposList = document.querySelector(".repo-list");

// Global variable for GitHub username - replace with your actual GitHub username
const username = "Asanag10";

// Async function to fetch GitHub user data from the API
async function fetchUserData() {
  try {
    // Fetch data from GitHub API using template literal
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    // Resolve the JSON response
    const data = await response.json();
    
    // Log the response to console for inspection
    console.log(data);
    
    // Call the function to display user information
    displayUserInfo(data);
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

// Function to display the fetched user information on the page
function displayUserInfo(data) {
  // Create a new div with class "user-info"
  const userInfoDiv = document.createElement("div");
  userInfoDiv.classList.add("user-info");
  
  // Populate the div with user information using innerHTML
  userInfoDiv.innerHTML = `
    <figure>
      <img alt="user avatar" src="${data.avatar_url}" />
    </figure>
    <div>
      <p><strong>Name:</strong> ${data.name || 'Not provided'}</p>
      <p><strong>Bio:</strong> ${data.bio || 'Not provided'}</p>
      <p><strong>Location:</strong> ${data.location || 'Not provided'}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>
  `;
  
  // Append the div to the overview element
  overview.append(userInfoDiv);
  
  // Call the function to fetch repos after displaying user info
  fetchRepos();
}

// Async function to fetch user repositories from the API
async function fetchRepos() {
  try {
    // Fetch repos from GitHub API with parameters for sorting and pagination
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    
    // Resolve the JSON response
    const repos = await response.json();
    
    // Log the response to console for inspection
    console.log(repos);
    
    // Call the function to display repo information
    displayRepos(repos);
  } catch (error) {
    console.error('Error fetching repos:', error);
  }
}

// Function to display information about each repo
function displayRepos(repos) {
  // Loop through each repo and create a list item
  repos.forEach(repo => {
    // Create a list item for each repo
    const listItem = document.createElement("li");
    listItem.classList.add("repo");
    
    // Create an h3 element with the repo name
    listItem.innerHTML = `<h3>${repo.name}</h3>`;
    
    // Append the list item to the repos list
    reposList.append(listItem);
  });
}

// Call the fetch function when the page loads
fetchUserData();