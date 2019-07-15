$(document).ready(function(){
    var correctcount = 0;
    var wrongcount = 0;
    var t = 10;
    var inter;

    function counter(){
        t--;
        $("#timebody").html("Remaining time (seconds) : " + t);
        if(t == 0){
            gameover();
        }
    }
    function gamestart(){
        $("body").prepend(`<div id="timebody">Remaining time (seconds) : 120</div>`);
        $("#gamebody").prepend(
        `<form>
            <p>test question:</p>
            <input type="radio" name="0" value="false"> test<br>
            <input type="radio" name="0" value="true"> right<br>
            <input type="radio" name="0" value="false"> wrong<br>  
            <p>test question:</p>
            <input type="radio" name="1" value="true"> right<br>
            <input type="radio" name="1" value="false"> wrong<br>
            <input type="radio" name="1" value="false"> wrong<br>  
            <p>test question:</p>
            <input type="radio" name="2" value="true"> right<br>
            <input type="radio" name="2" value="false"> wrong<br>
            <input type="radio" name="2" value="false"> wrong<br>  
            <p>test question:</p>
            <input type="radio" name="3" value="true"> right<br>
            <input type="radio" name="3" value="false"> wrong<br>
            <input type="radio" name="3" value="false"> wrong<br>  
            <p>test question:</p>
            <input type="radio" name="4" value="true"> right<br>
            <input type="radio" name="4" value="false"> wrong<br>
            <input type="radio" name="4" value="false"> wrong<br>  
            <p>test question:</p>
            <input type="radio" name="5" value="true"> right<br>
            <input type="radio" name="5" value="false"> wrong<br>
            <input type="radio" name="5" value="false"> wrong<br>  
            <p>test question:</p>
            <input type="radio" name="6" value="true"> right<br>
            <input type="radio" name="6" value="false"> wrong<br>
            <input type="radio" name="6" value="false"> wrong<br>  
            <p>test question:</p>
            <input type="radio" name="7" value="true"> right<br>
            <input type="radio" name="7" value="false"> wrong<br>
            <input type="radio" name="7" value="false"> wrong<br>  
            <p>test question:</p>
            <input type="radio" name="8" value="true"> right<br>
            <input type="radio" name="8" value="false"> wrong<br>
            <input type="radio" name="8" value="false"> wrong<br>  
            <p>test question:</p>
            <input type="radio" name="9" value="true"> right<br>
            <input type="radio" name="9" value="false"> wrong<br>
            <input type="radio" name="9" value="false"> wrong<br>  
        </form>`);
        inter = setInterval(counter, 1000);
        $("#start").remove();
        $("#finish").show();
    }
    function gameover(){

        for(var i = 0; i < 10; i++){
            var name = "input[name=" + i + "]:checked";
            if ($(name).val() == "true"){
                correctcount++;
            }
            else{
                wrongcount++;
            }
        }
        clearInterval(inter);
        $("#result").html(`<div> Correct Answers : ${correctcount} </div><div> Wrong Answers : ${wrongcount} </div>`);
        $("#gamebody").html("");
        $("#timebody").html("Finished! Good job!");
    }
    $("#finish").hide();
    $("#start").on("click", gamestart);
    $("#finish").on("click", gameover);
})