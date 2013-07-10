(function() {

  module.exports.register = function(Handlebars, options) {

    Handlebars.registerHelper('myHelper', function(input) {
      return "<!-- " + input + " -->";
    });

  };

}).call(this);
