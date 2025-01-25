function findvowel(str){
    words=str.split(",")
    let vowel="aeiouAEIOU"
    let count=0;
    for(let i=0;i<words.length;i++){
        if(vowel.includes(words[i][0])){
            count++            
        }
        
    }
console.log(count);


}
findvowel("apple,apricot,umber")


function countVow(str){
    words=str.split(",");
    let count=0;
    vowels="aeiouAEIOU"
    for(let i=0;i<words.length;i++){
        if(vowels.includes(words[i][0])){
            count++;
        }
    }
    console.log(count);
    
}
countVow("apple,apricot,umber")

