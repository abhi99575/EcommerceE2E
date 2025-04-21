describe("Ecommerce",async()=>{
    it("End to End product purchase",async()=>{
        let products=['Blackberry','iphone X']
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        await $("#signInBtn").click()
        let checkoutexist=await $(".nav-link.btn.btn-primary")
        await expect(checkoutexist).toExist()
        const cards = await $$("div[class='card h-100']")
        for( let i =0; i< await cards.length;i++)
        {
            const text = await cards[i].$("div h4 a")
           if(products.includes(await text.getText()))
           {
            console.log(text.getText())
            await cards[i].$(".card-footer button").click()
           }
        }
        checkoutexist.click()

        await browser.pause(4000) 
    
        })
      })
