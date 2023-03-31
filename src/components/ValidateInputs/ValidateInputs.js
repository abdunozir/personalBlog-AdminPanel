function titleCheck(data, isPublished) {
  let max = 300;
  let min = 0;
  if (isPublished) {
    if (data > 300) {
      return "Sarlovha " + max + " ta harfdan kam bo'lishi kerak!";
    }
    if ((data = 0)) {
      return `Sarlovha kamida ${min} ta harfdan ko'p bo'lishi kerak!`;
    }
  } else {
    return "";
  }
}

export default titleCheck;
