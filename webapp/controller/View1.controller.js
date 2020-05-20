jQuery.sap.require("sap.ndc.BarcodeScanner");
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ZDEMO_BarCode.ZDEMO_BarCode.controller.View1", {
		onInit: function () {

		},
		onPress: function (oEvent) {
			sap.ndc.BarcodeScanner.scan(
				function (mResult) {
					alert("We got a bar code\n" +
						"Result: " + mResult.text + "\n" +
						"Format: " + mResult.format + "\n" +
						"Cancelled: " + mResult.cancelled);
				},
				function (Error) {
					alert("Scanning failed: " + Error);
				},
			);
		},
		//手机摄像头扫描
		handleCamera: function (evt) {
			var Barcode = "";
			var oZsptm = this.byId("Zsptm");
			var oController = this;
			cordova.plugins.barcodeScanner.scan(function (result) {
				Barcode = result.text;
				oZsptm.setValue(Barcode);
				// oController.GetData();
			}, function (error) {
				alert(this._ResourceBundle.getText("Message.ShowError") + error);
			});
		},
	});
});