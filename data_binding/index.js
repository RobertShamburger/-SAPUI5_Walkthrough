sap.ui.require([
    "sap/ui/core/mvc/XMLView"
    "sap/ui/model/json/JSONModel"
], function (XMLView, JSONModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
        // Create a JSON model from an object literal
        var oModel = new JSONModel ({
            firstName: "Mike",
            lastName: "Hawk",
            enabled: true,
            panelHeaderText: "Data Binding Basics",
            greetingText: "Hi, my name is Mike Hawk"
        });
        // Assign the model object to the SAPUI5 core
        sap.ui.getCore().setModel(oModel);
        // Display the XML view called "App"
        new XMLView({
            viewName: "sap.ui.demo.db.view.App"
        }).placeAt("content");
        // Display a text element whose text is derived
        // from the model object
//new Text({text: "{/greetingText}"}).placeAt("content");
	});
});