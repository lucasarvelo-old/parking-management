# Parking Management

### API to manage access to a parking lot with a simple front-end

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of Contents

- [Installation](#installation)
- [Docker](#docker)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

---

## Installation

- Install MongoDB Community Edition. [Download your version](https://www.mongodb.com/download-center/community) / [Learn how to install MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
- Install Node.js [Download your version](https://nodejs.org/en/download/)

### Clone

- Clone this repo to your local machine using `https://github.com/lucasarvelo/parking-management.git`

```shell
$ git clone https://github.com/lucasarvelo/parking-management.git
```

### Setup

- `npm install` to install all the dependencies needed it
- Copy the content of .env.example into a new file .env

```shell
$ npm install
$ cp .env.example .env
```

> you can customize the app changing the environmental variables in the new .env file

### Run

- `npm start` and visit [http://localhost:3000/](http://localhost:3000/)
- Do not forget to change the port 3000 if you specified a different PORT variable in .env file
- If you want to run the app on development mode using nodemon use `npm run dev` instead

```shell
$ npm start

//run the app with nodemon
$ npm run dev
```

### Tests

- `npm test` lunch jest to run unit-tests and integration test

```shell
$ npm test
```

### Docker

- Install Docker [Download Docker](https://www.docker.com/products/docker-desktop)
  <br>

- Build the Docker image

```shell
$ docker-compose build
```

<br>

- Run Docker container

```shell
$ docker-compose up
```

> Environment variable DB_URL for MongoDB is overwriting in docket-compose.yml to mongodb://mongo

---

## Usage

- Visit [http://localhost:3000/](http://localhost:3000/).
- Generate a new ticket pressing the green button `Press for Ticket` on the New Ticket area.
- Check how much a ticket own when filling up the ticket number and click on the button `Get Fee` on the Ticket Status area.
- Pay for a ticket filling up the ticket number and a valid credit card number and click on the button `Pay`.
- Every action gives you a feedback message in the bottom card area.
- If the parking is full, you won't be able to get a new ticket until another ticket is pay.

## Documentation

> I recommend using this `Postman` collection to test the API. \
> \
> [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/43f14242f11238bc11d9) \
> [Download Postman](https://www.postman.com/downloads/)

### List of API endpoint

<br>

| Endpoint                 | Method |           Payload            |        Action         | Response                                     |
| ------------------------ | :----: | :--------------------------: | :-------------------: | -------------------------------------------- |
| /                        |  GET   |                              | Render index.pug view | HTML                                         |
| /tickets                 |  POST  |              {}              | Generate a new ticket | JSON / New ticket number                     |
| /tickets/:ticket_number  |  GET   | { creditCardNumber: Number } |     Calculate fee     | JSON / Fee amount with two decimal precision |
| /payments/:ticket_number |  POST  | { creditCardNumber: Number } |        Pay fee        | JSON / Message                               |

<br>

### List of messages for different application states

<br>

| Endpoint                 | State                 | Message                    |
| ------------------------ | --------------------- | -------------------------- |
| /tickets                 | Parking Full          | Parking Full               |
| /tickets/:ticket_number  | Ticket doesn't exist  | Ticket not found!          |
| /tickets/:ticket_number  | Ticket is paid        | Ticket already paid!       |
| /payments/:ticket_number | Invalid Credit Card # | Invalid Credit Card Number |
| /payments/:ticket_number | Ticket doesn't exist  | Ticket not found!          |
| /payments/:ticket_number | Ticket is paid        | Ticket already paid!       |

### Technologies and Dependencies Use

|  Project  |                 Use For                  |                                      More Info                                       |
| :-------: | :--------------------------------------: | :----------------------------------------------------------------------------------: |
|  Node.js  |            JavaScript runtime            |             [https://nodejs.org/en/about/](https://nodejs.org/en/about/)             |
|  Express  |        Web application framework         |                   [https://expressjs.com/](https://expressjs.com/)                   |
|  MongoDB  |           Distributed database           |                 [https://www.mongodb.com/](https://www.mongodb.com/)                 |
| Mongoose  |         MongoDB object modeling          |                  [https://mongoosejs.com/](https://mongoosejs.com/)                  |
|    Pug    |             Template engine              |                       [https://pugjs.org/](https://pugjs.org/)                       |
|   Jest    |            Testing Framework             |                       [https://jestjs.io/](https://jestjs.io/)                       |
| Supertest | Library for testing node.js HTTP servers | [https://github.com/visionmedia/supertest](https://github.com/visionmedia/supertest) |

> I also use card-validator, cookie-parser, debug, dotenv, http-errors, mongoose-sequence and no-demon, check [package.json](package.json) to learn more about the dependencies.

---

## Contributing

> Contributions are welcome

### Step 1

- **Option 1**

  - Fork this repo! 🍴

- **Option 2**
  - Clone this repo to your local machine using `https://github.com/lucasarvelo/parking-management.git` 👯

### Step 2

- **Happy Coding** 🔨🔨🔨

### Step 3

- Create a new pull request 🔃

---

## Support

Reach out to me at one of the following places!

- Website at <a href="http://lucasarvelo.com" target="_blank">`lucasarvelo.com`</a>
- Twitter at <a href="http://twitter.com/lucasarvelo" target="_blank">`@lucasarvelo`</a>
- email at <a href="mailto:lucasarvelo@gmail.com">lucasarvelo@gmail.com</a>

---

## License

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

- **[Apache 2.0 license](https://opensource.org/licenses/Apache-2.0)**
- Copyright 2020 © <a href="https://lucasarvelo.com" target="_blank">Lucas Arvelo</a>.
