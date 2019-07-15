$(document).ready(function(){
 // -------- Variables ----------
 // correctcount, wrongcount : count of player wins and loses
 // t : initialized with 120 seconds of game time
 // inter : container variable for setInterval()
    var correctcount = 0;
    var wrongcount = 0;
    var t = 120;
    var inter;

// --------- Functions -----------
// counter: on every call, decrement number of remaining secionds by 1 and update html accordingly.
//          If remaining time is 0, run gameover(). (end game condition)
    function counter(){
        t--;
        $("#timebody").html("Remaining time (seconds) : " + t);
        if(t == 0){
            gameover();
        }
    }
// gamestart: inject time counter (div) and questions (form) into the body   
//            set interval on counter() every 1 second.
//            remove start button and show finish button.
    function gamestart(){
        $("#gamebody").prepend(
        `<div id="timebody">Remaining time (seconds) : 120</div>
        <form>
            <p>Which one is NOT a novel of Shakespeare?</p>
            <input type="radio" name="0" value="false"> Hamlet<br>
            <input type="radio" name="0" value="true"> Twilight<br>
            <input type="radio" name="0" value="false"> Taming of the Shrew<br>  
            <p>Who is the wife of Barak Obama?</p>
            <input type="radio" name="1" value="true"> Michelle Obama<br>
            <input type="radio" name="1" value="false"> Jesse Obama<br>
            <input type="radio" name="1" value="false"> Obama Whatever<br>  
            <p>Who discovered Insulin?</p>
            <input type="radio" name="2" value="false"> Barak Obama<br>
            <input type="radio" name="2" value="true"> Frederick Benting<br>
            <input type="radio" name="2" value="false"> George Washington<br>  
            <p>Which country invented pizza?</p>
            <input type="radio" name="3" value="false"> France<br>
            <input type="radio" name="3" value="false"> Turkey<br>
            <input type="radio" name="3" value="true"> Italy<br>  
            <p>Who is the owner of Facebook?</p>
            <input type="radio" name="4" value="false"> Mark Suckerberg<br>
            <input type="radio" name="4" value="false"> Steve Jobs<br>
            <input type="radio" name="4" value="true"> Mark Zuckerberg<br>  
            <p>When was Google founded?</p>
            <input type="radio" name="5" value="true"> 1998<br>
            <input type="radio" name="5" value="false"> 2019<br>
            <input type="radio" name="5" value="false"> 1989<br>  
            <p>Which year was angry bird created?</p>
            <input type="radio" name="6" value="false"> 1985<br>
            <input type="radio" name="6" value="true"> 2009<br>
            <input type="radio" name="6" value="false"> 2013<br>  
            <p>What does HTML stand for?</p>
            <input type="radio" name="7" value="true"> Hypertext Markup Language<br>
            <input type="radio" name="7" value="false"> Hyper Technology Mashup Language<br>
            <input type="radio" name="7" value="false"> HoT Mother L... ah, never mind<br>  
            <p>What is the newest game from CDprojekt RED?</p>
            <input type="radio" name="8" value="false">The Witcher II<br>
            <input type="radio" name="8" value="false">Gwent <br>
            <input type="radio" name="8" value="true">CYBERPUNK 2077<br>  
            <p>What is the Chemical symbol of Iron?</p>
            <input type="radio" name="9" value="false"> I<br>
            <input type="radio" name="9" value="true"> Fe<br>
            <input type="radio" name="9" value="false"> Ion<br>  
        </form>`);
        inter = setInterval(counter, 1000);
        $("#start").remove();
        $("#finish").show();
    }
// gameover : for each checked answers, see if value is true. If it is, increment correctcount
//            else (false or no input) increment wrongcount;
//            clear out interval and inject result on result section of html.
//            remove form and finish button. Add congratulating message to timer    
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
        $("form").remove();
        $("#finish").remove();
        $("#timebody").html("Finished! Good job!");
    }
// hide finish button until start button is pressed
// when start button is clicked, game begins
// when finish button is clicked, game ends.   
    $("#finish").hide();
    $("#start").on("click", gamestart);
    $("#finish").on("click", gameover);
})