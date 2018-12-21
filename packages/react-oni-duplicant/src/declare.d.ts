declare module "*.png" {
  const path: string;
  export = path;
}

type StyleProps<T> = { classes: { [K in keyof T]: string } };
type StyleObject = { [k: string]: React.CSSProperties };
