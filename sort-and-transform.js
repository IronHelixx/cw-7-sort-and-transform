function sortTransform(z) {
  const getW = w =>
    w
      .slice(0, 2)
      .concat(w.slice(-2))
      .map(i => (typeof i == "number" ? String.fromCharCode(i) : i)).join``;
  return [
    getW(z),
    getW(z.sort((a, b) => a - b)),
    getW(z.sort((a, b) => b - a)),
    getW(z.map(i => String.fromCharCode(i)).sort())
  ].join`-`;
}

/* **
function sortTransform(a){
  let first = transform(a);
  let second = transform(a.sort((a,b) => a - b));
  let third = transform(a.sort((a,b) => b - a));
  return `${first}-${second}-${third}-${second}`;
}

let transform = (arr) => [...arr.slice(0,2), ...arr.slice(arr.length - 2)].map(a => String.fromCharCode(a)).join('');
** */
