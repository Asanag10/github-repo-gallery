# GitHub Repo Gallery

A dynamic, interactive web application that displays GitHub user profiles and repositories using the GitHub API. Built with vanilla JavaScript, HTML, and CSS.

## 🌟 Live Demo

**[View Live Project](https://asanag10.github.io/github-repo-gallery/)**

## 📋 Features

### Profile Display
- Fetches and displays GitHub user profile information
- Shows profile photo, name, bio, location, and public repository count
- Clean, responsive design with modern styling

### Repository Gallery
- Displays all public repositories sorted by most recently updated
- Shows up to 100 repositories per page
- Interactive repository cards with hover effects

### Interactive Repository Details
- Click on any repository name to view detailed information
- Displays repository name, description, default branch, and programming languages
- Direct link to view the repository on GitHub
- Smooth navigation with back button functionality

### Dynamic Search
- Real-time search functionality to filter repositories by name
- Case-insensitive search with instant results
- Search box appears automatically when repositories load

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Interactive functionality and API integration
- **GitHub API** - Data fetching for user profiles and repositories
- **GitHub Pages** - Project hosting and deployment

## 🚀 JavaScript Features Implemented

### API Integration
- Async/await functions for GitHub API calls
- Error handling with try/catch blocks
- JSON data processing and manipulation

### Event Handling
- Event delegation using `matches()` method
- Click events for repository navigation
- Input events for real-time search filtering

### DOM Manipulation
- Dynamic content creation and insertion
- CSS class manipulation for show/hide functionality
- Template literals for HTML generation

### Data Processing
- Object iteration for programming languages
- Array methods for data filtering
- String manipulation for search functionality

## 📁 Project Structure

```
github-repo-gallery/
├── index.html          # Main HTML structure
├── css/
│   ├── normalize.css   # CSS reset
│   └── styles.css      # Custom styles
├── js/
│   └── script.js       # Main JavaScript functionality
└── README.md           # Project documentation
```

## 🔧 Setup and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Asanag10/github-repo-gallery.git
   ```

2. **Navigate to project directory**
   ```bash
   cd github-repo-gallery
   ```

3. **Update the username**
   - Open `js/script.js`
   - Change the `username` variable to your GitHub username:
   ```javascript
   const username = "YOUR_GITHUB_USERNAME";
   ```

4. **Open in browser**
   - Open `index.html` in your web browser
   - Or use a local server for development

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices

## 🎯 Learning Objectives Achieved

This project demonstrates proficiency in:
- **API Integration** - Working with RESTful APIs and handling asynchronous operations
- **JavaScript ES6+** - Modern JavaScript syntax and features
- **DOM Manipulation** - Dynamic content creation and event handling
- **Responsive Design** - Mobile-first approach and cross-device compatibility
- **Git Workflow** - Version control and GitHub Pages deployment
- **Problem Solving** - Implementing complex interactive features

## 🌐 API Usage

This project uses the GitHub REST API v3:
- **User Endpoint**: `https://api.github.com/users/{username}`
- **Repositories Endpoint**: `https://api.github.com/users/{username}/repos`
- **Languages Endpoint**: `https://api.github.com/repos/{username}/{repo}/languages`

### Rate Limiting
- GitHub API allows 60 requests per hour for unauthenticated requests
- The application is optimized to minimize API calls

## 🎨 Design Features

- **Modern UI** - Clean, professional interface design
- **Interactive Elements** - Hover effects and smooth transitions
- **Color Scheme** - Consistent purple theme matching GitHub branding
- **Typography** - Professional fonts (Open Sans, Oswald)
- **Icons** - Font Awesome icons for enhanced visual appeal

## 🔮 Future Enhancements

Potential features for future development:
- User authentication for higher API rate limits
- Repository filtering by programming language
- Star and fork count display
- Repository creation date information
- Pagination for users with many repositories
- Dark/light theme toggle

## 👨‍💻 Author

**Asana Grigsby**
- GitHub: [@Asanag10](https://github.com/Asanag10)
- Location: Houston, TX

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- GitHub API for providing comprehensive repository data
- Font Awesome for icons
- Google Fonts for typography
- GitHub Pages for free hosting

---

*Built as a capstone project demonstrating modern web development skills and GitHub API integration.*
