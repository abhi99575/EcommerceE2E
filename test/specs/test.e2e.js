import loginpage from '../pageobjects/loginpage'
import homepage from '../pageobjects/ProtoCommerceHome'
import paymentpage from '../pageobjects/payment'
import addresspage from '../pageobjects/DeliveryAddress'
import DeliveryAddress from '../pageobjects/DeliveryAddress'
import Purchase from '../pageobjects/Purchase'
describe("Ecommerce",async()=>{
    it("End to End product purchase",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await loginpage.login('rahulshettyacademy','learning')
        await expect(homepage.checkout).toExist()
        let products=['Blackberry','iphone X']
        await homepage.addToCart(products)
        await homepage.checkout.click()
        await paymentpage.completePayment()
       await paymentpage.checkout.click()
       await DeliveryAddress.selectCountry()
       await Purchase.PurchaseButton()
       await browser.pause(3000)
        })
      })
