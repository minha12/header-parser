# Request Header Parser Microservice

A simple Node.js/Express microservice that parses and returns HTTP request header information.

## Implementation Details

### Tech Stack
- Node.js
- Express.js
- JavaScript

### Project Structure
```
header-parser/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── index.html
├── server.js
├── package.json
└── .gitignore
```

## API Documentation

### Endpoint: GET /api/whoami

Returns client information parsed from request headers.

#### Response Format
```json
{
  "ipaddress": "String",
  "language": "String",
  "software": "String"
}
```

#### Implementation Details
- `ipaddress`: Extracted from `req.ip` or `req.headers['x-forwarded-for']`
- `language`: Obtained from the `accept-language` header
- `software`: Parsed from the `user-agent` header

#### Example Response
```json
{
  "ipaddress": "159.20.14.100",
  "language": "en-US,en;q=0.5",
  "software": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}
```

## Development

### Installation
```bash
npm install
```

### Running Locally
```bash
npm start
```
The server will start at `http://localhost:3000`

### Environment Variables
- `PORT`: Server port (default: 3000)

## Testing
Use the browser interface at the root URL or make direct API calls to `/api/whoami` to test the service.

## Error Handling
The service includes basic error handling for:
- Invalid routes (404)
- Server errors (500)

## Security Considerations
- CORS enabled for cross-origin requests
- Rate limiting implementation recommended for production
- Security headers configured using helmet middleware