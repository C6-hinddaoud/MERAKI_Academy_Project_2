 const conten=  $(".contener")
 const headDiv= $(`<div class="head main ">head </div>`)
 const spDiv= $(`<div class="sp main"> sp</div>`)
 const contentDiv= $(`<div class="content main "> content</div>`)
 const footerDiv= $(`<div class="footer main">footer </div>`)

 
 conten.append(headDiv)
 conten.append(spDiv)
 conten.append(contentDiv)
 conten.append(footerDiv)
 const cat1= $(`<div class="spA"> A</div>`)
 const cat2= $(`<div class="spB"> B</div>`)
 const cat3= $(`<div class="spC"> C</div>`)
 const cat4= $(`<div class="spD"> D</div>`)
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




 let arrayBooks=[{category:"Historical Fiction",id:1,description:"description",Title:"title",price:5 +"jd"}]