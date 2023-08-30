function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  return arr1.every((currentValue, index) => currentValue == arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  if (users.length == 0) {
    return 0;
  }

  let necessaryUsers = users.filter((user) => user.gender == gender);
  if (necessaryUsers.length == 0) {
    return 0;
  }

  let ageUsers = necessaryUsers.map((person) => person.age);
  let avg = ageUsers.reduce((acc, currentAge) => acc + currentAge) / ageUsers.length;
  return avg;
}