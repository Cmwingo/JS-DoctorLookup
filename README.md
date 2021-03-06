# _Doc Finder_

#### _A web app that allows the user to enter a medical symptom, and then utilizes an API to retrieve doctors specializing in that area_

#### By _**Chris Wingo**_

## Description

_This program will allow the user to enter in information about a medical issue they are experiencing. It will then return a list of doctors that might be able to treat the issue they are having._

## Setup/Installation Requirements

### You will need an API key for this program to work

* Get one at the [BetterDoctors API](https://developer.betterdoctor.com) site by clicking “Get a free API key”.
* Fill out the form, or authenticate with GitHub.
* Your API key should be listed on the front page (ex: “a2c356ibgh44…..”) or under My Account > Applications.
* Place your token in an .env file at the top level of the project directory.
* Be sure to include the line {exports.apiKey = "YOUR-API-KEY-HERE";} at the end of your env file.


### Must have current version of NodeJS installed

* Copy all files and folders to your desktop or {git clone} the project.
* Navigate to the project folder from the command line and run {npm install} and {bower install} to get all the necessary packages from the web
* Run {gulp build} to create a development file for your local machine or {gulp buid --production} to build a copy for deployment to a live server
* Then run {gulp serve} to launch the development server in your default web browser

## Known Bugs

_No known issues at this time_

## Support and contact details

_Please feel free to contact me with questions, comments, or contributions to improve the program at cmwingo@gmail.com_

### License

*https://creativecommons.org/licenses/by-nc/3.0/us/legalcode*

Copyright (c) 2017 **_Chris Wingo_**
