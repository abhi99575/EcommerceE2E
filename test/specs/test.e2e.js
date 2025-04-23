import loginpage from '../pageobjects/loginpage'
import homepage from '../pageobjects/ProtoCommerceHome'
import paymentpage from '../pageobjects/payment'
import addresspage from '../pageobjects/DeliveryAddress'
import DeliveryAddress from '../pageobjects/DeliveryAddress'
import Purchase from '../pageobjects/Purchase'
import fs from 'fs'
let e2ecredentials=JSON.parse(fs.readFileSync('test/testData/e2eTest.json'))
describe("Ecommerce",async()=>{
  e2ecredentials.forEach( ({products}) => {
    it("End to End product purchase",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await loginpage.login('rahulshettyacademy','learning')
        await expect(homepage.checkout).toExist()
        await homepage.addToCart(products)
        await homepage.checkout.click()
        await paymentpage.completePayment()
       await paymentpage.checkout.click()
       await DeliveryAddress.selectCountry()
       await Purchase.PurchaseButton()
        })
      })
    })
