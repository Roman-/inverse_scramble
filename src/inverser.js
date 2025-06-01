export function inverse_scramble(s) {
  s = s.trim();
  if (s.length === 0) {
    return s;
  }
  // delete parentheses
  s = s.replace(/[\(\)\[\]\{\}]/g, '')
  // replacing apostrophes with primes
  s = s.replace(/[ʼ᾿ߴ՚’`]/g, '\'')
  let arr = s.split(/\s+/);
  let res = [];
  for (let it of arr) {
    if (it.charAt(it.length - 1) === "2")
      res.push(it);
    else if (it.charAt(it.length - 1) === "'")
      res.push(it.substring(0, it.length - 1));
    else
      res.push(`${it}'`);
  }

  return res.reverse().join(' ');
}
