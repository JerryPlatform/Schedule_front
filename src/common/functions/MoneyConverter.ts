function MoneyConverter(value: string | number, type: 'money' | 'number' = 'money') {
  if ( type === 'money' ) {
    return `₩ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  } else {
    return parseFloat(value.toString().replace(/\,/g, '').replace(/₩/g, ''));
  }
};

export default MoneyConverter;