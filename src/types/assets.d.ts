declare module "*.svg?react" {
    import { FunctionComponent, SVGProps } from "react";
    const content: FunctionComponent<SVGProps<SVGSVGElement>>;
    export default content;
}

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

