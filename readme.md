# A web application which contains a timeline of my academic and professional journey so far #

## References ##
Base template have been obtained from here: http://getbootstrap.com/2.3.2/examples/fluid.html


## How to run the application locally ##
Run from local by serving from an HTTP server.
Steps to set up HTTP server quickly:

1. Install NPM
2. npm install http-server -g from the command line
3. http-server "File location from where to server the files"
4. Open a browser and enter  http://127.0.0.1:8080/index.html to get the home screen

## Frameworks used ##
1. **NPM to run a local server** - This was required to locally check if data was correctly fetched from JSON files in the Angular controller
  * Link: https://www.npmjs.com/
2. **Angular JS v1.2** - Angular is used extensively to perform data binding and show data from the JSON files that are stored in the ProfileData folder. 
   The search functionality in the *Projects* page shows the power of data binding with a few lines of code
   * Link: https://angularjs.org/
3. **Bootstrap v2.3** - Bootstrap is used to make the complete web app responsive to different screen sizes
   * Link: https://getbootstrap.com/

## How to update the app to show your, *yes your!!*, profile
1. Fork and clone the source code to your local machine
2. Navigate to the ProfileData folder
3. Update the data in the below folders based on what they contain and following the format of the existing data:
   * **communitytools.json:** Details of community tools that you may have developed
   * **highlights.json:** Your image and professional highlights that will be shown when the web app loads
   * **links.json:** The details of the various channels that one can find you active on!
   * **otheractivities.json:** Details of other relevant activities that you are doing and want the world to know about!
   * **projects.json:** Details of cool projects that you have worked on and want the world to know about. Do note that there is an *Awesome* search feature in the projects page based on the tags.
     So, choose your tags wisely!!
   * **sections.json:** The sections that one will see in your web page. Well, you would not want to add items to it and might want to rename the sections only.
     However, if you want to add your own cool new section, then you would need to perform the items in the next section (no pun intended)