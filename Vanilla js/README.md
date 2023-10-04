# Text List Management Application
This project demonstrates a simple text list management application using HTML, CSS with BEM (Block Element Modifier) methodology, and JavaScript (vanilla).

## Table of Contents
1. Project Structure
2. Technologies Used
3. HTML Structure
4. CSS and BEM Methodology
5. JavaScript Class Structure

### 1.Project Structure
**index.html:**  Contains the structure of the webpage.   
**styles.css:** Defines the styles for the webpage using BEM methodology.   
**script.js:** Implements the JavaScript logic for the text list management.   

### 2.Technologies Used
**HTML:** Used for creating the structure of the webpage.   
**CSS:** Used for styling the webpage, following the BEM (Block Element Modifier) methodology.   
**JavaScript:** Vanilla JavaScript is used to implement the application logic.   

### 3.HTML Structure
The HTML file **(index.html)** contains a container (**div** with class **container**) that holds buttons for adding, deleting, and undoing actions, as well as an unordered list (ul with class list) to display the text entries.   

### 4.CSS and BEM Methodology
CSS (**styles.css**) is structured using the BEM (Block Element Modifier) methodology, providing a more organized and maintainable codebase. Each block or component in the HTML has corresponding CSS styles with BEM naming conventions.

### 5.JavaScript Class Structure
The JavaScript code (**script.js**) follows an Object-Oriented approach using ES6 classes. The ***TextManager*** class encapsulates the functionality of the text list management application. It includes methods for adding, deleting, undoing actions, and handling the modal for adding new text. The class also manages the state of the application, including the text list and undo stack.

The class is instantiated, and event listeners are set up to respond to user interactions, triggering the appropriate methods to manage the text list and modal behavior.