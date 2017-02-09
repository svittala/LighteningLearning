public with sharing class CampingListController {
	@AuraEnabled
	public static List<Camping_Item__c> getItems (){
		return [SELECT Id, Name,Price__c,Quantity__c,Packed__c,CreatedDate
		 FROM Camping_Item__c];
	}
	
	@AuraEnabled
	public static Camping_Item__c saveItem(Camping_Item__c item) {
	  // Perform isUpdatable() checking first, then
	       upsert item;
	       return item;
	}

}