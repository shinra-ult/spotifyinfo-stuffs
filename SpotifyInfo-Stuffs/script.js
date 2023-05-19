// Spotify API credentials
const clientId = '36dbfc21b49647da8ab6444de0fa571d';
const redirectUri = 'https://shinra-ult.github.io/spotifyinfo-stuffs';
const scopes = ['user-top-read'];

// Spotify API endpoints
const authorizeEndpoint = 'https://accounts.spotify.com/authorize';
const apiEndpoint = 'https://api.spotify.com/v1';

// DOM elements
const loginBtn = document.getElementById('login-btn');
const genreChartContainer = document.getElementById('genre-chart');
const songsList = document.getElementById('songs-list');

// Event listener for login button
loginBtn.addEventListener('click', () => {
    authenticateWithSpotify();
});

// Function to authenticate with Spotify
function authenticateWithSpotify() {
    // Generate and open the authorization URL
    const authUrl = `${authorizeEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;
    window.location = authUrl;
}

// Function to retrieve user's top genres from Spotify API
function getTopGenres(accessToken) {
    // Make API request to fetch top genres
    // Use the access token to authorize the request
    // Handle the response and update the UI
    // Implement this part using the Spotify API documentation
}

// Function to retrieve user's top songs from Spotify API
function getTopSongs(accessToken) {
    // Make API request to fetch top songs
    // Use the access token to authorize the request
    // Handle the response and update the UI
    // Implement this part using the Spotify API documentation
}

// Function to display the genre pie chart using a charting library
function displayGenreChart(genres) {
    // Implement this part using a charting library of your choice
}

// Function to display the top songs list
function displayTopSongs(songs) {
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${song.name} - ${song.artist}`;
        songsList.appendChild(listItem);
    });
}

// Check if the access token is available in the URL fragment
const accessToken = window.location.hash
    .substring(1)
    .split('&')
    .reduce((result, item) => {
        const parts = item.split('=');
        result[parts[0]] = parts[1];
        return result;
    }, {})['access_token'];

// If access token is available, fetch user data
if (accessToken) {
    loginBtn.style.display = 'none';
    getTopGenres(accessToken);
    getTopSongs(accessToken);
}