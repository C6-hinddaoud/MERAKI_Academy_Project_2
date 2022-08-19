let arrayBooks=[{category:"Historical Fiction",id:1,description:"description1",Title:"title1",price:5 ,src:"./images/book3.png"}
,{category:"Historical Fiction",id:2,description:"description1",Title:"title1",price:5 ,src:"./images/book4.png"}




,{category:"Adventure",id:3,description:"description2",Title:"title2",price:15 ,src: "./images/book1.png"}

,{category:"Adventure",id:4,description:"description2",Title:"title2",price:15 ,src:"./images/book2.png"}

,{category:"Classics",id:5,description:"description3",Title:"title3",price:25 ,src:"./images/book5.png"}


,{category:"Classics",id:6,description:"description3",Title:"title3",price:25 ,src:"./images/book7.png"}

,{category:"Literary Fiction",id:7,description:"description4",Title:"title4",price:35 ,src:"./images/book8.png"}

,{category:"Literary Fiction",id:8,description:"description4",Title:"titnew",price:35 ,src:"./images/book4.png"}
]



 
 

 
 
 


 
 
 const conten=  $(".contener")
 const headDiv= $(`<div class="head main "></div>`)
 const spDiv= $(`<div class="sp main"> </div>`)
 const contentDiv= $(`<div class="content main "> </div>`)
 const footerDiv= $(`<div class="footer main">footer </div>`)

 
 conten.append(headDiv)
 conten.append(spDiv)
 //content div
 conten.append(contentDiv)
 conten.append(footerDiv)
 
 //===============================================================================================
 //searchFunction


 




 










 
 const searchFun=(search)=>{
//debugger
$(".display").hide();
   
$(".content").show()
$(".content").empty()
    for(i=0;i<arrayBooks.length;i++){
    
   if(search.toUpperCase()==arrayBooks[i].Title.toUpperCase()){
    console.log("hind")
   // $(".content").empty()
        const content=$(".content")
  
  
         const DivContent= $(`<div class="DivContent ">
         </div>`)
  
         const imgDiv=$(`<img >`)
         imgDiv.addClass("gridImg")
         
         // <div><img class=imgbook></div>
         imgDiv.attr('src',arrayBooks[i].src)
         //imgDiv.attr('class',"gridImg")
         DivContent.append(imgDiv)
         const DiveTitle=$(`<div></div>`)
         const title=$(`<h3></h3>`)
         DivContent.append(DiveTitle)
         DiveTitle.append(title)
         title.text(arrayBooks[i].Title)
         const DivePrice=$(`<div></div>`)
         const price=$(`<h3></h3>`)
         DivContent.append(DivePrice)
         DivePrice.append(price)
         price.text(arrayBooks[i].price+ "JD")
         
  
  
  
         const DiveSeeMore=$(`<div> </div>`)
         const btnSeeMore=$(`<button>see more</button>`)

         btnSeeMore.attr('id', arrayBooks[i].id);
         DivContent.append(DiveSeeMore)
         DiveSeeMore.append(btnSeeMore)
         
  
  
         btnSeeMore.on("click",function(e){
            console.log(e)
            console.log("r")
            console.log(e.target.id)
            objectId=e.target.id
            //console.log(this)
            //console.log($(this))
          //  console.log($(this).parent())

            //console.log($(this).parent().children())
           displyFun(objectId)
        })


       
  
  
  
         content.append(DivContent)
  
  
   }
  
  
    }

    

}





//contentDiv.append(divSearch)



//functions
arrayhistory=[]
arrayAdven=[]
const mainFun=(categ)=>{
    console.log("hind")
    //debugger
    $(".display").hide();
    $(".content").show()
  //  $(".main").show()
    $(".content").empty()
   
    for(i=0;i<arrayBooks.length;i++){
    if(arrayBooks[i].category==categ){
       const content=$(".content")
        const DivContent= $(`<div class="DivContent ">
        </div>`)

        const imgDiv=$(`<img>`)
        imgDiv.addClass("gridImg")
        // <div><img class=imgbook></div>
        imgDiv.attr('src',arrayBooks[i].src)
        DivContent.append(imgDiv)
        const DiveTitle=$(`<div></div>`)
        const title=$(`<h3></h3>`)
        DivContent.append(DiveTitle)
        DiveTitle.append(title)
        title.text(arrayBooks[i].Title)
        const DivePrice=$(`<div></div>`)
        const price=$(`<h3></h3>`)
        DivContent.append(DivePrice)
        DivePrice.append(price)
        price.text(arrayBooks[i].price +" JD")
        



        const DiveSeeMore=$(`<div > </div>`)
        const btnSeeMore=$(`<button class="seeMoreclass" >see more</button>`)


        btnSeeMore.attr('id', arrayBooks[i].id);
       // btnSeeMore.addClass="seeMoreclass"
        DivContent.append(DiveSeeMore)
        DiveSeeMore.append(btnSeeMore)
        

        //const btnSeeMore=$(".seeMoreclass")
        btnSeeMore.on("click",function(e){
            console.log(e)
            console.log(e.target.id)
            objectId=e.target.id
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





const displyFun= function (objId){
    console.log(objId)
    //$(".content").empty()
   // $(".content").show()
   $(".content").hide();

   const dispDiv= $(`<div class="display 
   
   main"> </div>`)

   dispDiv.show();


////


for(i=0;i<arrayBooks.length;i++){
    
    if(objId==arrayBooks[i].id){
     console.log("hind")
   
         const content=$(".content")
   
   
          
   
          const imgDiv=$(`<img >`)
          imgDiv.addClass("gridImg")
          
          // <div><img class=imgbook></div>
          imgDiv.attr('src',arrayBooks[i].src)
          //imgDiv.attr('class',"gridImg")
          dispDiv.append(imgDiv)
          const DiveTitle=$(`<div></div>`)
          const title=$(`<h3></h3`)
          dispDiv.append(DiveTitle)
          dispDiv.append(title)
          title.text(arrayBooks[i].Title)
          let bookTitle=arrayBooks[i].Title

          const DiveDescrption=$(`<div></div>`)
          const Description=$(`<p></p>`)
          dispDiv.append(DiveDescrption)
          DiveDescrption.append(Description)
          Description.text(arrayBooks[i].description)
          



          const DivePrice=$(`<div></div>`)
          const price=$(`<h3></h3`)
          dispDiv.append(DivePrice)
          DivePrice.append(price)
          price.text(arrayBooks[i].price+ " JD")
let bookPrice=arrayBooks[i].price
console.log(bookPrice)
          const countDiv=$(`<div></div>`)
          
        //   const btmMin=$(`<button>-</button>`)

          const inpCoun=$(`<input type="number" min="1"   name="" id="">`)
          inpCoun.attr('id',"inpAdd" +arrayBooks[i].id);
     const inpId="inpAdd"+arrayBooks[i].id
     console.log(inpId)
     
        //   const btnplus=$(`<button>+</button>`)
        //   countDiv.append(btmMin)
          countDiv.append(inpCoun)
          
        //   countDiv.append(btnplus)
          dispDiv.append(countDiv)

          const addDiv=$(`<div></div>`)
          const btnadd=$(`<button class="btnAddClass">Add</button>`)
          addDiv.append(btnadd)
          $(`#${inpId}`).val(1)
         btnadd.on("click",function(){
            console.log("GGGGGG")
          console.log(inpId)
          console.log("GGGGGG")
          add(inpId,bookPrice,bookTitle)
             })
          dispDiv.append(addDiv)
///////


  conten.append(dispDiv)
 

    }}
        
    
        
        
}





let sum=0
const add=function(iptId,bookPrice,bookTitle){
   // debugger
  // const INP=inpId
  
  console.log( iptId)
  

    console.log($("#INP").val())
    console.log($(`#${iptId}`).val())
console.log("ADDDDDDDDDDDDD")
let itemNumber = parseInt($(`#${iptId}`).val())
sum=parseInt(sum)+parseInt(itemNumber)
   $(".spanShooping").text(sum)
   $(`#${iptId}`).val("")
let priceBook=itemNumber*bookPrice
console.log(priceBook)

if(localStorage.hasOwnProperty(bookTitle)){
    
    let  counSum=parseInt( localStorage.getItem(bookTitle))
    console.log(counSum)
   localStorage.setItem(bookTitle,priceBook+counSum)
}else{

    localStorage.setItem(bookTitle,priceBook)

}
}










//  const adv= AdventureFun=()=>{
//     //debugger

// return arrayBooks.filter((book,index)=>{

//  return book.category==="Adventure"
   


// }
// )
// }


const ClassicsFun=()=>{
    //debugger

return arrayBooks.filter((book,index)=>{
 return book.category==="Classics"
 


}
)
}


const LiteraryFun=()=>{
    //debugger

return arrayBooks.filter((book,index)=>{
 return book.category==="Literary Fiction"
 


}
)
}




///////////search

const divSearch=$ (`<div class="searcDiv"></div>`)
const inputSearch =$ (`<input class="inpSearch" type="text" name="" id="">`)
const buttonSearch=$ (`<button class=".btnSearch">search</button>`)
divSearch.append()

divSearch.append(inputSearch)
divSearch.append(buttonSearch)
conten.append(divSearch)


 let searchInput=$(".inpSearch").val()


  let btnSearcgEvent=$(".btnSearch")
  buttonSearch.on("click",function( ){
    console.log("hind")
   
    searchFun($(".inpSearch").val())
 } )



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
const cat1= $(`<div class="spA"><h3 class="hi">Historical Fiction</h3> </div>`)

 
 
 //=========adventure book function
 
 
//  const adventEvent=$(".spA")
//  adventEvent.on("click",mainFun("Adventure"))



const cat2= $(`<div class="spB"><h3>Adventure</h3> </div>`)

const cat3= $(`<div class="spC"><h3>Classics</h3> </div>`)
 
 const cat4= $(`<div class="spD"> <h3>Literary Fiction</h3></div>`)


 

 spDiv.append(cat1)
 spDiv.append(cat2)
 spDiv.append(cat3)
 spDiv.append(cat4)
 const HistoricalEvent=$(".spA")
 HistoricalEvent.on("click",()=>{
    console.log("hind")
   
    mainFun("Historical Fiction")
 } )



 
 

 const AdventureEvent=$(".spB")
 AdventureEvent.on("click",function(){
    mainFun("Adventure")
 } )


 
 const ClassicsEvent=$(".spC")
 ClassicsEvent.on("click",function(){
    mainFun("Classics")
 } )

 const FictionEvent=$(".spD")
 FictionEvent.on("click",function(){
    mainFun("Literary Fiction")
 } )

 













 const can1= $(`<div class="conBook1"> AB</div>`)
 const can2= $(`<div class="conBook2"> BB</div>`)
 const can3= $(`<div class="conBook3"> CB</div>`)
 const can4= $(`<div class="conBook4"> DB</div>`)
//  contentDiv.append(can1)
//  contentDiv.append(can2)
//  contentDiv.append(can3)
//  contentDiv.append(can4)


 const head1= $(`<div class="head1"> AB</div>`)
 const head2= $(`<div class="head2"> BB</div>`)
 const head3= $(`<div class="head3"> CB</div>`)
 const head4= $(`<div class="head4"> DB</div>`)
 const head5= $(`<div class="head5"> 
 <i class="fa fa-shopping-basket" style="font-size:24px;color:blueviolet"></i>
 <SPan class="spanShooping"> </SPan>
 </div>`)
 headDiv.append( head1)
 headDiv.append( head2)
 headDiv.append( head3)
 headDiv.append( head4)
 headDiv.append( head5)


