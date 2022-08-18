let arrayBooks=[{category:"Historical Fiction",id:1,description:"description1",Title:"title1",price:5 +"jd",src:"./images/book3"}
,{category:"Historical Fiction",id:2,description:"description1",Title:"title1",price:5 +"jd",src:"./images/book4"}




,{category:"Adventure",id:3,description:"description2",Title:"title2",price:15 +"jd",src: "./images/book1"}

,{category:"Adventure",id:4,description:"description2",Title:"title2",price:15 +"jd",src:"./images/book2"}

,{category:"Classics",id:5,description:"description3",Title:"title3",price:25 +"jd",src:"./images/book4"}


,{category:"Classics",id:6,description:"description3",Title:"title3",price:25 +"jd",src:"./images/book4"}

,{category:"Literary Fiction",id:7,description:"description4",Title:"title4",price:35 +"jd",src:"./images/book4"}

,{category:"Literary Fiction",id:8,description:"description4",Title:"title4",price:35 +"jd",src:"./images/book4"}
]


 
 
 
 
 
 
 
 
 
 
 const conten=  $(".contener")
 const headDiv= $(`<div class="head main ">head </div>`)
 const spDiv= $(`<div class="sp main"> </div>`)
 const contentDiv= $(`<div class="content main "> content</div>`)
 const footerDiv= $(`<div class="footer main">footer </div>`)

 
 conten.append(headDiv)
 conten.append(spDiv)
 conten.append(contentDiv)
 conten.append(footerDiv)
 
 //===============================================================================================

//functions






 const adv= AdventureFun=()=>{
    //debugger

return arrayBooks.filter((book,index)=>{

 return book.category==="Adventure"
   


}
)
}

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










//const catHistorical=[]
const HistoricalFun=()=>{
    //debugger
console.log(":?kik")
return arrayBooks.filter((book,index)=>{
 return book.category==="Historical Fiction"
 


}
)
}
//=========histoy book function
const cat1= $(`<div class="spA"><h3 class="hi">Historical Fiction</h3> </div>`)

 const HistoricalEvent=$(".spA")
 HistoricalEvent.on("click",HistoricalFun)
 
 //=========adventure book function
 
 const cat2= $(`<div class="spB"><h3>Adventure<h3> </div>`)
 



 const adventEvent=$(".spA")
 adventEvent.on("click",AdventureFun)






 const cat3= $(`<div class="spC"><h3>Classics<h3> </div>`)
 const cat4= $(`<div class="spD"> <h3>Literary Fiction<h3></div>`)
 spDiv.append(cat1)
 spDiv.append(cat2)
 spDiv.append(cat3)
 spDiv.append(cat4)


 const can1= $(`<div class="conBook1"> AB</div>`)
 const can2= $(`<div class="conBook2"> BB</div>`)
 const can3= $(`<div class="conBook3"> CB</div>`)
 const can4= $(`<div class="conBook4"> DB</div>`)
 contentDiv.append(can1)
 contentDiv.append(can2)
 contentDiv.append(can3)
 contentDiv.append(can4)


 const head1= $(`<div class="head1"> AB</div>`)
 const head2= $(`<div class="head2"> BB</div>`)
 const head3= $(`<div class="head3"> CB</div>`)
 const head4= $(`<div class="head4"> DB</div>`)
 const head5= $(`<div class="head4"> DB</div>`)
 headDiv.append( head1)
 headDiv.append( head2)
 headDiv.append( head3)
 headDiv.append( head4)
 headDiv.append( head5)



