import React from "react";
import classNames from "classnames";
import Notification from "./Notification";
import styles from "./toast.module.scss";
import Image from "next/Image";
// Toast组件比较特殊
// 由于<Toast />不会被直接渲染在DOM中
// 而是动态插入页面中
// Toast组件核心就是经过Notification暴露的重写方法 动态改变Notification
let newNotification: { destroy: () => void } | null;

// 得到一个Notification
const getNewNotification = () => {
  // 单例 保持页面始终只有一个Notification
  if (!newNotification) {
    newNotification = Notification.reWrite({});
  }
  //   console.log(Notification.reWrite(), "^^^^^^^");
  return newNotification;
};
let noticeNumber = 0;
const getUuid = () => {
  return "notification-" + new Date().getTime() + "-" + noticeNumber++;
};
// notice方法实际上就是集合参数 完成对Notification的改变
const notice = (
  content:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | null
    | undefined,
  type: string | undefined,
  icon: string,
  duration = 3000,
  onClose: () => void,
  mask = true
) => {
  let notificationInstance: any = getNewNotification();

  notificationInstance.notice({
    duration,
    mask: mask,
    icon,
    content: content,
    onClose: () => {
      if (onClose) onClose();
    },
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // 无动画
  show(
    content?: any,
    duration?: number | undefined,
    icon?: any,
    mask?: boolean | undefined,
    onClose?: any
  ) {
    return notice(content, undefined, icon, duration, onClose, mask);
  },
  // 翻转效果
  info(
    content?: any,
    duration?: number | undefined,
    icon?: any,
    mask?: boolean | undefined,
    onClose?: any
  ) {
    return notice(content, "info", icon, duration, onClose, mask);
  },
  // 缩放效果
  success(
    content?: any,
    duration?: number | undefined,
    icon?: any,
    mask?: boolean | undefined,
    onClose?: any
  ) {
    return notice(content, "success", icon, duration, onClose, mask);
  },
  // 从下方滑入
  warning(
    content?: any,
    duration?: number | undefined,
    icon?: any,
    mask?: boolean | undefined,
    onClose?: any
  ) {
    return notice(content, "warning", icon, duration, onClose, mask);
  },
  // 抖动
  error(
    content?: any,
    duration?: number | undefined,
    icon?: any,
    mask?: boolean | undefined,
    onClose?: any
  ) {
    return notice(content, "error", icon, duration, onClose, mask);
  },
  // 销毁
  hide() {
    if (newNotification) {
      newNotification.destroy();
      newNotification = null;
    }
  },
};
