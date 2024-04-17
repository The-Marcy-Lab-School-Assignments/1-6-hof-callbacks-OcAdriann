const myForEach = (arr, callback) => {
  for (let char of arr) {
    callback(char);
  }
};

const myMap = (arr, callback) => {
  newArr = [];
  for (let char of arr) {
    newArr.push(callback(char))
  }
  return newArr;
};

const myFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
};

const myFilter = (arr, callback) => {
  const newArr = [];
  for (const i of arr) {
    if (callback(i)) {
      newArr.push(i);
    }
  }
  return newArr;
};

const sortWords = (arr) => {
  return arr.toSorted();
};

const sortNumbers = (arr) => {
  return arr.toSorted((a, b) => a - b);
};

const sortNumbersBetter = (arr, engels) => {
  if (engels) {
    return arr.toSorted((a, b) => b - a);
  } else {
    return arr.toSorted((a, b) => a - b);
  }
};

const sortUsersByOrder = (arr) => [...arr].sort((a, b) => a.order - b.order)

const sortUsersByName = (arr) => [...arr].sort((a, b) => {
  const nameA = a.name
  const nameB = b.name
  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
});

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
