# Image processing API
it's an image processing API that resizes any image in a certain directory and it caches the data to return it again without processing this time

## walkthrough
- there is an images directory inside asstes and this directory contains the images that can be resized
- another directory in assets called processed_images that conatins the cached images
- a build directory that contains the compiled typescript
- there is also a sepc directory that contains support directory that holdsjasmine configurations
- there is a src directory that has two more directories for the routes and tests
- also the src conatians the index.ts file which is responsible for building the server and using middlewares
- inside routes there another index.ts file that gets all the routes and sends them to the main app
- there is api directory inside routes which has images.ts file which is responsible for the main functionality including image processing and caching the data
- inside tests directory all the tests belongs there for all the files and functionalities
- finally there are some json packages for any configurations needed

## to see if the app works
go to http://localhost:8080 it should respond with Welcome to image resize app

## how to use it
- open you browser
- the url: http://localhost:8080/api/images
- then type the parameters ex: ?filename=fjord&width=400&height=400
- then the picture and the deminsions should be shown on your browser

## resources used
- https://stackoverflow.com/questions/54603561/return-type-for-express-routes-with-typescript
- https://youtu.be/1oVme5nIEpY
- https://youtu.be/M44umyYPiuo
- https://youtu.be/I0ee0wbCnHQ
- https://youtu.be/VtGcELANPgU
