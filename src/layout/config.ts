interface menuType {
  minWidth: number,
  maxWidth: number
  bgColor: string
}

export interface layoutConfigType {
  menu: menuType
}

export const layoutConfig: layoutConfigType = {
  menu: {
    // 最小宽度
    minWidth: 64,
    // 展开宽度
    maxWidth: 256,
    // 背景颜色
    bgColor: '#001529'
  }
};
