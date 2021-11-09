export default interface Doc {
  _id?: string;
  [key: string]: Array<any> | string | Doc | number | undefined;
}
