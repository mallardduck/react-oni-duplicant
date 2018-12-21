declare module "*.png" {
  const path: string;
  export = path;
}

declare module "*.json" {
  const content: any;
  export = content;
}

type StyleProps<T> = { classes: { [K in keyof T]: string } };
type StyleObject = { [k: string]: React.CSSProperties };
