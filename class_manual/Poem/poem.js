$("#info").html("<p>Extra info here</p>");

$.getJSON("poem.json", function(data){
    let poemText;                  //this is a new variable that will contain all the text
    poemText = "<blockquote><p>";  //open quotes

    data.lines.map(function(line){      //.lines is a property - mapping=iterating
     let lineText = "";  //defining a blank line
      line.map(function (word){
        let wordString;
        wordString = word.text;
        if (word.info){
            wordString = "<a href = '#' data-info='" + word.info + "'>" + wordString + "</a>";
        } 
      //  if (word.wiki){   //added [remove if necessary]
      //      wordString = "<a href = '#' data-wiki='" + word.wiki + "'>" + wordString + "</a>"; //added [remove if needed]
     //   } //added [remove if needed]
        lineText = lineText + wordString + " ";
    });

    poemText = poemText + lineText + "<br/>";
    });

$("#wiki").html("<p>Wiki info here</p>");   //added [remove if necessary]
$.getJSON("poem.json", function(data){
    let poemText1;                  //this is a new variable that will contain all the text
    poemText1 = "<blockquote><p>";  //open quotes

    data.lines.map(function(line){      //.lines is a property - mapping=iterating
    let lineText1 = "";  //defining a blank line
    line.map(function (word){
        let wordString1;
        wordString1 = word.text;
        if (word.wiki){
            wordString1 = "<a href = '#' data-wiki='" + word.wiki + "'>" + wordString1 + "</a>";
        };
      //  if (word.wiki){   //added [remove if necessary]
      //      wordString = "<a href = '#' data-wiki='" + word.wiki + "'>" + wordString + "</a>"; //added [remove if needed]
     //   } //added [remove if needed]
        lineText1 = lineText1 + wordString1 + " ";
    });

    poemText1 = poemText1 + "</p></blockquote>"; 
});

//now replace the content of the poem
$("#poem").html(poemText);

$("#poem a").click(function(){
    let infoText, clickedWord, clickedInfo; //infoText2; //clickedWiki; //added clickedWiki [remove if needed]
    clickedWord = $( this ).text();
    clickedInfo = $( this ).data("info");
   // clickedWiki = $( this ).data("wiki"); //added [remove if needed]
    infoText = clickedInfo;
   // infoText2 = clickedWiki; //added [remove if needed]
    $("#info").html(infoText);
  //  $("#wiki").html(infoText2); //added [remove if needed]
    });
    $("#poem").html(poemText);
});

$("#poem").html(poemText1);

$("#poem a").click(function(){
    let infoText1, clickedWord1, clickedWiki; //added clickedWiki [remove if needed]
    clickedWord1 = $( this ).text();
    clickedWiki = $( this ).data("wiki");
    // clickedWiki = $( this ).data("wiki"); //added [remove if needed]
    infoText1 = clickedWiki;
    // infoText2 = clickedWiki; //added [remove if needed]
     $("#wiki").html(infoText1);
    //  $("#wiki").html(infoText1); //added [remove if needed]
    });
    $("#poem").html(poemText1);
});
