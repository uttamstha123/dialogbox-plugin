# dialogbox-plugin
A simple plugin to console log the name, email and all other input fields.

## Getting Started

Get started by downloading the content of this repo. There are two main files of concern: `dialogbox.js` and `dialogbox.css`.

Link both files to your .html file:

`<link rel="stylesheet" href="dialogbox.css">`
`<script src="dialogbox.js" />

## Using the plugin

### Steps
1. Create a form element that will have all inputs e.g `<form class="dialog-box-form"></form>`. Give the class name `dialog-box-form` to the form tag

2. Inside the form, add as many input fields as a direct child of form to be used e.g `<input type='name' placeholder='First Name*' required/>` || making it required is optional. 

3. Use `<input type='submit' />` as a submit tag. 

4. After clicking on submit button check your browser console to see the result. 
