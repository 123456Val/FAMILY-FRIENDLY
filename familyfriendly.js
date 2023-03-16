var familia=["https://media.istockphoto.com/id/1324653833/photo/happy-parents-having-fun-while-piggybacking-their-small-kids-in-nature.jpg?b=1&s=170667a&w=0&k=20&c=bYs5LHKUltsm_wLkKN4aBPJdDgerfPlIslIIfNVXv80=","http://cdn2.hubspot.net/hubfs/533390/Blogs_Fotos/Familia_y_Sociedad/Familia-Hospitalidad.jpg","https://medlineplus.gov/images/FamilyHistory_share.jpg"];
var numeros=0;
function accion(){
numeros++;
document.getElementById("album").src=familia[numeros];
if(numeros>3){
numeros=0
};
}
