import styles from './index.module.scss'
import React, { CSSProperties, FunctionComponent } from 'react'
import Select, { ActionMeta, ClearIndicatorProps, components, DropdownIndicatorProps, GroupBase, MultiValue, OptionsOrGroups, PropsValue } from 'react-select'
import { ColourOption } from './data';

interface SelectProps {
  isClearable?: boolean; /*是否可清除*/
  size?: 'large' | 'mediu' | 'small'; /*尺寸*/
  isMulti?: true | undefined;/*是否多选*/
  options?: OptionsOrGroups<ColourOption, GroupBase<ColourOption>>; /*选项*/
  placeholder?: React.ReactNode | string /*select提示文字*/
  onChange?:((newValue: MultiValue<ColourOption>, actionMeta: ActionMeta<ColourOption>) => void) | undefined
  defaultValue?:PropsValue<ColourOption>/**默认选中值 */
}

const MySelect = (props: SelectProps) => {
  const { isClearable, options, size = 'small' ,onChange,defaultValue} = props


  //下拉按钮
  const DropdownIndicator = (props: DropdownIndicatorProps<ColourOption, true>) => {
    return (
      <components.DropdownIndicator {...props}>
        {/* <div className={styles.indicatorsContainer}> */}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 1L5 5L1 1" stroke="black" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {/* </div> */}
      </components.DropdownIndicator>
    );
  };

  //清空按钮
  const ClearIcon: FunctionComponent = () => (
    <div className={styles.indicatorsContainer}>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.32105 7.66707C7.24295 7.74517 7.11631 7.74517 7.03821 7.66707L3.99008 4.61894L0.965955 7.64306C0.88785 7.72117 0.761217 7.72117 0.683113 7.64306L0.272143 7.23209C0.194039 7.15399 0.194038 7.02736 0.272143 6.94925L3.29627 3.92513L0.249985 0.878845C0.17188 0.80074 0.17188 0.674107 0.249985 0.596002L0.674249 0.171738C0.752354 0.0936329 0.878987 0.093633 0.957092 0.171738L4.00337 3.21802L7.03384 0.187556C7.11194 0.109451 7.23858 0.109451 7.31668 0.187556L7.72765 0.598525C7.80575 0.67663 7.80575 0.803263 7.72765 0.881368L4.69719 3.91183L7.74532 6.95996C7.82342 7.03807 7.82342 7.1647 7.74532 7.24281L7.32105 7.66707Z" fill="black" fillOpacity="0.6" />
      </svg>
    </div>
  )
  const ClearIndicator = (props: ClearIndicatorProps<ColourOption, true>) => {
    const {
      children = <ClearIcon />,
      getStyles,
      innerProps: { ref, ...restInnerProps },
    } = props;
    return (
      <div
        {...restInnerProps}
        ref={ref}
        style={getStyles('clearIndicator', props) as CSSProperties}
      >
        <div>{children}</div>
      </div>
    );
  };

  //样式
  const customStyles: any = {
    container: (provided: any, state: any) => ({
      ...provided,
      borderRadius: 4,
      border: '1px solid rgba(0,0,0,0.1)',
      color: 'rgba(0,0,0,0.6)',
      backgroundColor: '#FFFFFF',
    }),
    menu: (provided: any, state: any) => {
      return ({
        ...provided,
        margin: '0',
        // width: state.options.length > 0 ? 'auto' : '100%',
      })
    },
    menuList: (provided: any, state: any) => {
      return ({
        ...provided,
      })
    },
    control: () => ({
      // width: 200,
      minHeight: size === 'large' ? 46 : size === 'mediu' ? 38 : 30,
      display: 'flex',
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    clearIndicator: (
      base: any,
      state: ClearIndicatorProps<ColourOption>): any => ({
        ...base,
        cursor: 'pointer',
        color: state.isFocused ? 'blue' : 'black',
      }),
    dropdownIndicator: (base: any, state: ClearIndicatorProps<ColourOption>): any => ({
      ...base,
      cursor: 'pointer',
      padding: '0 11px 0 0'
    }),
    valueContainer: (base: any, state: ClearIndicatorProps<ColourOption>): any => ({
      ...base,
      padding: '0 8px'
    }),

  }

  return (
    <Select
      options={options}
      styles={customStyles}
      components={{
        DropdownIndicator,
        ClearIndicator,
      }}
      defaultValue={defaultValue}
      isClearable={isClearable}
      onChange={onChange}
      {...props}
    />
  )
}

export default MySelect