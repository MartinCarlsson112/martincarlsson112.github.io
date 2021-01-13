function disable_hermit_gameplay()
{
    $("#hermit_gameplay").toggle(false);
    $("#hermit_gameplay_videoplayer").attr('src', '');
}

function disable_arrowhood_gameplay()
{
    $("#arrowhood_gameplay").toggle(false);
    $("#arrowhood_gameplay_videoplayer").attr('src', '');
}

function disable_goblin_doctors_gameplay()
{
    $("#goblin_doctors_gameplay").toggle(false);
    $("#goblin_doctors_gameplay_videoplayer").attr('src', '');
}


$(document).ready(function() {
  $("#hermit_project_button").click(function() {
    if($("#hermit_image").css("display") == $("#hermit_about").css("display"))
        {
            $("#hermit_image").toggle();
        }
    $("#hermit_image").toggle();    
    $("#hermit_about").toggle();
      disable_hermit_gameplay();

  });
});


$(document).ready(function() {
  $("#arrowhood_project_button").click(function() {
    if($("#arrowhood_image").css("display") == $("#arrowhood_about").css("display"))
    {
        $("#arrowhood_image").toggle();
    }
    $("#arrowhood_image").toggle();    
    $("#arrowhood_about").toggle();
    disable_arrowhood_gameplay();
  });
});

$(document).ready(function() {
  $("#goblin_doctors_project_button").click(function() {
    if($("#goblin_doctors_image").css("display") == $("#goblin_doctors_about").css("display"))
    {
        $("#goblin_doctors_image").toggle();
    }
    $("#goblin_doctors_image").toggle();    
    $("#goblin_doctors_about").toggle();
    disable_goblin_doctors_gameplay();
  });
});

var hermit_gameplay_url = "https://www.youtube.com/embed/AA5ZSQ-uefs";
var arrowhood_gameplay_url = "https://www.youtube.com/embed/BEseJw0umeM";
var goblin_doctors_gameplay_url = "https://www.youtube.com/embed/iCs7u_MxkiM";
$(document).ready(function(){
    $("#hermit_gameplay_button").click(function(){
        
        if($("#hermit_image").css("display") == $("#hermit_gameplay").css("display"))
        {
            $("#hermit_image").toggle();
        }
        
        var current_video = $("#hermit_gameplay_videoplayer").attr('src');
        
        if(current_video == '' || current_video == undefined)
        {  
            $("#hermit_gameplay_videoplayer").attr('src', hermit_gameplay_url);
        }
        else
        {
            $("#hermit_gameplay_videoplayer").attr('src', '');
        }

        $("#hermit_image").toggle();
        $("#hermit_about").toggle(false);
        $("#hermit_gameplay").toggle();
    });
});


$(document).ready(function(){
    $("#arrowhood_gameplay_button").click(function(){
        
        if($("#arrowhood_image").css("display") == $("#arrowhood_gameplay").css("display"))
        {
            $("#arrowhood_image").toggle();
        }
        
        var current_video = $("#arrowhood_gameplay_videoplayer").attr('src');
        
        if(current_video == '' || current_video == undefined)
        {  
            $("#arrowhood_gameplay_videoplayer").attr('src', arrowhood_gameplay_url);
        }
        else
        {
            $("#arrowhood_gameplay_videoplayer").attr('src', '');
        }

        $("#arrowhood_image").toggle();
        $("#arrowhood_about").toggle(false);
        $("#arrowhood_gameplay").toggle();
    });
});


$(document).ready(function(){
    $("#goblin_doctors_gameplay_button").click(function(){
        
        if($("#goblin_doctors_image").css("display") == $("#goblin_doctors_gameplay").css("display"))
        {
            $("#goblin_doctors_image").toggle();
        }
        
        var current_video = $("#goblin_doctors_gameplay_videoplayer").attr('src');
        
        if(current_video == '' || current_video == undefined)
        {  
            $("#goblin_doctors_gameplay_videoplayer").attr('src', goblin_doctors_gameplay_url);
        }
        else
        {
            $("#goblin_doctors_gameplay_videoplayer").attr('src', '');
        }

        $("#goblin_doctors_image").toggle();
        $("#goblin_doctors_about").toggle(false);
        $("#goblin_doctors_gameplay").toggle();
    });
});
