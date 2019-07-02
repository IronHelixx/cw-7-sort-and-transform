//function sortTransform(a){
  //
//}

function sortTransform(a){
  let first = transform(a);
  let second = transform(a.sort((a,b) => a - b));
  let third = transform(a.sort((a,b) => b - a));
  return `${first}-${second}-${third}-${second}`;
}

let transform = (arr) => [...arr.slice(0,2), ...arr.slice(arr.length - 2)].map(a => String.fromCharCode(a)).join('');
