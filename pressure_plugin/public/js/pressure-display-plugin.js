(function (window, $, undefined) {
    'use strict';

    var pressure-display-plugin;

    pressure-display-plugin = function pressure-display-plugin(cockpit) {
        console.log("Loading pressure-display-plugin plugin in the browser.");

        // Instance variables
        this.cockpit = cockpit;

    //example keyboard hook
    /*
    this.cockpit.emit('inputController.register',
      {
        name: "pressure-display-plugin.keyBoardMapping",
        description: "Example for keymapping.",
        defaults: { keyboard: 'alt+0', gamepad: 'X' },
        down: function() { console.log('0 down'); },
        up: function() { console.log('0 up'); },
        secondary: [
          {
            name: "pressure-display-plugin.keyBoardMappingDepdent",
            dependency: "pressure-display-plugin.keyBoardMapping",
            defaults: { keyboard: '9', gamepad: 'RB' },
            down: function() { console.log('####'); }
          }
        ]
      });
    */

    // for plugin management:
    this.name = 'pressure-display-plugin';   // for the settings
    this.viewName = 'pressure-display-plugin plugin'; // for the UI
    this.canBeDisabled = true; //allow enable/disable
    this.enable = function () {
      alert('pressure-display-plugin enabled');
    };
    this.disable = function () {
      alert('pressure-display-plugin disabled');
    };
  };

  //This will be called by the input manager automatically
  pressure-display-plugin.prototype.listen = function listen() {
    var rov = this;

    //This snippet allows you to listen to events coming
    //from the beaglebone.  Those coulbe be navdata, status, etc...
    /*
    this.cockpit.socket.on('navdata', function (data) {
      rov.dosomethingwith(data);
    });
    /*

    //This example will put an entry in the pop-up Heads Up Menu
    /*
    var item = {
      label: ko.observable("pressure-display-plugin menu"),
      callback: function () {
        alert('pressure-display-plugin menu item');
        item.label(this.label() + " Foo Bar");
      }
    };
    rov.cockpit.emit('headsUpMenu.register', item);
    */

    //the code below is used to load other asssets that have a path relative to the current
    //path of the executing javascript file.
    var jsFileLocation = urlOfJsFile('pressure-display-plugin.js');

    /*
    $.get(jsFileLocation + '../somefile.txt',function(data){
      console.log(data);
    });
    */

    // If you have more than a couple lines of HTML it might be better
    // to place them in a seperate .html file. The code below will load
    // them in to an element.
    /*
    $('#divtoloadcontent').load(jsFileLocation + '../template.html',function(data){
      console.log('template loaded');
    });
    */

    //For loading third party libraries that are bower dependencies
    /*
    $.getScript('plugin_components/<projectname>/<filetoload>.js',function(){
      console.log("loaded");
    });
    */

  };

    window.Cockpit.plugins.push(pressure-display-plugin);

}(window, jQuery));
