(function (window, document, jQuery) {
    'use strict';

    var pressureDisplay;

    var plugins = namespace('plugins');
    plugins.pressureDisplay = pressureDisplay;

    pressureDisplay = function pressureDisplay(cockpit) {
        console.log("Loading pressureDisplay plugin in the browser.");

        // Instance variables
        this.cockpit = cockpit;
        this.rov = cockpit.rov;

        this.pluginDefaults = {
          name : 'pressureDisplay',
          viewName : 'Pressure Display',
          canBeDisabled : false,
          defaultEnabled : true
        };
    };

  //This will be called by the input manager automatically
  pressureDisplay.prototype.listen = function listen() {
    var self = this;

    self.cockpit.rov.withHistory.on('plugin.pressureDisplay.data', function(data){
      self.cockpit.emit('plugin.pressureDisplay.data', data);
    });
  };

  window.Cockpit.plugins.push(pressureDisplay);

}(window, document, $));
