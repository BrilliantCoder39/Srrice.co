import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [shortUrl, setShortUrl] = useState('https://maps.app.goo.gl/c9DR7P8iW5wFRQhA7');
  const [expandedUrl, setExpandedUrl] = useState('');


  const apiKey = 'AIzaSyBuL4FuumNhtCmkLqHMlVlHRSTbKMeTLvU';

  const handleExpandUrl = () => {

    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?key=${apiKey}&placeid=${encodeURIComponent(shortUrl)}`;


    axios.get(apiUrl)
      .then(response => {

        const expandedUrl = response.data.result.url;
        setExpandedUrl(expandedUrl);
      })
      .catch(error => {
        console.error('Error fetching URL:', error);
      });
  };

  return (
    <div className="App">
      <h1>Google Maps URL Expander</h1>
      <div>
        <label htmlFor="shortUrl">Short URL:</label>
        <input
          type="text"
          id="shortUrl"
          value={shortUrl}
          onChange={(e) => setShortUrl(e.target.value)}
        />
        <button onClick={handleExpandUrl}>Expand URL</button>
      </div>
      {expandedUrl && (
        <div>
          <p>Expanded URL:</p>
          <a href={expandedUrl} target="_blank" rel="noopener noreferrer">{expandedUrl}</a>
        </div>
      )}
    </div>
  );
};

export default App;
