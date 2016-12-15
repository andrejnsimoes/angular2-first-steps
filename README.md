# angular2-first-steps


### Installation

Requires [Node.js](https://nodejs.org/) v4+ to run.

Install [Angular-CLI](https://github.com/angular/angular-cli)

```sh
$ npm install -g angular-cli@latest
```

Create new project and run it:

```sh
$ ng new my-app
$ cd my-app
$ ng serve
```

or, if you prefer yarn:

```sh
$ ng new my-app --skip-npm
$ cd my-app
$ yarn
$ ng serve
```

----

### 1 - Create Component & add some properties

Just run:

```sh
$ ng generate component user
```

TO DO:
* Add some properties on the new Component and use them on his template

----

### 2 - Structural Directives

TO DO:
* Initialize properties on ngOnInit
* Create an Address Interface
* Add an array property
* Use *ngIf and *ngFor

----

### 3 - Forms

TO DO:
* Create form and use ngModel with user properties
* Apply some css on user component (component scoped styles)
* Add and remove hobbies

----

### 4 - Services

Just run:

```sh
$ mkdir src/app/services
$ ng generate service services/posts
```

TO DO:
* Create service, import Http and rxjs
* Get posts from JSONPlaceholder (Fake Online REST API)
* Create Post Interface on service
* Import Post Service and Interface on User Component and use them
* Import Post Service on App Module and add it on providers list

----

License
----
Beerware License
