Social Media Webapp


Through this website we'll learn about 
```
. ReactJS
. CSS
. Controlled Input Forms
. Redux
. React router v6
. MongoDB
. ExpressJs
. NodeJs
. JWT Authentication
```

Client Side

```
- npx create-react-app client
- npm i redux redux-thunk react-redux
- npm i axios
- npm i react-router-dom
- npm i @mantine/core
- npm i timeago.js
- npm i react-input-emoji


- npm i socket.io-client 


```

Changing "package.json" in client

```
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@iconscout/react-unicons": "^1.1.6",
    "@mantine/core": "^4.2.7",
    "@mantine/hooks": "^4.2.7",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.27.2",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "redux": "^4.2.0",
    "redux-thunk": "^2.4.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```

to

```
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:5000",
  "dependencies": {
    "@iconscout/react-unicons": "^1.1.6",
    "@mantine/core": "^4.2.7",
    "@mantine/hooks": "^4.2.7",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.27.2",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "redux": "^4.2.0",
    "redux-thunk": "^2.4.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}


```

Server Side 

```
- mkdir server
- cd server
- npm init
- npm i express
- npm i mongoose
- npm i body-parser
- npm i nodemon
- npm i bcrypt
- npm i cors
- npm i jsonwebtoken
```

Changing "package.json" in server

```
  {
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js", 
  "scripts": {
      "teststart": "echo \"Error: no test specified\" && exit 1"
   },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "mongoose": "^6.3.5",
    "nodemon": "^2.0.16"
  }
}


```
to

```
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",  
  "type": "module",
  "scripts": {
    "start": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "mongoose": "^6.3.5",
    "nodemon": "^2.0.16"
  }
}

```


Socket Side 

```
- npm init
- npm i socket.io nodemon

```

Changing "package.json" in socket

```
{
  "name": "socket",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "nodemon": "^2.0.18",
    "socket.io": "^4.5.1"
  }
}

```

to

```
{
  "name": "socket",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "nodemon": "^2.0.18",
    "socket.io": "^4.5.1"
  }
}


```