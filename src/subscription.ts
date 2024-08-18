import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 233,
  name: 'zheng',
  version: 0,
  author: 'zhenghan123',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/zhenghan123/subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
