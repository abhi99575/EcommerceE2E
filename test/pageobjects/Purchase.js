class productPurchase{
    
    get successPurchase(){
        return $(".btn.btn-success.btn-lg")
    }
    get alertSuccess(){
        return $(".alert-success")
    }
    async PurchaseButton(){
        
        await this.successPurchase.click()
        await expect(this.alertSuccess).toHaveText(expect.stringContaining("Success"))
 
    }
}
export default new productPurchase()