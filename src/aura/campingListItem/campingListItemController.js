({
	packItem : function(component, event, helper) {
		var itemvar = component.get("v.item"); // need to get to a var and then set the var in component
		itemvar.Packed__c = true;
		component.set("v.item",itemvar);
		var btnClicked = event.getSource();
		btnClicked.set ("disabled","true");
		
	}
})