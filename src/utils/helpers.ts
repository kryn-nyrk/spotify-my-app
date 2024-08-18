export const getCookie = (name: string): string | undefined => {
  // 1. クッキー文字列を正規表現で検索
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  // 2. マッチした場合、その値をデコードして返す。マッチしない場合は undefined を返す。
  return match ? decodeURIComponent(match[2]) : undefined;
};

export const generateRandomString = (length: number): string => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
