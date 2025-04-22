class Paymentpage{

    get Price()
    {
        return $$("//tr/td[4]/strong")
    }
    get totalprice(){
        return $('//tr/td[5]/h3/strong')
    }
    get checkout(){
        return $(".btn.btn-success")
    }
    async completePayment(){

    const sumOfProducts=(await Promise.all(await this.Price.map(async Price=>parseInt((await Price.getText()).split(".")[1].trim())))).reduce((acc,price)=>acc+price,0)

    }
   
    async compareamount(){
        const compareamount =   parseInt((await this.totalprice.getText()).split(".")[1].trim())
        expect(sumOfProducts).toEqual(compareamount);
    }

}
export default new Paymentpage();