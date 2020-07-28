
// _.chunk(['a', 'b', 'c', 'd'], 2)
function chunck (array, size = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError('Argumemt 1 must be an Array.')
  }

  let len = size >>> 0

  console.log(len)

  if (len < 1) {
    throw new Error('size should be greater then')
  }
}

chunck([], 'asd')