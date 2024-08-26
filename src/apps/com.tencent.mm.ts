import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      name: '继续访问',
      key: 0,
      actionMaximum: 100,
      matchTime: 890000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text="继续访问"]'],
        },
      ],
    },
  ],
});
