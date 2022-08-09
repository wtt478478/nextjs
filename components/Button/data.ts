export interface ColourOption {
    readonly value: string|number|null;
    readonly label: string|number|null;
    readonly color?: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}


export interface FlavourOption {
    readonly value: string;
    readonly label: string;
    readonly rating: string;
}


export interface StateOption {
    readonly value: string | number | any;
    readonly label: string | any;
}


export interface GroupedOption {
    readonly label: string;
    readonly options: readonly ColourOption[] | readonly FlavourOption[];
}

