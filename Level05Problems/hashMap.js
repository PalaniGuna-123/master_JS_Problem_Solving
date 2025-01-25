function map(str){
    let arr=str.split('')
    let hashMap={}

    for(let i=0;i<arr.length;i++){
        if(!hashMap[arr[i]]){
            hashMap[arr[i]]=1;

        }
        else{
            hashMap[arr[i]]+=1;
        }
    }
    console.log(hashMap);

    for(let el in hashMap){
        console.log(el,hashMap[el]);
        
    }  
}
map('avsaappgggkkkk')
function map(str){
    let arr=str.split("")
    let hashMap={}
    for(let i=0;i<arr.length;i++){
        if(!hashMap[arr[i]]){
           hashMap[arr[i]]=1;
        }
        else{
            hashMap[arr[i]]+=1
        }
    }
    console.log(hashMap);
    let strs="";
    for(let el in hashMap){
        strs+=el+hashMap[el]
    }
    char=Object.keys(hashMap).join('');
    console.log(strs);
    console.log(char);
    
    
}
map('avvsaappgggkkkk')





///##################################################################///


function map(str) {
    let arr = str.split('');
    let hashMap = {};

    for (let i = 0; i < arr.length; i++) {
        if (!hashMap[arr[i]]) {
            hashMap[arr[i]] = 1;
        } else {
            hashMap[arr[i]] += 1;
        }
    }

    let frequencyString = '';
    for (let el in hashMap) {
        frequencyString += el + hashMap[el];
    }
    let uniqueCharacters = Object.keys(hashMap).join('');

    console.log(frequencyString); 
    console.log(uniqueCharacters); 
}

map('avsaappgggkkkk');
