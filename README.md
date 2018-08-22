Welcome to Modern Boilerplate application
=========================================

UW boilerplate designed for a modern-ish Django stack. CSS framework agnostic. Optimized for critical rendering path. Webpack for bundling the JS framework of your choice.

System Requirements
-------------------
* Python (3+)
* Django (2+)
* Docker

What's Here
-----------

This application includes:

* README.md - this file
* sampleproj/ - this directory contains Django project settings used for Docker
* boilerplate/ - this directory contains your Django boilerplate application

Setup
-----

1. Clone the repository

        $ git clone https://github.com/charlon/scout-modern.git
        $ cd scout-modern

Node
----

2. Install the node dependencies for the React Demo.

        $ npm install

Webpack
-------

3. Start the webpack "watch mode". This will leave the webpack compiler running
   and compile bundles automatically when changes are made to the source files.
   You'll need to restart this command if you make changes to the webpack config.

        $ ./node_modules/.bin/webpack --config webpack.config.js --watch

Docker
------

4. Docker/Docker Compose is used to containerize your local build environment
   and deploy it to a local container so you can view your application. Docker
   is configured to build an empty 'project' and copy the settings files located
   in the 'docker' directory.

        $ docker-compose up

5. In the case that changes are made to the Dockerfile or docker-compose.yml file,
   you will need to rebuild the image. In this case, 'app' is the name of the
   Docker image for the Django project.

        $ docker-compose build app
        $ docker-compose up

Django Bakery
-------------

6. Bakery builds a static "flat" website which can be used in conjunction with
   other frameworks (if not using Django).

Download: zip file

View the application
--------------------

Demo: http://localhost:8000/
