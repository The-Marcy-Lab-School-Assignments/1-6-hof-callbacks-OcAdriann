const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value)) {
      return false
    };
  }
  return true
};

const sortUsersBy = (users, sortingFunction) => {
  return [...users].sort(sortingFunction);
};

const logEachName = (names) => {
  return names.forEach((e, i, arr) => console.log(e, i, arr));
};

const logEachUserBio = (users) => {
  return users.forEach((users) => console.log(users.bio));
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
