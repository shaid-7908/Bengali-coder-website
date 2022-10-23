# HTML Forms
---

An HTML form is used to collect user input. The user input is most often sent to a server for processing.
### The ```<form>``` Element

The HTML ```<form>``` element is used to create an HTML form for user input:
```html 
<form>
.
form elements
.
</form>
```

The ```<form>``` element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.
## The ```<input>``` Element

The HTML ```<input>``` element is the most used form element.

An ```<input>``` element can be displayed in many ways, depending on the type attribute.

Here are some examples:
```html
 Type 	                 Description
<input type="text"> 	 Displays a single-line text input field
<input type="radio"> 	 Displays a radio button (for selecting one of many choices)
<input type="checkbox">  Displays a checkbox (for selecting zero or more of many choices)
<input type="submit"> 	 Displays a submit button (for submitting the form)
<input type="button"> 	 Displays a clickable button 
```
## The ```<label>``` Element
The ```<label>``` tag defines a label for many form elements.

The ```<label>``` element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element.

The ```<label>``` element also help users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the ```<label>``` element, it toggles the radio button/checkbox.

The for attribute of the ```<label>``` tag should be equal to the id attribute of the ```<input>``` element to bind them together. 
## The Submit Button

The ```<input type="submit">``` defines a button for submitting the form data to a form-handler.

The form-handler is typically a file on the server with a script for processing input data.

The form-handler is specified in the form's action attribute.

### Example

A form with a submit button:
```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form> 
```
---
## For Better Understanding Watch video => [Hindi]() or [Bengali]()
---