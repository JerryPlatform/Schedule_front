function BRNChkValidation(value: string): boolean {
  if(/^[0-9]{3}-?[0-9]{2}-?[0-9]{5}$/.test(value)){
    const multiply = [1, 3, 7, 1, 3, 7, 1, 3, 5];
    const splitValue: number[] = value.replace(/-/g, '')
                                  .split('')
                                  .filter(item => item !== '-')
                                  .map(item => Number(item));
    const frontOfSplit: number[] = splitValue.splice(0, 9);
    const backOfSplit: number = splitValue[0];
    const multiplyFrontofSplit = frontOfSplit.map((item, index) => item * multiply[index])

    let sum = multiplyFrontofSplit.reduce((acc, val) => acc + val)
    sum += Math.floor((frontOfSplit[8] * 5) / 10)

    return ((10 - (sum % 10)) % 10) === backOfSplit;
  } else {
    return false;
  }

};

export default BRNChkValidation;
