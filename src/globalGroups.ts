import { defineGkdGlobalGroups } from '@gkd-kit/define';
import * as appList from './globalDefaultApps';

export const OPEN_AD_ORDER = -10; // 开屏广告
export const UPDATE_ORDER = -9; // 更新提示
export const YOUNG_ORDER = -8; // 青少年模式
export const REVIEW_PROMPT_ORDER = -7; // 评价提示
export const NOTIFICATION_PROMPT_ORDER = -6; // 通知提示
export const LOCATION_PROMPT_ORDER = -5; // 定位提示
export const PERMISSION_PROMPT_ORDER = -4; // 权限提示
export const PARTIAL_AD_ORDER = -3; // 局部广告
export const FULLSCREEN_AD_ORDER = -2; // 全屏广告
export const SEGMENTED_AD_ORDER = -1; // 分段广告

const COMMON_PREFIX =
  '[name!$=".CheckBox"][childCount=0][visibleToUser=true][height>0&&width>0]';

// 通知提示
const NEGATION_PART_RULE_TEXT = `${COMMON_PREFIX}[((text^="不"&&text$="谢谢")||text="否"||text="关闭"||text="跳过"||text="关闭按钮"||text="我没空"||text="不开启"||text="暂时不用"||text="暂时不要"||text="我已知晓"||text="不用了"||text="本次忽略"||text="考虑一下"||text="考慮一下"||text="先不了"||text="不允许"||text^="不了"||text^="不再"||(text^="稍后"&&text!="稍后再看")||text^="忽略"||text^="暂不"||text^="放弃"||text^="取消"||text$="再说"||text$="拒绝"||text$="再想想"||text$="知道了"||text$="稍后提醒我"||text$="稍後提醒我"||(text^="不"&&text$="謝謝")||text="關閉"||text="關閉按鈕"||text="我已知曉"||text="不開啟"||text$="再說"||text$="拒絕"||text^="暫不"||text~="close"||text~="not now"||text~="(?is)Ignore.*"||text~="(?is)cancel.*"||text~="(?is).*later"||text~="(?is).*refuse"||text~="(?is).*i see")&&(text!*="取消全部")&&text.length<=7]`;
const NEGATION_PART_RULE_DESC = `${COMMON_PREFIX}[((desc^="不"&&desc$="谢谢")||desc="否"||desc="关闭"||desc="跳过"||desc="关闭按钮"||desc="我没空"||desc="不开启"||desc="暂时不用"||desc="暂时不要"||desc="我已知晓"||desc="不用了"||desc="本次忽略"||desc="考虑一下"||desc="考慮一下"||desc="先不了"||desc="不允许"||desc^="不了"||desc^="不再"||(desc^="稍后"&&desc!="稍后再看")||desc^="忽略"||desc^="暂不"||desc^="放弃"||desc^="取消"||desc$="再说"||desc$="拒绝"||desc$="再想想"||desc$="知道了"||desc$="稍后提醒我"||desc$="稍後提醒我"||(desc^="不"&&desc$="謝謝")||desc="關閉"||desc="關閉按鈕"||desc="我已知曉"||desc="不開啟"||desc$="再說"||desc$="拒絕"||desc^="暫不"||desc~="close"||desc~="not now"||desc~="(?is)Ignore.*"||desc~="(?is)cancel.*"||desc~="(?is).*later"||desc~="(?is).*refuse"||desc~="(?is).*i see")&&(desc!*="取消全部")&&desc.length<=7]`;
const NEGATION_PART_RULE_BUTTON = `${COMMON_PREFIX}[(vid~="(?is).*iv.*"||vid~="(?is).*guide.*"||vid~="(?is).*alert"||vid~="(?is).*notific.*"||vid~="(?is).*dialog.*"||vid~="(?is).*btn.*"||vid~="(?is).*ad.*"||vid~="(?is).*ab.*")&&(vid~="(?is).*close"||vid~="(?is).*delete"||vid~="(?is).*cancel"||vid~="(?is).*cancle"||vid~="(?is).*exit")||vid~="(?is)close.*"||vid~="(?is)ab.*"||vid~="(?is)closeIv.*"||vid~="(?is)ivDelete.*"||vid~="(?is)deleteIv.*"||vid~="(?is).*_close"||text=""||desc=""||text="×"||desc="×"||text="퀺"||desc="퀺"]`;

// 局部广告
const PA_commonTextPatterns =
  '[text^="广告"||text$="广告"||text^="廣告"||text$="廣告"||text$="限时福利"||text^="热门活动"||text$="热门活动"||text$="限時福利"||text^="限时福利"||text^="限時福利"||((text~="(?is).*AD"||text~="ad")&&((text!~="(?is).*load.*")&&(text!~="(?is).*read.*")&&(text!~="(?is).*add.*")&&(text!~="(?is).*ead.*")))||(text*="申请"||text*="开启"||text*="打开"||text*="获取"||text*="订阅"||text*="接收"||text~="(?is).*Turn on.*")&&(text*="个性化"||text*="推荐"||text*="感兴趣"||text*="個性化"||text*="推薦"||text*="感興趣"||text*="感興趣")]';
const PA_commonDescPatterns =
  '[desc^="广告"||desc$="广告"||desc^="廣告"||desc$="廣告"||desc$="限时福利"||desc^="热门活动"||desc$="热门活动"||desc$="限時福利"||desc^="限时福利"||desc^="限時福利"||((desc~="(?is).*AD"||desc~="ad")&&((desc!~="(?is).*load.*")&&(desc!~="(?is).*read.*")&&(desc!~="(?is).*add.*")&&(desc!~="(?is).*ead.*")))||(desc*="申请"||desc*="开启"||desc*="打开"||desc*="获取"||desc*="订阅"||desc*="接收"||desc~="(?is).*Turn on.*")&&(desc*="个性化"||desc*="推荐"||desc*="感兴趣"||desc*="個性化"||desc*="推薦"||desc*="感興趣"||desc*="感興趣")]';

export default defineGkdGlobalGroups([]);
