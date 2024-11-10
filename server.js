const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Sample products data
const products = [
  { id: 1, name: "Apple", price: 1.99, image: "apple.jpg" },
  { id: 2, name: "Banana", price: 0.99, image: "banana.jpg" },
  { id: 3, name: "Orange", price: 1.29, image: "orange.jpg" },
  // Add more products here as needed
];

// Route to serve the homepage (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route to serve the About Us page (aboutus.html)
app.get('/aboutus.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'aboutus.html'));
});

// Route to serve the Contact Us page (contactus.html)
app.get('/contactus.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contactus.html'));
});

// Route to serve the Help page (help.html)
app.get('/help.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'help.html'));
});

// Route to serve the Logout page (logout.html)
app.get('/logout.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'logout.html'));
});

// API route to return products data as JSON
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
