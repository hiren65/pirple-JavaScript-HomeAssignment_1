/*
*My Fevourite Song Atributes
*/
//here is atributes in the form of variable for Song
var artist,title,genre,durationInSeconds,awardsInNumber,isGrammyAward,language;

//create object containing all declared variable containing atributes
var myFevoriteSongAtributes = {
  artist,
  genre,
  durationInSeconds,
  awardsInNumber,
  isGrammyAward,
  language
};
var addToMyFevouriteSong = function(artist,title,genre,durationInSeconds,awardsInNumber,isGrammyAward,language){
   this.artist =  typeof(artist)=="string" ? artist : artist + " not string" ;
   this.title = typeof(title)=="string" ? title : title + " not string" ;
   this.genre = typeof(genre)=="string" ? genre : genre + " not string" ;
   this.durationInSeconds = typeof(durationInSeconds) == "number" ? durationInSeconds : durationInSeconds + " not number ";
   this.awardsInNumber = typeof(awardsInNumber)=="number" ? awardsInNumber : awardsInNumber + " not number" ;
   this.isGrammyAward = typeof(isGrammyAward)=="boolean" ? isGrammyAward : isGrammyAward + " not in boolean" ;
   this.language = typeof(language)=="string" ? language : language + " not string" ;;
    myFevoriteSongAtributes.artist = this.artist;
    myFevoriteSongAtributes.genre = this.genre;
    myFevoriteSongAtributes.durationInSeconds = this.durationInSeconds;
    myFevoriteSongAtributes.awardsInNumber = this.awardsInNumber;
    myFevoriteSongAtributes.isGrammyAward = this.isGrammyAward;
    myFevoriteSongAtributes.language = this.language;
}
/*you can create your own fevourite song detail by following way of
calling addToMyFevouriteSong function
*/
addToMyFevouriteSong("michel","Thriller","pop",12,3,true,'eng');

console.log(myFevoriteSongAtributes.artist);

console.log(myFevoriteSongAtributes.durationInSeconds);
console.log(myFevoriteSongAtributes.isGrammyAward);
