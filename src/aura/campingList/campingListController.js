({

    // Load expenses from Salesforce
    doInit: function(component, event, helper) {

        // Create the action to call from Apex class..
        var action = component.get("c.getItems");

        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });

        // Send action off to be executed
        $A.enqueueAction(action);
    },

    handleAddItem1: function(component, event, helper) {
    var newItem = event.getParam("item");
    console.log (" good value here"+newItem);
    helper.createItem(component, newItem);
   },

   handleAddItem: function(component, event, helper) {
    var newItem = event.getParam("item");
    console.log (" good value here"+newItem);
   
   var action = component.get("c.saveItem");
   action.setParams({
       "item": newItem
   });
   action.setCallback(this, function(response){
       var state = response.getState();
       if (component.isValid() && state === "SUCCESS") {
           var myitems = component.get("v.items");
           myitems.push(response.getReturnValue());
           component.set("v.items", myitems);
           component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c','Name': '','Quantity__c': 0,
                                      'Price__c': 0,'Packed__c': false });
       }
   });
   $A.enqueueAction(action);
   },

    clickCreateItems: function(component, event, helper) {
          // Create the new item
            var newItem = component.get("v.newItem");
            helper.createItem(component, newItem);
        }
    },

 
    clickCreateItemOld: function(component, event, helper) {
        // Simplistic error checking...
        console.log ("got here");
        var validItem = true;
        // Name must not be blank
        var nameField = component.find("itemname");
        var itemname = nameField.get("v.value");
        if ($A.util.isEmpty(itemname)){
            validItem = false;
            nameField.set("v.errors", [{message:"Camping Item name can't be blank."}]);
        }
        else {
            nameField.set("v.errors", null);
        }

        // ... hint: more error checking here ...

        // If we pass error checking, do some real work
        if(validItem){
             // Create the new expense
            var newItem = component.get("v.newItem");
            var myitem = JSON.parse(JSON.stringify(newItem));
            //console.log("Create Item: " + JSON.stringify(newItem));
             
             // These guys dont care for the helper -->
             // helper.createItem(component, newItem);
             //
 
             var theItems = component.get("v.items");
             theItems.push(myitem);
             component.set("v.items", theItems);
             // this is the reset activity they are looking for ?????
             component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c','Name': '','Quantity__c': 0,
                                           'Price__c': 0,'Packed__c': false });
        }
    }
})