({
//
// Gets the expense that changed.
// Creates an event named updateExpense.
// Packages expense into the event.
// Fires the event.
//
    clickReimbursed: function(component, event, helper) {
        var expense = component.get("v.expense");
        // updateEvent is a custom event so use component.getEvent() instead of component.get().
        var updateEvent = component.getEvent("updateExpense");
        updateEvent.setParams({ "expense": expense });
        console.log(" here is the parm",expense);
        updateEvent.fire();
    }

})