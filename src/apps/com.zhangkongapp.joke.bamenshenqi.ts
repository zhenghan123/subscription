import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhangkongapp.joke.bamenshenqi',
  name: '八门神器',
  groups: [
    {
      name: '更新弹窗',
      key: 0,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [id="com.zhangkongapp.joke.bamenshenqi:id/iv_close"],
        },
      ],
    },
  ],
});
