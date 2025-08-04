// Global variable to select the overview div where profile information will appear
const overview = document.querySelector(".overview");

// Global variable to select the unordered list to display the repos list
const reposList = document.querySelector(".repo-list");

// Global variable to select the section where all repo information appears
const reposSection = document.querySelector(".repos");

// Global variable to select the section where individual repo data will appear
const repoDataSection = document.querySelector(".repo-data");

// Global variable to select the Back to Repo Gallery button
const backToReposButton = document.querySelector(".view-repos");

// Global variable to select the filter input (search box)
const filterInput = document.querySelector(".filter-repos");

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
  // Show the filter input (search box)
  filterInput.classList.remove("hide");
  
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

// Event listener for clicking on repo names
reposList.addEventListener("click", function(e) {
  // Check if the clicked element is an h3 (repo name)
  if (e.target.matches("h3")) {
    // Get the repo name from the clicked element
    const repoName = e.target.innerText;
    console.log(repoName);
    
    // Fetch and display specific repo information
    getRepoInfo(repoName);
  }
});

// Async function to get specific repo information
async function getRepoInfo(repoName) {
  try {
    // Fetch specific repo information from GitHub API
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
    const repoInfo = await response.json();
    console.log(repoInfo);
    
    // Fetch languages for this repo
    const fetchLanguages = await fetch(repoInfo.languages_url);
    const languageData = await fetchLanguages.json();
    console.log(languageData);
    
    // Create array of languages from the language data object
    const languages = [];
    for (const language in languageData) {
      languages.push(language);
    }
    console.log(languages);
    
    // Display the specific repo information
    displayRepoInfo(repoInfo, languages);
  } catch (error) {
    console.error('Error fetching repo info:', error);
  }
}

// Function to display specific repo information
function displayRepoInfo(repoInfo, languages) {
  // Clear the repo-data section
  repoDataSection.innerHTML = "";
  
  // Create a new div with repo information
  const repoDiv = document.createElement("div");
  repoDiv.innerHTML = `
    <h3>Name: ${repoInfo.name}</h3>
    <p>Description: ${repoInfo.description || 'No description available'}</p>
    <p>Default Branch: ${repoInfo.default_branch}</p>
    <p>Languages: ${languages.join(", ") || 'None'}</p>
    <a class="visit" href="${repoInfo.html_url}" target="_blank" rel="noreferrer noopener">View Repo on GitHub!</a>
  `;
  
  // Append the div to the repo-data section
  repoDataSection.append(repoDiv);
  
  // Show the repo-data section and hide the repos section
  repoDataSection.classList.remove("hide");
  reposSection.classList.add("hide");
  
  // Show the back button
  backToReposButton.classList.remove("hide");
}

// Event listener for the Back to Repo Gallery button
backToReposButton.addEventListener("click", function() {
  // Show the repos section and hide the repo-data section
  reposSection.classList.remove("hide");
  repoDataSection.classList.add("hide");
  
  // Hide the back button
  backToReposButton.classList.add("hide");
});

// Event listener for the search input (dynamic filtering)
filterInput.addEventListener("input", function(e) {
  // Get the search text value
  const searchText = e.target.value;
  console.log(searchText);
  
  // Select all repo elements
  const repos = document.querySelectorAll(".repo");
  
  // Convert search text to lowercase for case-insensitive search
  const searchLower = searchText.toLowerCase();
  
  // Loop through each repo
  repos.forEach(function(repo) {
    // Get the repo name (innerText of the h3 element)
    const repoName = repo.querySelector("h3").innerText.toLowerCase();
    
    // Check if the repo name includes the search text
    if (repoName.includes(searchLower)) {
      // Show the repo if it matches
      repo.classList.remove("hide");
    } else {
      // Hide the repo if it doesn't match
      repo.classList.add("hide");
    }
  });
});

// Call the fetch function when the page loads
fetchUserData();