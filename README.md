<!-- ABOUT THE PROJECT -->
# About The Project
![Screenshot 2023-04-30 at 5 02 32 PM](https://user-images.githubusercontent.com/115289871/235350720-cbfa07ff-8cd1-4691-962c-bc17e87413b9.png)





In this Project, I've built a RESTful API which consists of ready made database



Use the `README.md` to get started.




# Built With

The Tech Stacks use are:

<div align="center">
<a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=mongodb,expressjs,nodejs,js,ejs" />
</a>
</div>




<!-- GETTING STARTED -->
# Getting Started

To get started, create a file called app.js and import all the required modules in it. In app.js, we'll be targetting routes at two places firstly at all the articles and another at some specific articles. With the help of MongoDB, we'll create a mongoose Schema which will help in storing information to the database.


* modules

  ```sh
  const express = require('express');
  const mongoose = require('mongoose');
  const ejs = require('ejs');
  const bodyParser = require('body-parser');
  ```

* ejs connectivity

  ```sh
  app.set("view engine","ejs")
  ```
  
* Using Body Parser

  ```sh
  app.use(bodyParser.urlencoded({extended: true}));
  ```

## Prerequisites

To begin with our Project, we'll need to install some npm packages like express, mongoose, body-parser, and ejs using the command given below. 


* npm

  ```sh
  npm install express mongoose ejs body-parser
  ```
  
  
* To ease the process of development, we'll install nodemon (Make sure you already have nodemon installed in your system, if not then [visit here](https://nodemon.io/)).

  ```sh
  npm i nodemon
  ```


* Re- Populate Database

  ```sh
  npm install express mongoose ejs body-parser
  ```

<!-- CONTACT -->
# Contact

Your Name - Shivank Kapur - shivankkapur2004@gmail.com

Project Link: 
