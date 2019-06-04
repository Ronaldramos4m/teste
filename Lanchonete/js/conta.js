$(document).on("click","#ins",function(){
var desconta = $("#dsconta").val();
var vlconta = $("#vlconta").val();
var codigo = $("#pla").html();
codigo +="<tr><td>"+$("#dsconta").val()+"</td><td class='valor'>"+$("#vlconta").val()+"</td></tr>"
$("#pla").html(codigo);
})

$(document).on("click", "#fechar", function(){
  var valores = new Array();
  var viu = "";
  var total =0;
  var media =0;
  var fecha = $("#fechar");
  $(".valor").each(function(index,element){
    viu += "Indice "+index + 'valor elemento:' + $(element).html();
    total += parseFloat($(element).html());
    valores[index] = parseFloat($(element).html());
    media = total / fecha;
  });
  $("#resultado").text("R$"+total);
  $("#resultad").text("R$"+Math.max.apply(Math,valores));
  $("#resulta").text("R$"+Math.min.apply(Math,valores));
  $("#result").text("R$"+media);

});
