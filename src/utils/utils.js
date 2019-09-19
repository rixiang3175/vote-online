export function getUrlParams(url) {
  const pattern = /(\w+)=(\w+)/gi;
  const parames = {};

  url.replace(pattern, function (a, b, c) {
    parames[b] = c;
  });
  return parames;
}
