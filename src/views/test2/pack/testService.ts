import { Rows } from '@/interfaces/common';
import { Request } from '@/utils/request/request';
import { test2Interface, test4Param4Interface, UserInfo } from '@/views/test2/pack/test4service4interface';

// 测试
export { test } from '@/service/common';

// 测试2 : Promise<Rows<UserInfo>>
export function test2 ():Promise<Rows<test2Interface[]>> {
  return Request.axiosInstance.post('/user/list', { });
}
