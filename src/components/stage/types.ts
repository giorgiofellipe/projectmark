export enum StageType {
    Lead,
    RFPInProgress,
    Submitted,
    Won,
    Lost,
    Closed
}


export interface StageProps {
    type: StageType;
    title: string;
    children?: React.ReactNode;
}

export type ColorMap = {
    [key in StageType]: {
        normal: string;
        darker: string;
        light: string;
        lighter: string;
    }
}