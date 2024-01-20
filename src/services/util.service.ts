function getDate() {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const year = today.getFullYear();
  const date = today.getDate().toString().padStart(2, '0');
  //   console.log(`${year}-${month}-${date}`);
  return `${year}-${month}-${date}`;
}

export {getDate};
