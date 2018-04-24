// 根据用户信息，返回跳转地址
export function getRedirectPath({type, desc}) {
  let url = (type === 'boss')? '/boss': '/genius'
  // 没有完成信息的填写
  if (!desc) {
    url += 'info'
  }
  return url;
}