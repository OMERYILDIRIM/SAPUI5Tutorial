sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("sap.ui.demo.wt.controller.App", {
	      onShowHello : function () {
	          // show a SAPUI5 message alert - nicer looking
	    	  MessageToast.show("Hello World Step 6");
	       }
	    });
});