sap.ui.require([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/resource/ResourceModel"
], function (JSONModel, XMLView, ResourceModel) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
        // Create a JSON model from an object literal
        var oModel = new JSONModel({
            firstName: "Mike",
            lastName: "Hawk",
            enabled: true,
            address: {
                street: "Guy-Fiery-Boulevard 420",
                city: "Flavour Town",
                zip: "696969",
                country: "Heaven"
            },
            salesAmount: 69420.789,
            currencyCode: "EUR"
        });
        // Assign the model object to the SAPUI5 core
        sap.ui.getCore().setModel(oModel);
        // Create a resource bundle for language specific texts
        // the configured supportedLocales represent the i18n files present:
        // * "" - i18n/i18n.properties
        // the configured fallbackLocale should represent one of these files
        // * "" - according to the fallback chain the root bundle is the last fallback.
        // which means that if the "de" was requested here, the root bundle would never be loaded.
        // Configuring it explicitly avoids side effects when additional resource files are added.
        
        // oModel.setDefaultBindingMode(BindingMode.OneWay);
        
        var oResourceModel = new ResourceModel({
            bundleName: "sap.ui.demo.data_binding.i18n.i18n",
            supportedLocales: ["", "de"],
            fallbackLocale: ""
        });
                
        // Assign the model object to the SAPUI5 core
        sap.ui.getCore().setModel(oResourceModel, "i18n");
        // Display the XML view called "App"
       new XMLView({
           viewName: "sap.ui.demo.data_binding.view.App"
       }).placeAt("content");
    });
});