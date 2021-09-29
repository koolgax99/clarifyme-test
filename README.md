# Clarifyme Test

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/fo-real.svg)](https://forthebadge.com)

---

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#dependencies">Dependencies</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#how-to-use">How To Use</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Clarify Me is a simple application to book a slot with the mentor and chat between two users.

### Built With

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com)
- [MongoDB](https://www.mongodb.com/cloud)
- [SocketIO](https://socket.io/)
- [JWT](https://jwt.io/)

<!-- GETTING STARTED -->

# Getting Started

### Dependencies:

- Node-
  Go to [official Node.js website](https://nodejs.org/) and download the installer.
- MongoDB url-
  Visit [MongoDB](https://www.mongodb.com/)

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

    $ git clone https://github.com/koolgax99/clarifyme-test.git
    $ cd clarifyme-test
    $ npm install

<!-- USAGE EXAMPLES -->

## Running

    nodemon
     //or
    node app.js

---

    After getting the endpoints please specify the following in a .env file in the root directory.
    MONGO_URI = "" // Mongo cluster URI
    SECRET = "" // A string used to sign the JWT for verification , it can be any string but shouldn't be shared outside organization to prevent unauthorized access.

---

    For the client side, split the terminal and navigate to the client folder and then enter the command
    npm start

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.
