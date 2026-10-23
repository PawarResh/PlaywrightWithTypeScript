import { Page } from "@playwright/test";

export class DataEntryForm{

 protected enterName:string ="#name";
 protected email:string ="#email";

constructor(private page:Page){
this.page

}

 async enterUserName(userName:string){
 await this.page.locator(this.enterName).fill(userName);

 }
 async enterEmail(email:string){
 await this.page.locator(this.email).fill(email);
 }









}