# Marvel API Interface

## Introduction
This is a sample GUI create to browse datas from the [Marvel Comics API](http://developer.marvel.com)

You can see it [here](http://varkal.com/marvel/)

This application use those libraries :

- [AngularJS](http://angularjs.org)
- [Bootstrap](http://getbootstrap.com)
- [AngularUI](http://angular-ui.github.io/)
- [Lodash](http://lodash.com)
- [Spinkit](http://tobiasahlin.com/spinkit/)
- [Angular-konami](https://github.com/lucasconstantino/angular-konami)
 
##Installation 
 
If you want to install you own copy :
 
    git clone https://github.com/Varkal/marvel-test.git;
    
And download the dependencies with [Bower](http://bower.io/)

    cd marvel-test;
    bower install;
   
## Instruction to use the app

### Home Page

There is nothing todo on Homepage except by clicking on a link a the top of the page (redirect to a list page)
, or on a comic book cover at the bottom (redirect on a detailed comic page)

Except if there is an easter egg based on the [Konami code](https://en.wikipedia.org/wiki/Konami_Code). But it's very unlikely :)
 
### List Page

A list page list all creator or comics, and offer you the possibility to filter them by a simple criteria (Title or Name)
A click on one element in the list open the detailed view

You can use the pager at the bottom of the page to see the next 20 guys/comics

### Detailed Page

Informations are splited in accordion sections used to lazy-load only the information needed, and inside those sections, 
list are paginated

 
## Good example page 

The informations in the API aren't perfect, so I propose you example of page with interesting informations :   

A creator with many informations ? [Aaron Lopresti](http://varkal.com/marvel/#/creator/540)
A comics with many informations ? [ACTS OF VENGEANCE CROSSOVERS OMNIBUS (Hardcover)](http://varkal.com/marvel/#/comic/29317)




