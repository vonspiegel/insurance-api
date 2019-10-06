# insurance-api

## Description

This is a small app to get information fetching the data available regarding clients and insurances.

## User stories

- **dataId** Gets user data filtered by user id.
- **dataName** Gets user data filtered by user name.
- **listPolicies** Gets list of policies linked to a username.
- **userPolicy** Gets user linked to a policy number.

## Get ready

- Check you have the latest version of node installed on your system (\$ node --version).
- Fork this repository, create a folder with its files.
- Install axios as dependency (\$ npm i axios).

## Use

In order to connect to the database and get information, open your terminal and execute the following commands in the working environment folder depending on the data fetched:

- **dataId** \$ node dataId.js <here-the-id>
- **dataName** \$ node dataName.js <here-the-name>
- **listPolicies** \$ node listPolicies.js <here-the-user>
- **userPolicy** \$ node userPolicy.js <here-the-policy-id>

## Notes

For now this program has some limitations, but prioritizing tasks I have thought it would be better to deliver an approach as soon as possible and find new ways of improvement in another stage.

- There is not selective access regarding "user" or "admin" roles.
- Mocha Chai testing has been starting but currently is not working. I will find a way to make it works with async/await functions.
