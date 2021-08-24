export const groupBy = (xs, f) => {
  // eslint-disable-next-line
  let obj = xs.reduce((r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {})
  return Object.keys(obj).map((key) => ({ key, value: obj[key] }))
}
