import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'top.bienvenido.saas.i18n',
  name: '元萝卜',
  groups: [
    {
      name: '开局弹窗',
      key: 0,
      actionMaximum: 10,
      // matchTime: 10000000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[id="com.sfacg:id/tv_jump"]'],
        },
      ],
    },
  ],
});
