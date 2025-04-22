class delivery{
    get Countrycode()
    {
        return $("#country")
    }
    get Country(){
        return $("//a[.='India']")
    }
    get reverseAssersion(){
        return $(".lds-ellipsis")
    }
    get productPurchase(){
        return $("//label[@for='checkbox2']")
    }
    async selectCountry(){
     await this.Countrycode.setValue("ind")
     await this.reverseAssersion.waitForExist({reverse:true,timeout: 10000})
     await this.Country.click()
     await this.productPurchase.click()
    }


}
export default new delivery();