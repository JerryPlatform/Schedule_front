function emailValidation (val: string): boolean {
  // console.log(val.length);
  let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
  return reg.test(val);
};

// 전화번호 유효성 검토
function phoneValidation (val: string): boolean {
  let reg = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
  return reg.test(val);
};

function phoneFormatChanger (val: string | number) {
  return val
          .toString()
          .replace(/-/g, '')
          .replace(/[^0-9]/g, '')
          .replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})/, '$1-$2-$3')
          .replace('--', '-')
}

// 패스워드 유효성 검토
function passwordValidation (val: string): boolean {
  let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
  return val.length ? reg.test(val) : false;
};

export {
  emailValidation,
  phoneValidation,
  passwordValidation,
  phoneFormatChanger
}