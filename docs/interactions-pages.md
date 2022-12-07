# This document is a list of all endpoints and their functions. The pages start in the relative order of how they are presented to the user. The login page is presented first. Before we start, FitnessFriend is a software that is meant to help people customize and record their workouts to stay fit and keep them on their fitness goal track.


## login.ejs
This interaction is the first page presented to the user. The login page requires the person to enter a valid username and password (password is highly, highly optional, to the point of luxurious). Entering in a succesful username and password, followed by the click of the "Login" button brings the user to the homepage.
If the user has not created an account yet, the click of the "Login" button brings the user to the "userName-incorrect2" page which tells them to create a username.
There is a Create Account form that comprises the creat account feature on the homepage where the user can enter a unique username and password (password is optional) to create a FitnessFriend account.

## userName-incorrect2

This interaction is a page that displays a message telling the user that they need to create an account. A button directs the user back to login.ejs

## create-account
This page displays a message that tells the user their account was successfully created with a username, and password, and they are now part of the vast database of FitnessFriend! A button redirects the ser to the login page where they can enter their username and password (if they so decided to create one).

## confirm-delete
This page requires the user to enter in their username and password (if needed) to confirm deleting their account. After entering in the correct username and password credentials, a button deletes the account and all data, then it pulls up the "delete-account" page. A separate back button brings the user back to the home.ejs page just in case they decide to stay FitnessFriends. 

## delete-account
So long partner, this page displays the message that the account has been deleted. A button brings the user back to the login page.

## home.ejs
This interaction is the homepage. It is comprised of four buttons that are self explanetory in what pages they bring the user to:
- New Fitness Info: The user can click the green button that brings them to the new-fitness info page to enter in a workout. 
- Past Fitness IntoL: A blue button that displays the data from their past logged workouts.
- Logout: Logout button that logs the user out and brings them to the "logout" page.
- Delete account: A button that when clicked brings the user to the "confirm-delete" page if they decide to no longer be FitnessFriends to the end.

## new-fitness-info
This page is where the user enters their workout information. The information is composed of three parts: 
- Exercise Time (in minutes)
- Exercise Type (a descriptive variable)
- Exercise Date (day). The data is entered into the accounts user database when the "Enter Workout" button is pressed.


## past-fitness-info
This page displays a history of the users fitness info.

## logout
The page pops up when a succesful logout has occured, and a message displays telling the user they succesfully logged out. A button "Return to Login Page" must then be clicked to return the user back to the login page.

## entry-success

This page tells the user that the workout information in "new-fitness-info" was succesfully deleted
