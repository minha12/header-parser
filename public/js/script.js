// Configure API base URL
const BASE_URL = window.location.hostname === 'localhost' 
  ? '' 
  : 'http://localhost:3000';

async function testAPI() {
  const result = document.getElementById('result');
  
  try {
    const response = await fetch(`${BASE_URL}/api/whoami`);
    const data = await response.json();
    result.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch (error) {
    result.innerHTML = `Error: ${error.message}`;
  }
}