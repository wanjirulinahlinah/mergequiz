//Q1 use  both binary search and merge sort  to solve the following array.
//let num = [45,12,6,89,2,5]


function divideArray(num){


if (num.length <=1){
        return num;
    }
    let middle = Math.floor(num.length/2);
    let left =num.slice(0,middle);
    let right=num.slice(middle);
    return sortedNum(divideArray(left),divideArray(right));
}

function sortedNum(left,right){
    let emptyArray=[];
    while(left.length&&right.length){
    if(left[0]<right[0]) {
        emptyArray.push(left.shift());
    } 
    else{
        emptyArray.push((right.shift()));

    }
    
    }
    return[...emptyArray,...left,...right] ;
}
let num =[45,12,6,89,2,5];
console.log(divideArray(num));

function binarysearch(num,target){

    let left=0;
    let right=num.length-1

    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(num[middle]===target){
        return middle;
        }
        else if (num[middle]>target){
        right=middle-1;
    

    }
    else{
left=middle+1;
    }
}``
return null;


}
let numm=[2,5,6,7,47,88];
target =2;
console.log(binarysearch(numm,target));

///title case
let x ='A wonderful world'
let y1=x.split(" ").map(([firstchar,...rest])=>firstchar.toUpperCase("")+rest.join("").toLowerCase()).join(" ")
console.log(y1)

