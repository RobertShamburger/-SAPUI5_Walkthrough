sap.ui.require([
	"sap/m/Text"
], function (Text) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
        // Create a JSON model from an object literal
        var oModel = new JSONModel ({
            greetingText: "Hi, my name is Mike Hawk"
        });
        
        // Assign the model object to the SAPUI5 core
        sap.ui.getCore().setModel(oModel);
		// Create a text UI element that displays a hardcoded text string
		new Text({text: "{/greetingText}"}).placeAt("content");
	});
});