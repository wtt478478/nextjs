/* eslint-disable react/no-deprecated */
import React from "react";
import classNames from "classnames";
import styles from "./toast.module.scss";
import Image from "next/image";
class Notice extends React.Component {
  static defaultProps = {
    duration: 3000,
    content: null,
    icon: null,
    keys: null,
  };
  closeTimer: any;
  timer: any;
  constructor(props: any) {
    console.log(props);
    super(props);
    this.state = {
      shouldClose: false, // 是否开启关闭动画
      shouldCloses: false, // 是否开启关闭动画
    };
  }
  componentDidMount() {
    const { duration }: any = this.props;
    if (duration > 0) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, duration - 300); // 减掉消失动画300毫秒
    }
  }
  componentWillUnmount() {
    // 当有意外关闭的时候 清掉定时器
    this.clearCloseTimer();
  }
  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }
  close() {
    // 关闭的时候 应该先清掉倒数定时器
    // 而后开启过场动画
    // 等待动画结束 执行回调
    const { onClose }: any = this.props;
    this.clearCloseTimer();
    const _this = this;
    _this.setState({ shouldClose: true });
    this.timer = setTimeout(() => {
      if (onClose) {
        onClose();
      }
      clearTimeout(_this.timer);
    }, 300);
  }
  render() {
    const { shouldClose, shouldCloses }: any = this.state;
    console.log(this.props);

    const { content, keys, icon, id }: any = this.props;
    return (
      <div
        onMouseEnter={() => {
          this.setState({ shouldCloses: true });
        }}
        onMouseLeave={() => {
          console.log("first");
          this.setState({ shouldCloses: false });
        }}
        key={id}
        className={styles.toast}
        id={keys}
      >
        <div className={styles[shouldClose ? "toastbodys" : "toastbody"]}>
          <div className={styles.toastleft}>
            <div>
              {/* <Image
                src={"/vercel.svg"}
                alt="Vercel Logo"
                width={72}
                height={16}
              ></Image> */}
              {icon}
            </div>
          </div>
          <div className={styles.toastright}>{content}</div>
          {shouldCloses ? (
            <button
              className={styles[shouldCloses ? "btnshows" : "btnhides"]}
              onClick={() => {
                console.log(1111);
                this.close();
              }}
            >
              X
            </button>
          ) : (
            false
          )}
        </div>
      </div>
    );
  }
}

export default Notice;
