<!-- ABOUT THE PROJECT -->
# About The Project
![Screenshot 2023-04-30 at 5 02 32 PM](https://user-images.githubusercontent.com/115289871/235350720-cbfa07ff-8cd1-4691-962c-bc17e87413b9.png)





In this Project, I've built a RESTful API which consists of ready made database, and has been mentioned below. With the help of Express.js Routes this project was made quite easily. 



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


* Re-Populate Database

  ```sh
    {
        "_id" : "5c18e1892998bdb3b3d355bf",
        "title" : "REST",
        "content" : "REST is short for REpresentational State Transfer. IIt's an architectural style for designing APIs."
    }


    {
        "_id" : ObjectId("5c139771d79ac8eac11e754a"),
        "title" : "API",
        "content" : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
    }


    {
        "_id" : ObjectId("5c1398aad79ac8eac11e7561"),
        "title" : "Bootstrap",
        "content" : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
    }


    {
        "_id" : ObjectId("5c1398ecd79ac8eac11e7567"),
        "title" : "DOM",
        "content" : "The Document Object Model is like an API for interacting with our HTML"
    }


    {
        "_id" : "5c18f35cde40ab6cc551cd60",
        "title" : "Jack Bauer",
        "content" : "Jack Bauer once stepped into quicksand. The quicksand couldn't escape and nearly drowned.",
        "__v" : 0
    }
  ```

<!-- CONTACT -->
# Contact

Your Name - Shivank Kapur - shivankkapur2004@gmail.com

Project Link: 
