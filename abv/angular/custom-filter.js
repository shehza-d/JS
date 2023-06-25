app.filter("gender", function () {
  return function (gender) {
    switch (gender) {
      case 1:
        return "Male";
      case 2:
        return "Female";
      case 3:
        return "Not disclosed";
    }
  };
});
