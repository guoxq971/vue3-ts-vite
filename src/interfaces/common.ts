
export interface responseBase{
  msg: string,
  code: number;
}

export interface Rows<T> extends responseBase{
  data: T,
}
