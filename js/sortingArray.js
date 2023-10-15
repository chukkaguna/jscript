let arr=[6,1,8,2,3,7,4,5]
for(let i=0;i<=arr.length;i++){
    for(let j=i+1;j<=arr.length;j++){
        if(arr[i]<arr[j]){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
for(let i=0;i<=arr.length-1;i++){
     console.log(arr[i]);
}