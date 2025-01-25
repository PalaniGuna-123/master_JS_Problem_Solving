
function vowel(str){
    Vowel="AEIOUaeiou"
    count=0;
    words=str.split(" ")
    for(let i=0;i<words.length;i++){
        if(Vowel.includes(words[i][0])){
            count++
        }
    }
    console.log(count);
}
vowel("Apple orange umbrella")

function insect(str){
    words=str.split(" ");
    let vowels="aeiouAEIOU"
    let count=0
    for(let i=0;i<words.length;i++){
        if(vowels.includes(words[i][0])){
            count++;

        }
    }
    console.log(count);

}
insect("Apple orange umbrella hen")
