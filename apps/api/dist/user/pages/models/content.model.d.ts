declare class Children {
    text?: string;
    type?: string;
    src?: string;
    children?: ChildChild[];
    shortName?: string;
}
declare class ChildChild {
    text: string;
}
export declare class Content {
    children: Children[];
}
export {};
