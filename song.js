/*
*My Fevourite Song Atributes
*/
//here is atributes in the form of variable for Song
var artist,title,genre,durationInSeconds,awardsInNumber,isGrammyAward,language;

//create object containing all declared variable containing atributes
var myFevoriteSongAtributes = {
  //string Input
  artist,
  //string Input
  title,
  //string Input
  genre,
  //number Input
  durationInSeconds,
  //number Input
  awardsInNumber,
  // boolean input
  isGrammyAward,
  //string input
  language
};
var addToMyFevouriteSong = function(artist,title,genre,durationInSeconds,awardsInNumber,isGrammyAward,language){
   this.artist =  typeof(artist)=="string" ? artist : artist + "input is not string" ;
   this.title = typeof(title)=="string" ? title : title + "input is not string" ;
   this.genre = typeof(genre)=="string" ? genre : genre + "input is not string" ;
   this.durationInSeconds = typeof(durationInSeconds) == "number" ? durationInSeconds : durationInSeconds + "input is not number ";
   this.awardsInNumber = typeof(awardsInNumber)=="number" ? awardsInNumber : awardsInNumber + "Input is not number" ;
   this.isGrammyAward = typeof(isGrammyAward)=="boolean" ? isGrammyAward : isGrammyAward + "input is not in boolean" ;
   this.language = typeof(language)=="string" ? language : languagegit  + "input is not string" ;;
    myFevoriteSongAtributes.artist = this.artist;
    myFevoriteSongAtributes.title = this.title;
    myFevoriteSongAtributes.genre = this.genre;
    myFevoriteSongAtributes.durationInSeconds = this.durationInSeconds;
    myFevoriteSongAtributes.awardsInNumber = this.awardsInNumber;
    myFevoriteSongAtributes.isGrammyAward = this.isGrammyAward;
    myFevoriteSongAtributes.language = this.language;
};
/*you can create your own fevourite song detail by following way of
calling addToMyFevouriteSong function
*/
addToMyFevouriteSong("michel","Thriller","pop",12,3,true,'eng');
console.log("//////////created Fevourite Song`s atributes calling function //////////////// \n");
console.log(myFevoriteSongAtributes.artist);
console.log(myFevoriteSongAtributes.title);
console.log(myFevoriteSongAtributes.genre);
console.log(myFevoriteSongAtributes.durationInSeconds);
console.log(myFevoriteSongAtributes.awardsInNumber);
console.log(myFevoriteSongAtributes.isGrammyAward);
console.log(myFevoriteSongAtributes.language);

/*
Now you can also directly chanhe or assigned Atributes
by assidning variables and calling addToMyFevouriteSong
following way
*/
artist = "Bon Jovie";
title = "Buffelo Solder";
genre = "jazz";
durationInSeconds = 13;
awardsInNumber = 5;
isGrammyAward = true;
language = "eng";
console.log("//////////directly calling atribute variables //////////////// \n");
addToMyFevouriteSong(artist,title,genre,durationInSeconds,awardsInNumber,isGrammyAward,language);
console.log(title);
var i = 0;
for(var atribute in myFevoriteSongAtributes){
    console.log(myFevoriteSongAtributes[atribute]);
}
