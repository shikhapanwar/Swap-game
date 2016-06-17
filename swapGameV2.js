$(document).ready( function(){
  
$(".c1").css("background-color","#A50000");
$(".c2").css("background-color", "#D70000");
$(".c3").css("background-color", "#FF3232");


$.fn.toggle_class= function()
  {        
         if($(this).hasClass("focussed")==true)
            {
              $(this).toggleClass("focussed");
              return this;
            }

          else{
            if($(".focussed").length==2)
            {
              $(".focussed").toggleClass("focussed");
            }

            this.toggleClass("focussed");

            return this;
          }
  }

$.fn.randomize=function(){
            $(this).children().children().removeClass('c1 c2 c3 r1 r2 r3' );
            var divs = $(this).children().children()  ;
            for(var i = 0; i < divs.length; i++) $(divs[i]).remove();            
            var i = divs.length;
            if ( i == 0 ) return false;
            while ( --i ) {
               var j = Math.floor( Math.random() * ( i + 1 ) );
               var tempi = divs[i];
               var tempj = divs[j];
               divs[i] = tempj;
               divs[j] = tempi;
             }
            $(divs[0]).addClass("c1");  $(divs[0]).appendTo("#r1"); 
            $(divs[1]).addClass("c2"); $(divs[1]).appendTo("#r1"); 
            $(divs[2]).addClass("c3"); $(divs[2]).appendTo("#r1"); 
            $(divs[3]).addClass("c1");  $(divs[3]).appendTo("#r2"); 
            $(divs[4]).addClass("c2"); $(divs[4]).appendTo("#r2"); 
            $(divs[5]).addClass("c3"); $(divs[5]).appendTo("#r2");
            $(divs[6]).addClass("c1");  $(divs[6]).appendTo("#r3"); 
            $(divs[7]).addClass("c2"); $(divs[7]).appendTo("#r3"); 
            $(divs[8]).addClass("c3"); $(divs[8]).appendTo("#r3");
            $(".focussed").toggleClass("focussed");

            return this;
        }

   
$("#puzzle").randomize();


function swapElements(elm1, elm2) {
    var parent1, next1,
        parent2, next2;

    parent1 = elm1.parentNode;
    next1   = elm1.nextSibling;
    parent2 = elm2.parentNode;
    next2   = elm2.nextSibling;

    parent1.insertBefore(elm2, next1);
    parent2.insertBefore(elm1, next2);
 
    return;
}


$.fn.swp= function()
{
      if($('.focussed').length!=2) 
    { alert("choose two blocks");
      return;
    }
      var editor = $(".focussed")[0];  //put your ids here
      var viewer = $(".focussed ")[1];

      editorContent = $(editor).clone(true);
      viewerContent = $(viewer).clone(true);
      var x, y, z;
      
      $(editor).replaceWith(viewerContent);

    $(viewer).replaceWith(editorContent);
    $(".focussed").toggleClass("focussed");
    $('#puzzle').checkResult();
    
}
//console.log($('#r1').children().first().next().text());


$.fn.checkResult=function(){
  if($('#r1').children().first().text()==1 && $('#r1').children().first().next().text()==2 && $('#r1').children().first().next().next().text()==3 )
  {
    if($('#r2').children().first().text()==4 && $('#r2').children().first().next().text()==5 && $('#r2').children().first().next().next().text()==6 )
    {
      if($('#r3').children().first().text()==7 && $('#r3').children().first().next().text()==8 && $('#r3').children().first().next().next().text()==9)
      {
        alert('Congratulations! task completed');
      }
    }
  }
}
});