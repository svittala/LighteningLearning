({
   

   saveExpense: function(component, expense, callback) {
       var action = component.get("c.saveExpense");
       action.setParams({
           "expense": expense
       });
       if (callback) {
           action.setCallback(this, callback);
       }
       $A.enqueueAction(action);
   },
   createExpense: function(component, expense) {
       this.saveExpense(component, expense, function(response){
           var state = response.getState();
           if (component.isValid() && state === "SUCCESS") {
               var expenses = component.get("v.expenses");
               expenses.push(response.getReturnValue());
               component.set("v.expenses", expenses);
           }
       });
   },

   updateExpense: function(component, expense) {
       this.saveExpense(component, expense);
   },

   createExpenseold2: function(component, expense) {
       var action = component.get("c.saveExpense");
       action.setParams({
           "expense": expense
       });
       action.setCallback(this, function(response){
           var state = response.getState();
           if (component.isValid() && state === "SUCCESS") {
               var expenses = component.get("v.expenses");
               expenses.push(response.getReturnValue());
               component.set("v.expenses", expenses);
           }
       });
       $A.enqueueAction(action);
   },
  
   updateExpenseold2: function(component, expense) {
       var action = component.get("c.saveExpense");
       action.setParams({
           "expense": expense
       });
       action.setCallback(this, function(response){
           var state = response.getState();
           if (component.isValid() && state === "SUCCESS") {
               // do nothing!
           }
       });
       $A.enqueueAction(action);
   },

    createExpenseold: function(component, expense) {
        var theExpenses = component.get("v.expenses");
 
        // Copy the expense to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        var newExpense = JSON.parse(JSON.stringify(expense));
 
        console.log("Expenses before 'create': " + JSON.stringify(theExpenses));
        theExpenses.push(newExpense);
        component.set("v.expenses", theExpenses);
        console.log("Expenses after 'create': " + JSON.stringify(theExpenses));
   }
})