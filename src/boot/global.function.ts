import { boot } from 'quasar/wrappers';
import apiController from 'src/common/functions/api.control';
import decimalChk from 'src/common/functions/DecimalChk';
import decimalPointKeyDown from 'src/common/functions/DecimalPointKeyDown';
import returnFloat from 'src/common/functions/ReturnFloat';
import decodeToken, { tokenInterface } from 'src/common/functions/DecodeToken';
import BRNChkValidation from 'src/common/functions/BRNChkValidation';
import { emailValidation, phoneValidation, passwordValidation, phoneFormatChanger } from 'src/common/functions/ValidationChk';
import downloadArrayBuffer from 'src/common/functions/DownloadArrayBuffer';
import MoneyConverter from 'src/common/functions/MoneyConverter';
// @ts-ignore
import { createDeviceDetector, IDeviceDetector } from "next-vue-device-detector";

//set interface of function
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    apiController: (method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'REQUEST', url: string, data?: object | null, multipart?: 'formData' | null) => Promise<any>;
    decimalChk: (val: string|number, type?: 'input' | 'text') => string;
    decimalPointKeyDown: (event: { keyCode: number; shiftKey: boolean; preventDefault: () => void; }) => void;
    returnFloat: (value: string|number) => number;
    decodeToken: () => tokenInterface;
    BRNChkValidation: (value: string) => boolean;
    emailValidation: (value: string) => boolean;
    phoneValidation: (value: string) => boolean;
    passwordValidation: (value: string) => boolean;
    consoleLog: (value: any) => void;
    phoneFormatChanger: (value: string | number) => string;
    downloadArrayBuffer: (contents: ArrayBuffer, filename: string) => void;
    MoneyConverter: (value: string | number, type?: 'money' | 'number') => string | number;
    deviceDetector: () => IDeviceDetector;
  }
}

// set global function ex)this.decimalChk
export default boot(({ app }) => {
  app.config.globalProperties.apiController = apiController;
  app.config.globalProperties.decimalChk = decimalChk;
  app.config.globalProperties.decimalPointKeyDown = decimalPointKeyDown;
  app.config.globalProperties.returnFloat = returnFloat;
  app.config.globalProperties.decodeToken = decodeToken;
  app.config.globalProperties.BRNChkValidation = BRNChkValidation;
  app.config.globalProperties.emailValidation = emailValidation;
  app.config.globalProperties.phoneValidation = phoneValidation;
  app.config.globalProperties.passwordValidation = passwordValidation;
  app.config.globalProperties.consoleLog = (val:any): void => { console.log(val) };
  app.config.globalProperties.phoneFormatChanger = phoneFormatChanger;
  app.config.globalProperties.downloadArrayBuffer = downloadArrayBuffer;
  app.config.globalProperties.MoneyConverter = MoneyConverter;
  app.config.globalProperties.deviceDetector = createDeviceDetector;
});
