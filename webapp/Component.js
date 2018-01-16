jQuery.sap.declare("S.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("S.Component", {
	metadata: {
		"manifest": "json"
	}
});