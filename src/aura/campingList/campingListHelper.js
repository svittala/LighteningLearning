({
    createItem: function(component, item) {
        var action = component.get("c.saveItem");
        action.setParams({
            "item": item
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var myitems = component.get("v.items");
                myitems.push(response.getReturnValue());
                component.set("v.items", myitems);
                
            }
        });
        $A.enqueueAction(action);
    },

    createItemOld: function(component, item) {
        var theItems = component.get("v.items");
        
        // Copy the item to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        var newItem = JSON.parse(JSON.stringify(item));
        console.log(" came here " + JSON.stringify(newItem));
        theItems.push(newItem);
        component.set("v.items", theItems);
         console.log("Now the items are :" + JSON.stringify(theItems));

    }
})