$(document).on("click","#x-bu", function(){
var codigo = $("#produ").html();
codigo += "<tr> <td> X-BUGUER </td> <td class='valor'>"+$("#x-bu").val()+"</td></tr>";
$("#produ").html(codigo);

});

$(document).on("click","#x-sa",function(){
var codigo = $("#produ").html();
codigo += "<tr><td> X-SALADA </td><td class='valor'>"+$("#x-sa").val()+"</td></tr>";
$("#produ").html(codigo);

})

$(document).on("click","#x-eg",function(){
var codigo =$("#produ").html();
codigo += "<tr><td>X-EGG</td> <td class='valor'>"+$("#x-eg").val()+"</td></tr>"
$("#produ").html(codigo);

})

$(document).on("click","#x-tu",function(){
var codigo = $("#produ").html();
codigo+="<tr><td>X-TUDO</td><td class='valor'>"+$("#x-tu").val()+"</td></tr>"
$("#produ").html(codigo);
})


$(document).on("click","#bau",function(){
var codigo = $("#produ").html();
codigo += "<tr><td>BAURU</td><td class='valor'>"+$("#bau").val()+"</td></tr>"
$("#produ").html(codigo);
});

$(document).on("click","#mis",function(){
var codigo = $("#produ").html()
codigo+= "<tr><td>MISTO</td><td class='valor'>"+$("#mis").val()+"</td></tr>"
$("#produ").html(codigo);


});

$(document).on("click","#cav",function(){
var codigo = $("#produ").html();
codigo += "<tr><td>CAVALO BRANCO</td> <td class ='valor'>" +$("#cav").val()+"</td></tr>"
$("#produ").html(codigo);

});

$(document).on("click","#jur", function(){
var codigo = $("#produ").html();
codigo +="<tr><td>JURUPINGA</td><td class = 'valor'>" +$("#jur").val()+"</td></tr>"
$("#produ").html(codigo);

})

$(document).on("click","#reb",function(){
var codigo = $("#produ").html();
codigo +="<tr><td>RED BULL</td><td class ='valor'>"+$("#reb").val()+"</td></tr>"
$("#produ").html(codigo);

})

$(document).on("click","#pep",function(){
var codigo = $("#produ").html();
codigo += "<tr><td>PEPSI LIMAO</td><td class='valor'>" +$("#pep").val()+"</td></tr>"
$("#produ").html(codigo);

});

$(document).on("click","#fau",function(){
var codigo = $("#produ").html();
codigo += "<tr><td>FANTA UVA</td><td class ='valor'>"+$("#fau").val()+"</td></tr>"
$("#produ").html(codigo);

})

$(document).on("click","#fal",function(){
var codigo = $("#produ").html();
codigo += "<tr><td>FANTA LARANJA</td><td class ='valor'>" +$("#fal").val()+"</td></tr>"
$("#produ").html(codigo);

})

$(document).on("click", "#fechar", function(){
  var total =0;
  $(".valor").each(function(index,element){
    total += parseFloat($(element).text());

  });
  $("#resultado").text("R$"+total);

});
