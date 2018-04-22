// 根据用户信息，返回跳转地址
export function getRedirectPath({type, avatar}) {
  let url = (type === 'boss')? '/boss': '/genius'
  // 没有完成信息的填写
  if (!avatar) {
    url += 'info'
  }
  return url;
}