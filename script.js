//your code here
let arr=[
	"The Virupaksha Temple",
	"Victoria Memorial",
	"Tajmahal",
];
let articleLessArray=[];

let mp={};

for(let i=0;i<arr.length;i++){
	let articleLessItem=arr[i].replace(regexp,"").trim();
	articleLessArray.push(articleLessItem);
	mp[articleLessItem]=arr[i];
}
articleLessArray.sort();

let ans=[];
for(let i of articleLessArray){
	ans.push(mp[i]);
}
console.log(ans);
