sap.ui.require([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/BindingMode"
], function (JSONModel, XMLView, BindingMode) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
        // Create a JSON model from an object literal
        var oModel = new JSONModel({
            firstName: "Mike",
            lastName: "Hawk",
            enabled: true,
            panelHeaderText: "Data Binding Basics"
        });
        oModel.setDefaultBindingMode(BindingMode.OneWay);
        
        // Assign the model object to the SAPUI5 core
        sap.ui.getCore().setModel(oModel);
        // Display the XML view called "App"
       new XMLView({
           viewName: "sap.ui.demo.data_binding.view.App"
       }).placeAt("content");
    });
});