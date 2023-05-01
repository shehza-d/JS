//
try {
  sfjsfdfsfl;

  if (!user) {
    throw "User has no name";
  }
} catch (err) {
  console.log(err);
  console.log(err.message);
  console.log(err.name);
  console.log(err);
  console.log(err);
} finally {
  //runs no matter what
}
console.log("script continues to run");
