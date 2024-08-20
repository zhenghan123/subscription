import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhangkongapp.joke.bamenshenqi',
  name: '虎牙直播',
  groups: [
    {
      name: '未成年模式',
      key: 0,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text="我知道了"]'],
        },
      ],
    },
  ],
});
