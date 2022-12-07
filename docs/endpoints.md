# List of all endpoints and their functions


## **/ ** 

This endpoint directs the user to the login page.

## ** /login **

This endpoint redirects the user to the login page. Every button that brings the user back to the login page when clicked uses this endpoint.

## ** /home **

This endpoint is used by buttons that redirects the user back to the homepage when clicked.


## ** /enterLogin **
This endpoint is used by the "Login" button on the login page and takes the user to the homepage (home.ejs) as long as the user info entered is registered.

## ** /createAccount **

This endpoint takes the user to the page that tells them their account has been succesfully created. 

## ** /returnLogin **

This endpoint is used by buttons that return the user back to the login page after creating, or deleting their account.

## ** /NewFitnessInfo **
This endpoint is used by the button on the home.ejs page that when clicked directs the user to the page where they can enter in the data for a new workout they just completed.

## ** /enterWorkout **
This endpoint is used by the "Enter Workout" button that adds the workout info to the database when clicked.

## ** /returnHome **
This endpoint is used by buttons that redirects the user back to the homepage when clicked. This endpoint is found in the "return to login

## ** /DeleteAcntPg **
This endpoint is used to display the confirmation message after succesfully deleting an account from the database. Clicking the delete account button on "confirm-delete" brings up the message.

## ** /logout **
This endpoint is used by the logout button on the homepage. When the button is clicked, the user is signed out of their account and returned to the login page.


