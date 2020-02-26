# Dormitory management
![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)
# Description
The Program is to manage the dormitory by saving the student go-in/go-out history, so that parent and dormitory manager know the student, and notify via Facebook Messenger and Gmail.

[TODO] add demo image
# Introduction and Motivation
We are student at Tan Tao University, school of engineering. Our University has a school for talented high school student. For security and education purpose, every time student go out of the dorm, for buying food or drink, we must record the history. Who go out, when and for what.

Currently, the history is recorded by dormitory administrator, `by paper`. It is a complex protocol and very hard to connect to student family, for notifying their children status.

Thus, we decided to carry out this project.

Firstly, we install a camera system at the dormitory entrance, which will observe who is going in or out of the dormitory. The camera stream the video to the server. We use face `recognition` to know who is in the frame, go in or out, and then `save` to the database with a timestamp, along with send a message to the student parents to `notify` them their children behavior.

At the present, the rule of the dormitory is that every student can go out before 7 pm, after that every student must be inside of the dorm for studying. So, if any student did not return back to the dorm after 7 pm, the system would send an `alert` to the administrator and the parent.

If a student have something important and have to go out of the dorm after 7 pm, the student can `register` on a form by using Facebook Messenger and after approval of the administrator and parents, they can go. The form and the history of the approval also need to be saved into the database

# Technology used
## Face Recognition
## Web
### Nodejs
Both server side and client side server run on Nodejs, a JavaScript runtime environment, so we need to download and install it from the website https://nodejs.org/en/
### Nestjs
Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).
### Angular
Angular is an app-design framework and development platform for creating efficient and sophisticated single-page apps.
### Google OAuth2
### Facebook Messenger API
## Database

# Quick Installation
## Clone the repository
```sh
cd <path to folder to save the repo>
git clone https://github.com/hothienlac/dorm
```
## Face Recognition
### Python
### Install Packages
## Web
### Nodejs
Go following url to download Nodejs: https://nodejs.org/en/download/
After that, we run the installation file and follow the instruction.
To check if Node and Node Package Manager are installed, run command
```sh
node --version
npm --version
```
To update npm to latest version, run
```sh
npm install -g npm@latest
```
Flag -g mean the package is to installed globaly, if not, it would installed in the current folder
### Nestjs Cli (for development, skip if just deploy purpose)
```sh
npm install -g @nest/cli
```
### Angular Cli (for development, skip if just deploy purpose)
```sh
npm install -g @angular/cli
```
### Install dependency
The dependencies detail is saved in `package.js`
To install these, run
```sh
npm install
```
### Start Back End Server
For developing, run
```sh
ng serve api
```
For production, run
```sh
ng build --prod api
node dist/apps/api/main
```
### Start Front End Server
For developing, run
```sh
ng serve dorm
```
For production, run
```sh
ng build --prod dorm
lite-server --baseDir="dist/apps/dorm"
```
### Configurate project
### Deploy
# Contributing
Please read [CONTRIBUTING.md]() for details on our code of conduct, and the process for submitting pull requests to us.
# Credits
### This is a project we do at [Tan Tao University](http://ttu.edu.vn/), [School of Engineering](http://soe.ttu.edu.vn/), so we would say thank to all of my instructors who help us to complete this project
* [Cao Tien Dung Ph.D](https://scholar.google.com/citations?hl=vi&user=uzuvTBQAAAAJ)
* [Truong Huu Tram Ph.D](https://scholar.google.com/citations?user=B60btb4AAAAJ&hl=vi&oi=ao)
* [Nguyen Xuan Ha Ph.D](https://www.scopus.com/authid/detail.uri?authorId=25931009800&fbclid=IwAR3jNQcxZgAjEddXxCxpiPctNb-8H7s2G3gtWMF4jNf75JTOwwflD9YiIpU)
* [Tran Vu Khanh Assoc. Prof.](https://scholar.google.com/citations?user=ThT4zacAAAAJ&hl=vi&oi=ao)
### We, student who work onthe project:
* [Ho Thien Lac](https://github.com/hothienlac)
* [Pham Thai Dien](https://github.com/dienthaipham103)
* [Duong Huy Khoi](https://github.com/duonghuykhoi)
# Lisence
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
# ===============

# Dillinger

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

# New Features!

  - Import a HTML file and watch it magically convert to Markdown
  - Drag and drop images (requires your Dropbox account be linked)


You can also:
  - Import and save files from GitHub, Dropbox, Google Drive and One Drive
  - Drag and drop markdown and HTML files into Dillinger
  - Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Tech



Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Breakdance](https://breakdance.github.io/breakdance/) - HTML to Markdown converter
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version} .
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
