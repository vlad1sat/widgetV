declare module "*.module.scss" {
    interface IClassNames {
        [classname: string]: string;
    }

    const classNames: IClassNames;
    export = classNames;
}


declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
