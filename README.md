[![csivit][csivitu-shield]][csivitu-url]
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/email-service-backend/repo">
    <img src="https://csivit.com/images/favicon.png" alt="Logo" width="80">
  </a>

  <h3 align="center">Email-Service</h3>

  <p align="center">
    A microservice using to send bulk emails.
    <br />
    <a href="https://github.com/csivitu/repo"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/csivitu/repo">View Demo</a>
    ·
    <a href="https://github.com/csivitu/repo/issues">Report Bug</a>
    ·
    <a href="https://github.com/csivitu/repo/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contributors](#contributors-)



<!-- ABOUT THE PROJECT -->
## About The Project

**Email-Service** is a microservice built using [Molecular](https://moleculer.services/docs/0.14/index.html) to send bulk emails using [sendgrid](https://moleculer.services/docs/0.14/index.html) and/or [mailgun](https://www.mailgun.com/) API keys.


### Built With

* [Node](https://nodejs.org/en/)
* [Molecular](https://www.npmjs.com/package/moleculer)
* [mailgun-js](https://www.npmjs.com/package/mailgun-js)
* [@sendgrid/mail](https://www.npmjs.com/package/@sendgrid/mail)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/email-service-backend/repo.git
```
2. Install NPM packages
```sh
npm install
```

#### Using yarn

```sh
yarn install
```

**Note:**  If installing the packages with npm you get errors use yarn to install them.



<!-- USAGE EXAMPLES -->
## Usage

To run this project locally, you can run the following command. 

#### Using npm
```sh
npm start
```
#### Using yarn

```sh
yarn start
```

## API Endpoints

|Request Type| Route | Function |
|:-----------:|:------:|:---------:|
| POST | /email | Send email according to the body (see-below) of the request |

```json
{
  "to": "user1@domain1.com, user2@domain2.com",
  "from": "sender@domain.com",
  "html": "<h1>Hello</h1>",
  "text": "Hello",
  "auth": "SecretKeyToAuthenticate"
}
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/email-service-backend/repo/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

You are requested to follow the contribution guidelines specified in [CONTRIBUTING.md](./CONTRIBUTING.md) while contributing to the project :smile:.

<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[csivitu-shield]: https://img.shields.io/badge/csivitu-csivitu-blue
[csivitu-url]: https://csivit.com
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/csivitu/repo/issues

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://alias-rahil.github.io/"><img src="https://avatars2.githubusercontent.com/u/59060219?v=4" width="100px;" alt=""/><br /><sub><b>Rahil Kabani</b></sub></a><br /><a href="https://github.com/csivitu/email-service-backend/commits?author=alias-rahil" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ashikka"><img src="https://avatars1.githubusercontent.com/u/58368421?v=4" width="100px;" alt=""/><br /><sub><b>ashikka</b></sub></a><br /><a href="https://github.com/csivitu/email-service-backend/commits?author=ashikka" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!