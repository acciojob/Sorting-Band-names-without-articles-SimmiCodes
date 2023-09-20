let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let articleLessArray = [];

let regexp = /\b(the|an|a)\b/gi;

for (let i = 0; i < arr.length; i++) {
    // Remove articles and trim whitespace
    let temp = arr[i].replace(regexp, '').trim();
    articleLessArray.push(temp);
}

let mapping = {};
for (let i = 0; i < arr.length; i++) {
    mapping[articleLessArray[i]] = arr[i];
}

articleLessArray.sort();

let ul = document.getElementById('band');
articleLessArray.forEach(function (name) {
    let li = document.createElement('li');
    li.textContent = mapping[name];
    ul.appendChild(li);
});
