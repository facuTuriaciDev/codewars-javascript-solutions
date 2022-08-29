function palindromization(element, n) {
  let arr1 = [];
  let arr2 = [];
  let j = 0;

  for (var i = 0; i < n; i++) {

    if (i % 2 === 0) {
      arr1.push(element[j]);
    } else {
      arr2.push(element[j++]);
    }

    if (j >= element.length) j = 0;
  }

  return element === '' || n < 2 ? 'Error!' : arr1.concat(arr2.reverse()).join('');
}