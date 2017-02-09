({
    clickCreateExpense: function(component, event, helper) {

        // Simplistic error checking
        var validExpense = true;

        // Name must not be blank
        var nameField = component.find("expname");
        var expname = nameField.get("v.value");
         
        console.log("namefield found : " + nameField + " also as :" +component.find("expname").get("v.value") );
        console.log("namefield value: " + expname);   
        
        if ($A.util.isEmpty(expname)){
            validExpense = false;
            nameField.set("v.errors", [{message:"Expense name can't be blank."}]);
        }
        else {
            console.log("settinge error value: " + "v.errors" + " to null");

            nameField.set("v.errors", null);
        }

        // ... hint: more error checking here ...

        // If we pass error checking, do some real work
        if(validExpense){
            // Create the new expense
            var newExpense = component.get("v.newExpense");
            console.log("Create expense: " + JSON.stringify(newExpense));
            helper.createExpense(component, newExpense);
        }
    }
})