({
	
		validateItemForm: function(component) {

		   // Simplistic error checking
	       var validItem = true;
           console.log("Inside validate"+component);
	       // Name must not be blank
	       var nameField = component.find("itemname");
	       var name = nameField.get("v.value");
	       if ($A.util.isEmpty(expname)){
	           validExpense = false;
	           nameField.set("v.errors", [{message:"Expense name can't be blank."}]);
	       }
	       else {
	           nameField.set("v.errors", null);
	       }

	       // Amount must be set, must be a positive number
	       var priceField = component.find("price");
	       var price = priceField.get("v.value");
	       if ($A.util.isEmpty(price) || isNaN(price) || (price <= 0.0)){
	           validExpense = false;
	           priceField.set("v.errors", [{message:"Enter the Price."}]);
	       }
	       else {
	           // If the price looks good, unset any errors...
	           priceField.set("v.errors", null);
	       }
	       
	       return(validitem);
	   },

    createItem: function(component, newItem) {
    var createEvent = component.getEvent("addItem");
    console.log("inside addItem");
    createEvent.setParams({ "item": newItem });
    createEvent.fire(); 
    component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c','Name': '','Quantity__c': 0,
                                           'Price__c': 0,'Packed__c': false });
    }

})