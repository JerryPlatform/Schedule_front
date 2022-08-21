function decimalChk(val: string|number, type: 'input' | 'text'='text'): string {
  const realNum = val.toString().replace(/,/g,'').replace(/g/g, '').replace(/개/g, '').replace(/%/g,'');
  let item: string|number = realNum||'0';
  
  if(/^(\d+$)/.test(item.toString())){
    item = Number(item);
  } else {
    if(/^\d{1,}.\d{0,2}$/.test(item.toString())){
      item = item;
    } else {
      if(/^\d{1,}.\d{0,3}$/.test(item.toString())){
        item = parseFloat(item.toString());
      } else {
        item = item.toString().replace( /[^\d.]+/g, '' );
        item = item.toString().replace( /^([^.]*\.)|\.+/g, '$1');
        let tempArr = item.split('.');

        if(type === "input" && tempArr[1].length >= 4){
          alert("소수점 3자리까지만 입력해주세요.");
        }

        item = (`${Number(tempArr[0])}.${(tempArr[1] + '').substr(0,3)}`);
        item = parseFloat(item)
      }
    }
  }

  return `${(realNum||'0').toString().substr(0,1) === '-' ? '-' : ''}${item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  // return item.toLocaleString({style:{decimal: true, currency: true}});
};

export default decimalChk;