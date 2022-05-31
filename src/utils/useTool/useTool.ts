import _ from 'lodash';
import { isEmptyPlusReturnKeyInterface } from '@/utils/useTool/types';

interface useToolInterface {
  uuid: Function,
  isEmptyPlus: Function,
  isEmptyPlusReturnKey: Function
}

export const useTool:useToolInterface = {
  uuid: uuid,
  isEmptyPlus: isEmptyPlus,
  isEmptyPlusReturnKey: isEmptyPlusReturnKey
};

// 生成随机数
function uuid ():string {
  let S4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  // Generate a pseudo-GUID by concatenating random hexadecimal.
  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
}

// 判断是否为空 ture=空 false=非空
function isEmptyPlus (): boolean {
  for (let i = 0; i < arguments.length; i++) {
    const argument = arguments[i];
    // 先判断是否为数字
    if (_.isNumber(argument)) {
      return false;
    }
    if (!_.isEmpty(argument)) {
      return false;
    }
  }
  return true;
}

// 判断是否为空
function isEmptyPlusReturnKey (): isEmptyPlusReturnKeyInterface {
  for (let i = 0; i < arguments.length; i++) {
    const argument:string = arguments[i];
    // 先判断是否为数字
    if (_.isNumber(argument)) {
      return { flag: false, key: argument };
    }
    if (!_.isEmpty(argument)) {
      return { flag: false, key: argument };
    }
  }
  return { flag: true, key: '' };
}
