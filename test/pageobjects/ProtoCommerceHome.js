class ProtoCommerce{
    
     get checkout()
    {
        return $(".nav-link.btn.btn-primary");
    }
    get ParentEquipment()
    {
        return $$("div[class='card h-100']");
    }

    get ChildPath()
    {
        return $("div h4 a");
    }

    get addcart()
    {
        return $(".card-footer button");
    }
   async addToCart(products){

    for(let i=0;i<await this.ParentEquipment.length;i++)
        {
          const card=await this.ParentEquipment[i].$("div h4 a")//.this.ChildPath
          if(products.includes(await card.getText()))
          {
            await this.ParentEquipment[i].$(".card-footer button").click()
          }
        }
    }
 
}
export default new ProtoCommerce(); 