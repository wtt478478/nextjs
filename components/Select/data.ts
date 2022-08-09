export interface ColourOption {
    readonly value: string | number | null;
    readonly label: string | number | null;
    readonly color?: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}



type CommonProps = {
    clearValue: () => void,
    getStyles: (arg0: string, arg1: any) => {},
    getValue: () => any,
    hasValue: boolean,
    isMulti: boolean,
    options: any,
    selectOption: any,
    selectProps: any,
    setValue: (arg0: any, ActionTypes: any) => void,
    emotion: any,
}

interface StateManagerProps {
    defaultInputValue?: string;
    defaultMenuIsOpen?: boolean;
    defaultValue?: any;
}



