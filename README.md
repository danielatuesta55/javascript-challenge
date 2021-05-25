# Javascript Project 
- - -
## Intention of this Repository

This Repository has been made to submit the project assignment for our Data Science Bootcamp at Northwestern University. 

JavaScrip/Challenge

Student: Jorge Daniel Atuesta
- - -
### Inside of this repository

In this repository, the reader will encounter my solution to the homework assignment Web desing challange. The repository is organized in folders and a README.md (The file you are currently reading). Here is the list of the folders and their contents so you can navigate through them.

I hope you find my work not only to be complete but to display all the knowledge learned throughout this portion of the Data Science Bootcamp at Northwestern University.

1. **Images**: Inside this folder you will find the images for the instructions provided by the institution. *You can skip this folder if you want*.
2. **Level_1**: Inside this folder, you will have the chance to access my code for the assignment. I encourage you to take a look inside as you will find the solution to the project. Here are what's inside:

* *static*: You will find my CSS style sheet, app.js (code for java to run) and images that I created and or used for my page.
* *index.html*: This is the index.html file to run my webpage. 
3. **Level_2**: Inside this folder you will find the solution to the second level challange for the project. The idea was to be able to have several filters working. 
   
4. **README.md**: it's the current file you are reading. I strongly suggest navigating through it and look at the project's objective solution.

I hope you find my work not only to be complete but to display all the knowledge learned throughout this portion of the Data Science Bootcamp at Northwestern University.
- - -
## JavaScript Challenge

### Project's Aim

#### Automatic Table and Date Search (Required)

* Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page!).

* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

  * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

#### Multiple Search Categories (Optional)

* Complete all of Level 1 criteria.

* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`


- - -
#### Dataset used for the Project

* [UFO Sightings Data](StarterCode/static/js/data.js)

- - -
### Project step by step 


Step 1: verify the data by printing the data on the console 

Step 2: Using D3 select the tag "body" from html doc

Step 3: Create a function that will build the table 

Step 3.1: Replaces the HTML with a space. 
Step 3.2: Create a checkpoint on the console

tep 3.3: Create foreach loop using arrow to paste values inside of the table 

Step 3.4: Console log message stating table has been built check for errors inside console log.

Step 4: Create second function to filtedr the data by the date and display the filtered data on the table.

Step 4.1  Prevent the page from refreshing

Step 4.2 : Grab the value from the date time search option. The id acording to the html file is #datetime.

Step 4.3: Console log the input value to double check.

Step 4.4: Create filter data according to user input value

Step 4.5 Create a new varible with the array of datas to use in the if statement

Step 4.6: Creat conditional statement usin If

Step 5: Create a listner for the button.

Step 6: Make the function buildTable run again with original data.

- - -
## References

Littel, T. (2021, May 17). Tutoring session May 17th 2021. (J. D. Atuesta, Interviewer)

- - -
## Assignment instructions provided by Northwestern Data Science Bootcamp

## JavaScript Homework - JavaScript and DOM Manipulation

### Background

WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at `ALIENS-R-REAL` have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

That's why we are hiring you. We need you to write code that will create a table dynamically based upon a [dataset we provide](StarterCode/static/js/data.js). We also need to allow our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.

You can handle this... right? The planet Earth needs to know what we have found!

### Your Task

#### Before You Begin

1. Create a new repository for this project called `javascript-challenge`. **Do not add this homework to an existing repository**.

2. Clone the new repository to your computer.

3. Inside your local git repository, create a directory for the Javascript challenge. Use the folder names to correspond to the challenges: **UFO-level-1** and **UFO-level-2**.

4. Add your **html** files to this folder as well as your static folder containing your javascript. This will be the main script to run for analysis.

5. Push the above changes to GitHub or GitLab.

6. Ensure your repository has regular commits (i.e. 20+ commits) and a thorough README.md file

#### Level 1: Automatic Table and Date Search (Required)

* Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page!).

* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

  * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

#### Level 2: Multiple Search Categories (Optional)

* Complete all of Level 1 criteria.

* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

- - -

#### Dataset

* [UFO Sightings Data](StarterCode/static/js/data.js)

- - -

### Rubric

[Unit 14 Rubric - JavaScript Homework - JavaScript and DOM Manipulation](https://docs.google.com/document/d/1KWNS-xCwYBONjvlrIz4zyGkcUu0mP2kpMQh6qj0hKf8/edit?usp=sharing)

- - -

**Good luck!**

- - -

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
