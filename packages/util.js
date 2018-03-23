export const getKey = function (item) {
  return typeof item === 'object' ? item.key : item
}

export const getValue = function (item) {
  return typeof item === 'object' ? item.value : item
}

export const getValueByKey = function (list, key) {
  if (!list.length) {
    return key
  }
  if (typeof list[0] === 'string') {
    return key
  }
  const match = list.filter(one => {
    return one.key === key
  })
  return match[0].value
}

export const createId = function () {
  return Math.random().toString(36).substring(3, 8)
}
