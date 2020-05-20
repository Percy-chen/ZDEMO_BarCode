/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZDEMO_BarCode/ZDEMO_BarCode/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});