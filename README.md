# NodeJS Mailserver Validation

A NodeJS mailserver component used to validate mail server for incoming and outgoing mails. 

## Table of contents

* [Getting started](#getting-started)
* [Features](#features)
* [Usage](#usage)
* [Want to Contribute?](#want-to-contribute)
* [Need Help / Support?](#need-help)
* [Collection of Other Components](#collection-of-components)
* [Changelog](#changelog)
* [Credits](#credits)
* [License](#license)
* [Keywords](#keywords)

## Getting started

Install the npm package:

``` bash
npm install nodejs-weblineindia-mailserver-validation
#OR
yarn add nodejs-weblineindia-mailserver-validation
```

## Features

* This component verifies mail server for incoming and outgoing mails.

## Usage

import the component `nodejs-weblineindia-mailserver-validation` 

``` js
const mailserver = require('nodejs-weblineindia-mailserver-validation')
OR
import mailserver from 'nodejs-weblineindia-mailserver-validation'
```

Use `ValidateIncomingEmail` function to validate incoming mail server and `ValidateOutgoingEmail` function to validate outgoing mail server:

``` js
async function checkmail() {
    let incoming = await mailserver.ValidateIncomingEmail('imaps', 'imap.abc.com', 25, 'mymail@abc.com', 'password') // returns true/false
    let outcoming = await mailserver.ValidateOutgoingEmail('frommail@abc.com', 'tomail@abc.com', 'smtp.abc.com', 587, 'username', 'password') // returns true/false
}

checkmail()
```

### ValidateIncomingEmail function :

    This function have 5 following arguments :

* protocol: This has following option : 
    - 'pop/pop3/pop3s'
    - 'imap/imaps'
* host : Hosting server.
* port: Port number.
* username
* password

### ValidateOutgoingEmail function :

    This function have 6 following arguments :

* fromemail
* toemail
* host : Hosting server.
* port: Port number.
* username
* password

## Want to Contribute?

* Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
* [Fork it](http://help.github.com/forking/).
* Create new branch to contribute your changes.
* Commit all your changes to your branch.
* Submit a [pull request](http://help.github.com/pull-requests/).

-----

## Need Help? 

We also provide a free, basic support for all users who want to use this NodeJs Mailserver Validation component in their software project. In case you want to customize this Mailserver Validation component to suit your development needs, then feel free to contact our [NodeJS developers](https://www.weblineindia.com/hire-node-js-developer.html).

-----

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/communities.html).

------

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## Credits

nodejs-weblineindia-mailserver-validation is inspired by [mailx](https://www.npmjs.com/package/mailx)

## License

[MIT](LICENSE)

[mit]: https://github.com/miguelmota/is-valid-domain/blob/e48e90f3ecd55431bbdba950eea013c2072d2fac/LICENSE

## Keywords

nodejs-weblineindia-mailserver-validation, nodejs-mailserver-validation, mailserver-validation, mailserver, nodejs, node-component, nodecomponent, node
