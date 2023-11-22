function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  //   console.log(`${year}-${month}-${date}`);
  return `${year}-${month}-${date}`;
}

export {getDate};
