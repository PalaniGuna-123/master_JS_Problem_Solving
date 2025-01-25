function shell(arr){
    let n=arr.length;
    let gap=Math.floor(n/2);
    while(gap>0){
        for(i=gap;i<n;i++){
            let temp=arr[i];
            let j=i;
            while(j>=gap  && arr[j-gap]>temp){
                arr[j]=arr[j-gap]
                j-=gap;
            }
            arr[j]=temp;
        }
        
    }
}
function shellSort(arr) {
    let n = arr.length;
    let gap = Math.floor(n / 2); 
    while (gap > 0){
        for (let i = gap; i < n; i++) {
            let temp = arr[i]; 
            let j = i;
            while (j >= gap  && arr[j - gap] > temp){
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = temp; 
        }

        gap = Math.floor(gap / 2); 
    }
    console.log(gap); 
}
function shell(arr){
    let n=arr.length;
    let gap=Math.floor(n/2);
    
}


function shell(arr){
    let n=arr.length;
    gap=Math.floor(n/2)
        while(gap>0){
            for(let i=gap;i<n;i++){
                let temp=arr[i]
                let j=i;
                while(j>=gap   && arr[j-gap]>temp){
                    arr[j]=arr[j-gap]
                    j-=gap;
                }
                arr[j]=temp;
             
            }
            gap=Math.floor(gap/2)

        }
    
}