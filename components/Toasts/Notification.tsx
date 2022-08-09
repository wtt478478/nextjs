import React from "react";
import * as ReactDOM from "react-dom";
import Notice from "./Notice";
import styles from "./toast.module.scss";
class Notification extends React.Component {
  static reWrite: (properties: {}) => {
    notice(noticeProps: any): void;
    removeNotice(key: any): void;
    destroy(): void;
    component: void;
  };
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      notices: [], // 存储当前有的notices
      hasMask: true, // 是否显示蒙版
    };
  }
  add(notice: any) {
    // 添加notice
    // 创造一个不重复的key
    const { notices }: any = this.state;
    const key = notice.key ? notice.key : (notice.key = getUuid());
    const keys = notice.keys ? notice.keys : (notice.keys = getUuid());
    const mask = notice.mask ? notice.mask : false;
    const temp = notices.filter((item: any) => item.key === key).length;

    if (!temp) {
      // 不存在重复的 添加
      notices.push(notice);
      this.setState({
        notices: notices,
        hasMask: mask,
      });
    }
  }
  remove(key: any) {
    // 根据key删除对应
    this.setState((previousState: any) => {
      return {
        notices: previousState.notices.filter(
          (notice: { key: any }) => notice.key !== key
        ),
      };
    });
  }
  getNoticeDOM() {
    const _this = this;
    const { notices }: any = this.state;
    let result: any = [];

    notices.map((notice: any) => {
      // 每一个Notice onClose的时候 删除掉notices中对应key的notice
      const closeCallback = () => {
        _this.remove(notice.key);
        // 若是有用户传入的onClose 执行
        if (notice.onClose) notice.onClose();
      };
      result.push(
        <Notice
          // key={notice.key}
          id={notice.key}
          {...notice}
          onClose={closeCallback}
        />
      );
    });

    return result;
  }
  //   getMaskDOM() {
  //     const { notices, hasMask } = this.state;
  //     // notices为空的时候 不显示蒙版
  //     // 始终只有一个蒙版
  //     // if (notices.length > 0 && hasMask == true)
  //     //   return <div className="zby-mask"></div>;
  //   }
  render() {
    const noticesDOM = this.getNoticeDOM();
    // const maskDOM = this.getMaskDOM();
    console.log(noticesDOM);
    return <div className={styles["zby-notification-box"]}>{noticesDOM}</div>;
  }
}

// 统计notice总数 防止重复
let noticeNumber = 0;

// 生成惟一的id
const getUuid = () => {
  return "notification-" + new Date().getTime() + "-" + noticeNumber++;
};

// Notification增长一个重写方法
// 该方法方便Notification组件动态添加到页面中和重写
Notification.reWrite = function (properties: {}) {
  const { ...props } = properties || {};
  console.log(props);
  let div: any;

  div = document.createElement("div");
  let divs: any = document.getElementById("__next");
  divs.appendChild(div);
  console.log(props);
  // eslint-disable-next-line react/no-render-return-value
  const notification: any = ReactDOM.render(<Notification {...props} />, div);

  return {
    notice(noticeProps) {
      notification.add(noticeProps);
    },
    removeNotice(key) {
      notification.remove(key);
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
    component: notification,
  };
};

export default Notification;
