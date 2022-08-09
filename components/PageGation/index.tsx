import { useState } from "react";
import styles from "./page.module.scss";
import leftSvg from "../../assets/img/left.svg";
import righttSvg from "../../assets/img/right.svg";
import ellipsis from "../../assets/img/ellipsis.svg";
import Image from "next/image";
interface SliderProps {
  width?: string | number; /*组件宽度*/
  height?: string | number;/*组件高度*/
  imgList: { title: string, url: string, subTitle: string }[];
  interval: number;
}
const PageOmit = (props: any) => {
  return (
    <li title={props.title} onClick={props.onClick && props.onClick}>
      <Image src={ellipsis} width={62} height={10}></Image>
    </li>
  );
};

export default function PageGation<SliderProps>(props: any) {
  const {
    onPageChange,
    preBtnText = `<`,
    nextBtnText = ">",
    showQuickJumper,
    showTotal,
    total,
  } = props;
  const [defaultpage, setdefaultpage]: any = useState({
    total: props.total || 1, //总条数
    totalPageSize: Math.ceil(props.total / 10) || 1, //总分页数
    currentPage: props.currentPage || 1, //当前分页数
    inputValue: "", //快速跳转输入框值
  });

  // 页码改变时
  const pageChange = (currentPage: any) => {
    const { currentPage: stateCurrentPage, totalPageSize } = defaultpage;
    console.log(currentPage, totalPageSize, stateCurrentPage);
    if (currentPage === stateCurrentPage) return;
    console.log(isNaN(currentPage));
    if (currentPage == 0 || currentPage < 0 || isNaN(currentPage)) {
      setdefaultpage({ ...defaultpage, currentPage: 1 });
      onPageChange(currentPage);
      return;
    }
    if (currentPage > totalPageSize) {
      setdefaultpage({ ...defaultpage, currentPage: totalPageSize });
      onPageChange(currentPage);
      return;
    }
    setdefaultpage({ ...defaultpage, currentPage });
    onPageChange(currentPage);
  };

  //下一页事件
  const nextPageChange = () => {
    let { currentPage, totalPageSize } = defaultpage;
    if (currentPage === totalPageSize) return;
    pageChange(currentPage + 1);
  };

  //上一页事件
  const prePageChange = () => {
    let { currentPage } = defaultpage;
    if (currentPage === 1) return;
    pageChange(currentPage - 1);
  };

  //向前5页的省略号事件
  const preOmitPageChange = () => {
    const { currentPage } = defaultpage;
    pageChange(currentPage - 5);
  };

  //向后5页的省略号事件
  const nextOmitPageChange = () => {
    const { currentPage } = defaultpage;
    pageChange(currentPage + 5);
  };

  //初始化分页元素
  const initPage = () => {
    // console.log('111111')
    // const { nextBtnText, preBtnText } = props;
    const { totalPageSize, currentPage } = defaultpage;
    let contentList = [];
    if (totalPageSize <= 9) {
      contentList = Array.from({ length: 9 - 2 }).map((_, i) => {
        return (
          <li
            onClick={() => pageChange(i + 1)}
            className={currentPage === i + 1 ? styles["page-item-active"] : ""}
            key={i + Math.random()}
          >
            {i + 1}
          </li>
        );
      });
    } else if (currentPage + 4 >= totalPageSize) {
      contentList = [
        <li
          key={"first" + Math.random()}
          onClick={() => {
            pageChange(1);
          }}
        >
          1
        </li>,
        <PageOmit
          key={"omit" + Math.random()}
          title="向前5页"
          onClick={preOmitPageChange}
        />,
      ].concat(
        Array.from({ length: 9 - 2 }).map((_, i) => {
          return (
            <li
              onClick={() => pageChange(i + totalPageSize - 9 + 3)}
              className={
                currentPage === i + totalPageSize - 9 + 3
                  ? styles["page-item-active"]
                  : ""
              }
              key={i + Math.random()}
            >
              {i + totalPageSize - 9 + 3}
            </li>
          );
        })
      );
    } else if (currentPage - 4 <= 1) {
      contentList = Array.from({ length: 9 - 2 })
        .map((_, i) => {
          return (
            <li
              onClick={() => pageChange(i + 1)}
              className={
                currentPage === i + 1 ? styles["page-item-active"] : ""
              }
              key={i + Math.random()}
            >
              {i + 1}
            </li>
          );
        })
        .concat([
          <PageOmit
            key={"omit" + Math.random()}
            title="向后5页"
            onClick={nextOmitPageChange}
          />,
          <li
            key={"last" + Math.random()}
            onClick={() => {
              pageChange(totalPageSize);
            }}
          >
            {totalPageSize}
          </li>,
        ]);
    } else {
      // eslint-disable-next-line no-sparse-arrays
      contentList = [
        <li key={"first" + Math.random()} onClick={() => pageChange(1)}>
          1
        </li>,
        <PageOmit
          key={"omit" + Math.random()}
          title="向前5页"
          onClick={preOmitPageChange}
        />,
        ,
        ...Array.from({ length: 9 - 4 }).map((_, i) => {
          return (
            <li
              onClick={() => pageChange(i + currentPage - 2)}
              className={
                currentPage === i + currentPage - 2
                  ? styles["page-item-active"]
                  : ""
              }
              key={i + Math.random()}
            >
              {i + currentPage - 2}
            </li>
          );
        }),
        <PageOmit
          key={"omit" + Math.random()}
          title="向后5页"
          onClick={nextOmitPageChange}
        />,
        <li
          key={"last" + Math.random()}
          onClick={() => pageChange(totalPageSize)}
        >
          {totalPageSize}
        </li>,
      ];
    }

    contentList.unshift(
      <li
        className={currentPage === 1 ? styles["disabled"] : ""}
        onClick={prePageChange}
        key={"pre"}
      >
        <Image src={leftSvg} width={72} height={20}></Image>
        {/* {preBtnText} */}
      </li>
    );
    contentList.push(
      <li
        className={currentPage === totalPageSize ? styles["disabled"] : ""}
        onClick={nextPageChange}
        key={"next"}
      >
        <Image src={righttSvg} width={72} height={20}></Image>

        {/* {nextBtnText} */}
      </li>
    );

    return contentList;
  };

  //快速跳转输入框绑定
  const inputChangeHandler = (event: any) => {
    setdefaultpage({ ...defaultpage, inputValue: event.target.value });
  };

  //快速跳转输入框按下回车事件
  const onInputKeyUp = (event: any) => {
    if (event.keyCode === 13) {
      //keyCode为13就是回车
      const value:any = parseInt(event.target.value);
      const { currentPage, totalPageSize } = defaultpage;
      console.log(currentPage, totalPageSize, value);
      if (isNaN(value)) {
        setdefaultpage({
          ...defaultpage,
          inputValue: "",
        });
      } else if (value > totalPageSize) {
        //如果输入的合法数字大于总页数，则跳转至最后一页
        if (totalPageSize === currentPage) {
          //如果当前已经是第一页，则只清空输入框
          setdefaultpage({ ...defaultpage, inputValue: "" });
        } else {
          setdefaultpage({
            ...defaultpage,
            currentPage: totalPageSize,
            inputValue: "",
          });
          onPageChange(totalPageSize);
        }
      } else if (value < 1) {
        //如果输入的合法数字大于总页数，则跳转至最后一页
        if (1 === currentPage) {
          //如果当前已经是最后一页，则只清空输入框
          setdefaultpage({ ...defaultpage, inputValue: "" });
        } else {
          setdefaultpage({ ...defaultpage, currentPage: 1, inputValue: "" });
          onPageChange(1);
        }
      } else if (defaultpage.currentPage === parseInt(value)) {
        setdefaultpage({ ...defaultpage, inputValue: "" });
      } else {
        setdefaultpage({
          ...defaultpage,
          inputValue: "",
          currentPage: parseInt(value),
        });
        onPageChange(value);
      }
    }
  };

  const { inputValue } = setdefaultpage;
  return (
    <div className={styles["page-container"]}>
      <ul className={styles["page-wrapper"]}>{initPage()}</ul>
      {showTotal && <span className={styles["total"]}>共{total}条</span>}
      {showQuickJumper && (
        <div className={styles["qucik-jump-wrapper"]}>
          至
          <input
            onKeyUp={onInputKeyUp}
            value={inputValue}
            onChange={inputChangeHandler}
          />
          页
        </div>
      )}
      <button
        className={styles["btn"]}
        onClick={() => {
          console.log(defaultpage);
          setdefaultpage({
            ...defaultpage,
          });
          pageChange(Number(defaultpage.inputValue));
        }}
      >
        跳转
      </button>
    </div>
  );
}
