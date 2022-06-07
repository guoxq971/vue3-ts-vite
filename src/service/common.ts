import { Request } from '@/utils/request/request';
import { Rows, test4Param4Interface, UserInfo } from '@/views/test2/pack/test4service4interface';


export function test (parameter: test4Param4Interface): Promise<Rows<UserInfo>> {
  return Request.axiosInstance.post('/test', parameter);
}
