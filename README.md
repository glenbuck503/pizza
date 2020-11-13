# Pizza Parlor

#### This application will let a user order a pizza.

#### By Glen Buck

## Description

This application will let a user order a pizza. It will ask for the user to select a size (small, medium or large) and choose up to 6 toppings. Toppings vary from $1 to $2. After the user enters in the information, it will show them the total price.

### Tests

test: gather users selected pizza size
expect: let size = \$("select#size").val();

test: gather users selections for toppings and push into an empty array
expect: let toppings = []; $("input:checkbox[name=topping]:checked").each(function() {
      toppings.push($(this).val());
});

test: add function to add the total price. Size and toppings
exepct: let price.toEqual(totalPrice)

test: show user total price
expect: (output).text(totalPrice)

## Setup/Installation Requirements

- Go to https://github.com/glenbuck503/pizza
- Go to the middle upper right corner where the green box that says "Code" and click it.
- Copy the HTTPs site to your clipboard.
- Open terminal or bash and get to the directory you want to download the repo to.
- Type into the terminal "git clone command + v if using Mac or control + v is using a PC" and press enter.
- Open the file labeled "index.html" in the directory you just downloaded the repo to.

## Known Bugs

There are no known bugs. 12/12/2020

## Support and contact details

For contact support, please email Glen Buck <a href = "mailto: glenbuck@gamil.com">Send Email</a>

## Technologies Used

- VS Code
- HTML/CSS
- Git
- Git Hub
- Jquery
- JavaScript

### License

232.323.5.5.

Copyright (c) 2020 Glen Buck Inc.
