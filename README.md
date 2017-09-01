# Let's Go

Hungry? Thirsty? Need to find an ATM? Let's Go is an application designed to help users explore their city. Simply choose a category

 - Eat
 - Drink
 - Find Money

and type the address or city that you're currently at or want to head out to and Let's Go will do the rest.

## Developer
- [Jon Eric Escobedo](https://www.linkedin.com/in/jonericescobedo/)

##Developer Notes
This application heavily utilizes the Google Maps API + Places Library, react-places-autocomplete (a sweet React component that provides autocomplete functionality - link below).

Features:

 - The option of choosing three different category types for the Places Library
 - Autocomplete suggestions
 - Hover indicator displaying location on map

Tricky Parts:

 - Webpack image & file loader to get Google logo up (logo display required per Google)
 - Passing state to get list entries to highlight when hovering over a pin

## To Run
####Deployed Demo
Deployed on Heroku: [lets-go-app](https://lets-go-app.herokuapp.com)
#### Animated GIF Demo
[GIF Demo](http://recordit.co/JUw9Cuh6tE)
####GitHub
Clone the repo down to the directory of your choice. Then type:
```
npm install
```

```
npm run react-dev
```


```
npm run sever-dev
```
####Zip file


## Tech Stack
- React
- Bootstrap 4
- MDBootstrap
- Node.js
- Express.js
- Google Maps API & Places Library
- [react-places-autocomplete](https://github.com/kenny-hibino/react-places-autocomplete)

