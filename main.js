


// $.ajax({
// url:	"https://api.itbook.store/1.0/new",
// success:function(data){
//    alert("hi")
   

//    let apiArrayBooks=data.books
//    mainFun(data.books)
//    arrayBooks.Title=data.books.title
//    console.log(data)
//    console.log(data.books)
//    arrayBooks.Description=data.books.subtitle
//    let apidata=data.books
//    //arrayBooks.imgDiv=data.books
// },
// error:function(){
//    alert("gfd")
//    console.log("error")
// }


// })















let count = 0

let arrayBooks = [{ category: "Historical Fiction", id: 1, description: "description1", Title: "title1", price: 5, src: "./images/book3.png", count: 0 }
   , { category: "Historical Fiction", id: 2, description: "description1", Title: "title2", price: 5, src: "./images/book4.png", count: 0 }




   , { category: "Adventure", id: 3, description: "description2", Title: "title3", price: 15, src: "./images/book1.png", count: 0 }

   , { category: "Adventure", id: 4, description: "description2", Title: "title4", price: 15, src: "./images/book2.png", count: 0 }

   , { category: "Classics", id: 5, description: "description3", Title: "title5", price: 25, src: "./images/book5.png", count: 0 }


   , { category: "Classics", id: 6, description: "description3", Title: "title6", price: 25, src: "./images/book7.png", count: 0 }

   , { category: "Literary Fiction", id: 7, description: "description4", Title: "title7", price: 35, src: "./images/book8.png", count: 0 }

   , { category: "Literary Fiction", id: 8, description: "description4", Title: "titnew", price: 35, src: "./images/book4.png", count: 0 }
]

///usersArray
let arrayUsers = [{ UserName: "Hind", passwrd: "1234" },
{
   UserName: "Rasha", passwrd: "1234"
}]




const conten = $(".contener")
const headDiv = $(`<div class="head main "></div>`)
const spDiv = $(`<div class="sp main"> </div>`)
const contentDiv = $(`<div class="content main "> </div>`)
const footerDiv = $(`<div class="footer main">Book store  </div>`)


conten.append(headDiv)
conten.append(spDiv)
//content div
conten.append(contentDiv)
conten.append(footerDiv)

//===============================================================================================
//searchFunction
const body = $("body")
const loginDiv = $(`<div class="logindiv"></div>`)
const loginuserpassdive = $(`<div class="logpl"></div>`)

const logbackground = () => {
   contentDiv.hide()
   headDiv.hide()
   spDiv.hide()
   conten.hide()


   body.append(loginDiv)
   loginDiv.append(loginuserpassdive)





   loginuserpassdive.append($(`
   <label class="lablelogib" for="fname">User  Name </label>
   <input type="text" id="fname" name="firstname" placeholder="Inter User Name ..">

   <label class="lablelogib for="lname">Password</label>
   <input type="password" id="password" name="pass" placeholder="inter your password..">

 
   <button class="btnlogin shareBtn">LogIn</button>

   <label  class="hidlogen" for="fname">User  Name or Password is wrong</label>

   <button class="btnreqhidden shareBtn" btnregHiden">Regestration</button>
   
 `)


   )
   $(".hidlogen").hide()

   $(".btnreqhidden").hide()
}



const regesterDiv = $(`<div class="logpl"></div>`)

regesterDiv.append($(`
<label class="REG" for="fname">Regestration </label>
<label class="lableRegestrtion" for="fname">RegeSrt  User Name </label>
<input type="text" id="RegId" name="firstname" placeholder="Inter User Name ..">

<label class="lableRegestrtion" for="lname">Inter Passwrd</label>
<input type="password" id="passwordId" name="pass" placeholder="inter  password..">



<label   class="hidlogen grenReg" for="fname">Registration completed successfully  </label>

<button id="tt" onClick="RegFun()" class=" hideRegestrationbtn btnRegestration shareBtn">regestration</button>

<button id="tt" onClick="goToLogin()" class="goLogin btnRegestration shareBtn">Login</button>


`)


)













logbackground()

$(".btnlogin").on("click", () => {
   console.log("gg")
   login()
})


const goToLogin=()=>{
   console.log("hind")
   $(".logpl").show()
   regesterDiv.hide()
   
   loginDiv.append(loginuserpassdive)
   $(".hidlogen").hide()

   $(".btnreqhidden").hide()
   
  // login()
}


const login = () => {
   //  debugger
   for (i = 0; i < arrayUsers.length; i++) {
      if (arrayUsers[i].UserName.toUpperCase() == $("#fname").val().toUpperCase() && arrayUsers[i].passwrd.toUpperCase() == $("#password").val().toUpperCase()) {
         $(".logindiv").hide()
         contentDiv.show()
         headDiv.show()
         spDiv.show()
         conten.show()
         $(".head4").text(`Welcome: ${arrayUsers[i].UserName}`)
         console.log("hind")
         return $(".hidlogen").hide()
      } else {







         $(".btnreqhidden").show()
         console.log("Rasha")
         $(".hidlogen").show()

      }

   }


}
body.on('click', () => {
   console.log(
      $("#tt")
   )
})





$(".btnreqhidden").on("click", () => {
   $(".logpl").hide()
   $(".hidlogen").hide()
   loginDiv.append(regesterDiv)
   $(".grenReg").hide()
   $(".goLogin").hide()
   
   
   
})



 const   RegFun= ()=>{





   console.log("rashshshsh")
   let newUser = { UserName: $("#RegId").val(), passwrd: $("#passwordId").val() }
   arrayUsers.push(newUser)
   $(".grenReg").show()
   $(".goLogin").show()
  $(".hideRegestrationbtn").hide()

}








const searchFun = (search) => {
   //debugger
   $(".display").hide();

   $(".spanShooping").hide();
   $(".content").show()
   $(".content").empty()
   for (i = 0; i < arrayBooks.length; i++) {

      if (search.toUpperCase() == arrayBooks[i].Title.toUpperCase()) {
         console.log("hind")
         // $(".content").empty()
         const content = $(".content")


         const DivContent = $(`<div class="DivContent ">
         </div>`)

         const imgDiv = $(`<img >`)
         imgDiv.addClass("gridImg")

         // <div><img class=imgbook></div>
         imgDiv.attr('src', arrayBooks[i].src)
         //imgDiv.attr('class',"gridImg")
         DivContent.append(imgDiv)
         const DiveTitle = $(`<div></div>`)
         const title = $(`<h3></h3>`)
         DivContent.append(DiveTitle)
         DiveTitle.append(title)
         title.text(arrayBooks[i].Title)
         const DivePrice = $(`<div></div>`)
         const price = $(`<h3></h3>`)
         DivContent.append(DivePrice)
         DivePrice.append(price)
         price.text(arrayBooks[i].price + "JD")




         const DiveSeeMore = $(`<div> </div>`)
         const btnSeeMore = $(`<button>see more</button>`)

         btnSeeMore.attr('id', arrayBooks[i].id);
         DivContent.append(DiveSeeMore)
         DiveSeeMore.append(btnSeeMore)



         btnSeeMore.on("click", function (e) {
            console.log(e)
            console.log("r")
            console.log(e.target.id)
            objectId = e.target.id
            //console.log(this)
            //console.log($(this))
            //  console.log($(this).parent())

            //console.log($(this).parent().children())
            displyFun(objectId, arrayBooks[i])
         })






         content.append(DivContent)


      }


   }



}





//contentDiv.append(divSearch)



//functions
arrayhistory = []
arrayAdven = []
const mainFun = (categ,data ) => {
   console.log("hind")
   //debugger
   $(".spanShooping").hide();
   $(".display").hide();
   $(".content").show()
   //  $(".main").show()
   $(".content").empty()







   for (i = 0; i < arrayBooks.length; i++) {
      if (arrayBooks[i].category == categ) {
         const content = $(".content")
         const DivContent = $(`<div class="DivContent ">
        </div>`)

         const imgDiv = $(`<img>`)
         imgDiv.addClass("gridImg")
         // <div><img class=imgbook></div>
         imgDiv.attr('src', arrayBooks[i].src)
         DivContent.append(imgDiv)
         const DiveTitle = $(`<div></div>`)
         const title = $(`<h3></h3>`)
         DivContent.append(DiveTitle)
         DiveTitle.append(title)
         title.text(arrayBooks[i].Title)
         const DivePrice = $(`<div></div>`)
         const price = $(`<h3></h3>`)
         DivContent.append(DivePrice)
         DivePrice.append(price)
         price.text(arrayBooks[i].price + " JD")




         const DiveSeeMore = $(`<div > </div>`)
         const btnSeeMore = $(`<button class="seeMoreclass" >see more</button>`)


         btnSeeMore.attr('id', arrayBooks[i].id);
         // btnSeeMore.addClass="seeMoreclass"
         DivContent.append(DiveSeeMore)
         DiveSeeMore.append(btnSeeMore)


         //const btnSeeMore=$(".seeMoreclass")
         btnSeeMore.on("click", function (e) {
            console.log(e)
            console.log(e.target.id)
            objectId = e.target.id
            //console.log(this)
            //console.log($(this))
            //  console.log($(this).parent())

            //console.log($(this).parent().children())
            displyFun(objectId)
         })




         content.append(DivContent)

         // console.log(arrayBooks[i])
         // return arrayBooks[i].category
      }

   }
}

///////////////////////GET
//const cart = []
let cart = JSON.parse(localStorage.getItem("myBookList")) || []
let sum = 0
const displyFun = function (objId, element) {
   console.log(objId)

   $(".content").hide();

   const dispDiv = $(`<div class="display 
   
   main"> </div>`)

   dispDiv.show();

   for (i = 0; i < arrayBooks.length; i++) {

      if (objId == arrayBooks[i].id) {
         console.log("hind")

         const content = $(".content")




         const imgDiv = $(`<img >`)
         imgDiv.addClass("gridImg")

         // <div><img class=imgbook></div>
         imgDiv.attr('src', arrayBooks[i].src)
         //imgDiv.attr('class',"gridImg")
         dispDiv.append(imgDiv)
         const DiveTitle = $(`<div></div>`)
         const title = $(`<h3></h3`)
         dispDiv.append(DiveTitle)
         dispDiv.append(title)
         title.text(arrayBooks[i].Title)
         let bookTitle = arrayBooks[i].Title

         const DiveDescrption = $(`<div></div>`)
         const Description = $(`<p></p>`)
         dispDiv.append(DiveDescrption)
         DiveDescrption.append(Description)
         Description.text(arrayBooks[i].description)




         const DivePrice = $(`<div></div>`)
         const price = $(`<h3></h3`)
         dispDiv.append(DivePrice)
         DivePrice.append(price)
         price.text(arrayBooks[i].price + " JD")
         let bookPrice = arrayBooks[i].price
         console.log(bookPrice)
         const countDiv = $(`<div></div>`)



         const inpCoun = $(`<input type="number" min="1"   name="" id="">`)
         inpCoun.attr('id', "inpAdd" + arrayBooks[i].id);
         const inpId = "inpAdd" + arrayBooks[i].id
         console.log(inpId)
         //   const btmMin=$(`<button>-</button>`)
         //   const btnplus=$(`<button>+</button>`)
         //   countDiv.append(btmMin)
         countDiv.append(inpCoun)

         //   countDiv.append(btnplus)
         dispDiv.append(countDiv)
         const arrboki = arrayBooks[i]

         const addDiv = $(`<div></div>`)
         const btnadd = $(`<button class="btnAddClass">Add</button>`)
         addDiv.append(btnadd)
         // $(`#${inpId}`).val(1)
         btnadd.on("click", function () {
            console.log("GGGGGG")
            console.log(inpId)
            console.log(arrboki)
            debugger
            ////not
            if(cart.length==0){
               let itemNumber = parseInt(inpCoun.val())
               let newCoun = parseInt(arrboki.count) + itemNumber
               arrboki.count = newCoun
               sum = parseInt(sum) + parseInt(itemNumber)
               $(".spanShoopingClass").text(sum)
               cart.push(arrboki)
               localStorage.setItem("myBookList", JSON.stringify(cart));


            }else{


            for (i = 0; i < cart.length; i++) {
               if (cart[i].Title == arrboki.Title) {
                  debugger

                  let itemNumber = parseInt(inpCoun.val())
                  cart[i].count = cart[i].count + itemNumber
                  // arrboki.count =newCoun
                  //  sum = parseInt(sum) + parseInt(itemNumber)
                  //  $(".spanShoopingClass").text(sum)

                  //let itemNumber =  parseInt(inpCoun.val())
                  sum = parseInt(sum) + parseInt(itemNumber)
                   $(".spanShoopingClass").text(sum)
                  // localStorage.setItem("myBookList", JSON.stringify(cart));
         
            
            // localStorage.setItem("myBookList", JSON.stringify(cart));
            //  let itemNumber =  parseInt(inpCoun.val())

            // debugger
            // sum = parseInt(sum) + parseInt(arrboki.count)
            //  $(".spanShoopingClass").text(sum)
            console.log(cart)



////////////////////////
                 
         
dispDiv.append(addDiv)
///////


conten.append(dispDiv)
add(inpId, bookPrice, bookTitle, arrboki)

return
                  ///////////////////////

               }
            }


            ////////////////////////////
                  debugger;




                  let itemNumber = parseInt(inpCoun.val())
                  let newCoun = parseInt(arrboki.count) + itemNumber
                  arrboki.count = newCoun
                  sum = parseInt(sum) + parseInt(itemNumber)
                  $(".spanShoopingClass").text(sum)
                  cart.push(arrboki)
                  localStorage.setItem("myBookList", JSON.stringify(cart));
                 
         




                
         }
         })




         dispDiv.append(addDiv)
         ///////


         conten.append(dispDiv)
         add(inpId, bookPrice, bookTitle, arrboki)

      }
   }




}



///////////////////////////////////////////////////////////////////////////


const add = function (iptId, bookPrice, bookTitle, elem) {
   debugger

   // const INP=inpId

   console.log(iptId)
   console.log(elem)


   console.log($("#INP").val())
   console.log($(`#${iptId}`).val())


   //  let itemNumber = parseInt($(`#${iptId}`).val())
   //  sum = parseInt(sum) + parseInt(itemNumber)
   // $(".spanShoopingClass").text(sum)
   //elem[count]=itemNumber
   let priceBook
   debugger
   //newCoun=elem.count +itemNumber
   // elem.count=newCoun
   console.log("test")
   
   //if (localStorage.hasOwnProperty(bookTitle)) {
   //localStorage.hasOwnProperty(bookTitle)
   // debugger
   // let  counSum=parseInt( localStorage.getItem(bookTitle))
   // console.log(counSum)
   //  priceBook=itemNumber*bookPrice 
   /// let couning = JSON.parse(localStorage.getItem(bookTitle))
   /// localStorage.setItem(bookTitle, JSON.stringify(couning));

  localStorage.setItem("myBookList", JSON.stringify(cart));
   //counNum=couning[num]

   //couning = couning[0]
   //let oldNum = couning.num
   // let newNum = oldNum + itemNumber
   //console.log(counNum+itemNumber)
   //num=counNum+itemNumber
   //let mybookarray;
   //couning.push({price:bookPrice,num:newNum})
   // let mybookarray = [{ price: bookPrice, num: newNum }]
   // localStorage.setItem(bookTitle, JSON.stringify(mybookarray))
   // localStorage.setItem(bookTitle,[{price:bookPrice,num:newNum}])
   // } else {
   // let priceBook=itemNumber*bookPrice
   // let mybookarray = [{ price: bookPrice, num: itemNumber }]

   // localStorage.setItem(bookTitle, JSON.stringify(mybookarray))


   //}
}










//  const adv= AdventureFun=()=>{
//     //debugger

// return arrayBooks.filter((book,index)=>{

//  return book.category==="Adventure"



// }
// )
// }








///////////search

const divSearch = $(`<div class="searcDiv"></div>`)
const inputSearch = $(`<input class="inpSearch" type="text" name="" id="">`)
const buttonSearch = $(`<button  Style="color: #b37022;
border-block-color: #761313;
background-color: #761313;
width: 244px;
height: 38px;
border-radius: 11px;"   class=".btnSearch">search</button>`)
divSearch.append()

divSearch.append(inputSearch)
divSearch.append(buttonSearch)
conten.append(divSearch)


let searchInput = $(".inpSearch").val()


let btnSearcgEvent = $(".btnSearch")
buttonSearch.on("click", function () {


   searchFun($(".inpSearch").val())
})



///////////search



//const catHistorical=[]
// const HistoricalFun=()=>{
//     //debugger
// console.log(":?kik")
// return arrayBooks.filter((book,index)=>{
//  return book.category==="Historical Fiction"



// }
// )
// }
//=========histoy book function
const cat1 = $(`<div class="spA"><h3 class="hi">Historical Fiction</h3> </div>`)



//=========adventure book function


//  const adventEvent=$(".spA")
//  adventEvent.on("click",mainFun("Adventure"))



const cat2 = $(`<div class="spB"><h3>Adventure</h3> </div>`)

const cat3 = $(`<div class="spC"><h3>Classics</h3> </div>`)

const cat4 = $(`<div class="spD"> <h3>Literary Fiction</h3></div>`)




spDiv.append(cat1)
spDiv.append(cat2)
spDiv.append(cat3)
spDiv.append(cat4)
const HistoricalEvent = $(".spA")
HistoricalEvent.on("click", () => {


   mainFun("Historical Fiction")
})






const AdventureEvent = $(".spB")
AdventureEvent.on("click", function () {
   mainFun("Adventure")
})



const ClassicsEvent = $(".spC")
ClassicsEvent.on("click", function () {
   mainFun("Classics")
})

const FictionEvent = $(".spD")
FictionEvent.on("click", function () {
   mainFun("Literary Fiction")
})















const can1 = $(`<div class="conBook1"> AB</div>`)
const can2 = $(`<div class="conBook2"> BB</div>`)
const can3 = $(`<div class="conBook3"> CB</div>`)
const can4 = $(`<div class="conBook4"> DB</div>`)
//  contentDiv.append(can1)
//  contentDiv.append(can2)
//  contentDiv.append(can3)
//  contentDiv.append(can4)


const head1 = $(`<div class="head1"> Home</div>`)
const head2 = $(`<div class="head2"> AboutUs</div>`)
const head3 = $(`<div class="head3"> ContactUs</div>`)
const head4 = $(`<div class="head4"> UserNamr</div>`)
const head5 = $(`<div class="head5"> 
 <i class="fa fa-shopping-basket" style="font-size:24px;color:#b37022"></i>
 <SPan class="spanShoopingClass"> </SPan>
 </div>`)
headDiv.append(head1)
headDiv.append(head2)
headDiv.append(head3)
headDiv.append(head4)
headDiv.append(head5)





console.log("localStorage")
console.log(localStorage)
//const cart = []
$(".fa-shopping-basket").on("click", function () {
   shoopingItem = Object.entries(localStorage)

   //console.log(localStorage)
   //console.log(localStorage["title2"])
   //console.log("span")
   shoopingFun();

})


///////////////////////////////


 



let checkoutArray=[]

const shoopingFun = function () {
   $(".display").hide()
   ///

   $(".content").hide();

   const ShopingDiv = $(`<div class="spanShooping
   main">   </div>`)






   conten.append(ShopingDiv)



   //const mytable=$(".mytable")

   //const diveTable=$(".divTable")
   // rowtable

   //ShopingDiv.append(diveTable)
   //divTable.append(mytable)

 //  const TitlebtmMinDiv = $(`<div class=""></div>`)
  // const TbtmMin = $(`<h3 class="show">Min</h3>`)

  // TitlebtmMinDiv.append(TbtmMin)
    //  ShopingItemDiv.append(TitlebtmMinDiv)
   for (i = 0; i < cart.length; i++) {




      const ShopingItemDiv = $(`<div class="ShopingItemDivclass"></div>`)
      const btmMinDiv = $(`<div class=""></div>`)
      const btmMin = $(`<button class="show">-</button>`)


      btmMinDiv.append(btmMin)
      ShopingItemDiv.append(btmMinDiv)


      const btnplusDiv = $(`<div class=""></div>`)
      const btnplus = $(`<button class="show">+</button>`)
      btnplusDiv.append(btnplus)
      ShopingItemDiv.append(btnplusDiv)



      let mytitale = cart[i].Title
      console.log(mytitale)







      // ShopingItemDiv.append(btmMin)
      const inputshDiv = $(`<div class=""></div>`)
      inputshDiv.append(mytitale)

      ShopingItemDiv.append(inputshDiv)


      btnplusDiv.append(btnplus)
      ShopingItemDiv.append(btnplusDiv)






      const priceDiv = $(`<div class=""></div>`)
      const nubberDiv = $(`<div class=""></div>`)
      //  m = JSON.parse(cart[i])

      nubberDiv.append(countAdd= cart[i].count)
      priceDiv.append(PriceAdd=cart[i].price)
      ShopingItemDiv.append(nubberDiv)
      ShopingItemDiv.append(priceDiv)

      const deletDiv = $(`<div class=""></div>`)

      const btmDeleteAll = $(`<button class="btndanger">Delete</button>`)
      deletDiv.append(btmDeleteAll)
     



      const totalDiv = $(`<div class=""></div>`)


      
      let total = (cart[i].count) * (cart[i].price)
      
      totalDiv.append(total)
      ShopingItemDiv.append(totalDiv)
      ShopingItemDiv.append(deletDiv)
      
      btmMin.on("click", function () {
         DletOneItem(mytitale,total)
      })

      btnplus.on("click", (e) => {
         debugger
          addOneItem(mytitale,total)
        
      //   totalDiv.append(total)

        

      })

      btmDeleteAll.on("click", function () {
         debugger
         remove(mytitale,total)

      })



     
      ShopingDiv.append(ShopingItemDiv)
   }

   const checkOutDiv = $(`<div class=""></div>`)
   const btnOutcheck = $(`<button class="btncheck">CheckOut</button>`)

checkOutDiv.append(btnOutcheck)
ShopingDiv.append(checkOutDiv)
const checkOutLableDiv = $(`<div class=""></div>`)
const checkOutLable = $(`<label class="totalLableSum" for=""></label>`)
checkOutLableDiv.append(checkOutLable)
//checkOutDiv.append(checkOutLable
//)
ShopingDiv.append(checkOutLableDiv)
btnOutcheck.on("click",()=>{
   checkOutFun()
   
   
   })
}



const addOneItem=(title,total)=>{
   for(i=0;i<cart.length;i++)
   if(cart[i].Title==title){
    debugger
   // total = total + PriceAdd
 
  
    cart[i].count=cart[i].count+1
  localStorage.setItem("myBookList", JSON.stringify(cart));

    shoopingFun()
    checkoutArray.push(total)
}
}

const DletOneItem=(title,total)=>{
   for(i=0;i<cart.length;i++){
   if(cart[i].Title==title){
    debugger
   // total = total + PriceAdd
    
  
    cart[i].count=cart[i].count-1
  localStorage.setItem("myBookList", JSON.stringify(cart));

    shoopingFun()
    checkoutArray.push(total)
}}
}


const remove =(title,total)=>{
   debugger
   for(i=0;i<cart.length;i++){
     
      cart= cart.filter((elem,I)=>{
     return elem.Title!=title
     localStorage.setItem("myBookList", JSON.stringify(cart));
      shoopingFun()

   })
   }
   localStorage.setItem("myBookList", JSON.stringify(cart));
      shoopingFun()
      checkoutArray.push(total)
}

const checkOutFun=()=>{
 
debugger

let m= checkoutArray.reduce((acc, onTotle )=>{
  return acc=acc+onTotle
   
   
   },0)

   
   $(".totalLableSum").text(m)

}


