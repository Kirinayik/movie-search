export const currentDate = (n) => {
  const date = new Date();
  const year = +date.getFullYear() + n;
  const month =
    +date.getMonth() + 1 < 10
      ? "0" + (+date.getMonth() + 1)
      : +date.getMonth() + 1;
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

  return `${year}-${month}-${day}`;
};
