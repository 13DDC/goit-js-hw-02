function getElementWidth(content, padding, border) {
  contentTotal = Number.parseFloat(content);
  paddingTotal = Number.parseFloat(padding);
  borderTotal = Number.parseFloat(border);
  const boxSizing = contentTotal + paddingTotal * 2 + borderTotal * 2;
  return boxSizing;
}

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
