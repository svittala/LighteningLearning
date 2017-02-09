({
	submitForm : function(component, event, helper) {
	      // Create the new item
	      console.log("testing submitform");

 		   var validItem = true;
           // Name must not be blank
	       var nameField = component.find("itemname");
	       var name = nameField.get("v.value");
	       if ($A.util.isEmpty(nameField)){
	           validItem = false;
	           nameField.set("v.errors", [{message:"Expense name can't be blank."}]);
	       }
	       else {
	           nameField.set("v.errors", null);
	       }

	       // Amount must be set, must be a positive number
	       var priceField = component.find("price");
	       var price = priceField.get("v.value");
	       if ($A.util.isEmpty(price) || isNaN(price) || (price <= 0.0)){
	           validItem = false;
	           priceField.set("v.errors", [{message:"Enter the Price."}]);
	       }
	       else {
	           // If the price looks good, unset any errors...
	           priceField.set("v.errors", null);
	       }

	       if (validItem){
	        var newItem = component.get("v.newItem");
	        console.log("calling addItem");
	        helper.createItem(component, newItem);
	    }
	}
})