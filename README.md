# DimeboxTestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Functionality of the app
* This is a basic image search app which allows users to to search for images using pixabay search API
* The App has three routes : Home Page, Search page, Favourite Page
* Home Page contains two links to navigate to search and facvourite page along with welcome text.
* In Search page enter word like hill, sun, face, head, eye, flower etc to get an image. 
   * The results gets updated live as the user type into the search box:
    * Each image displays below information on hover.
        * Link to author page (`Author`)
        * A button (`Mark As Favourite`) to save the image to the user’s favorite page.
      
      When click, a pop up opens for the user to choose which list to add the image to.
      If there’s no list, user can create a new list or add new list also. List name and description can be updated there.
      * However below validations added in the modal.
        * Disable Save/Update button if no data present.
        * If data is being edited, hide `save` button and display `update` button. `Edit` and `Add to list` button will be disabled in that scenario.
        * Auto vertical scroll gets added if user adds more list which exceeds the section.
    * After adding image to particular list, it navigates to favourite page to show list name and image.  

* On the Favorite page all lists display with correct images in each list.
    * If no image is there for any list , only list name is visible.
    * Download functionality has been added for each image which works only in latest browser version (because it is using HTML5 new attribute)

* CSS3 is implemented for pages, modal and images.
* Angular 8.3.8 is implemented along with ngRx/store for state    management for creating, updating the list, images where as ngRx/effects is used for loading all images. 

* ![Home][src\assets\snapshot-2.PNG]
* ![Search][src\assets\snapshot-1.PNG]
* ![Favourite][src\assets\snapshot.PNG]



