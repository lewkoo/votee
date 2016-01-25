'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var VoteeHome = new Module('voteeHome');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
VoteeHome.register(function(app, auth, database, system) {

  //We enable routing. By default the Package Object is passed to the routes
  VoteeHome.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  VoteeHome.menus.add({
        title: 'Votee home',
        link: 'voteeHome',
        roles: ['authenticated', 'anonymous'],
        menu: 'voteeMain'
    });

    VoteeHome.menus.add({
        title: 'Students',
        link: 'votee students',
        roles: ['authenticated' ],
        menu: 'voteeMain'
    });

    VoteeHome.menus.add({
        title: 'Professors',
        link: 'votee professors',
        roles: ['authenticated'],
        menu: 'voteeMain'
    });

    // Set views path, template engine and default layout
    app.set('views', __dirname + '/server/views');
  
  VoteeHome.aggregateAsset('css', 'voteeHome.css');
    VoteeHome.angularDependencies(['mean.system']);

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    VoteeHome.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    VoteeHome.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    VoteeHome.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return VoteeHome;
});
