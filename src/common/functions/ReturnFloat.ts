function returnFloat(value: string|number): number {
  return parseFloat((value||0).toString().replaceAll(',',''));
};

export default returnFloat;