# PrexProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

## Description

In this project, I did not focus on the UI except on the final page. Most of my concentration was on using angular material since the project mentioned using it.

1. The first page has a "Proceed" button which routes to the second page.
2. The second page has two tabs.
2a. The first tab has three buttons each of which routes to a new page.
2b. The second tab has a number of photos arranged with grid using angular material.
3. The first button in the first tab routes you back to the home page.
4. The second button routes you to a new page which has the table.
5. The third button routes you to the final page which has a styled div that contains a number of elements (photo & text) that are changed depending on the user's choice.
6. In the table page we have a filtration button that filters by the books' names and we also have a search input field which we can search by any name.
7. the filtration works with three clicks:
a. the first click sort by ascending alphabet.
b. the second click sort by descending alphabet.
c. the third click returns the elements to their default arrangement.
8. The search in the table page works by key up so every press on the keyboard evokes the function and returns an array full of matched elements.
9. I considered using different types of angular material components and use the directives of the angular too (like *ngIf & *ngFor)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
