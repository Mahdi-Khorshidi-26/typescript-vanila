//custom types

type User = {
  familyName: string;
  location: string;
  id: string;
};
type Status = "khorshidi" | "taghvaei" | "almasi";
type AddFunction = (a: number, b: number) => number;
//variables
const firstName: string = "mahdi";
const age: number = 27;
const isAdmin: boolean = true;
const detailInformation: object = {
  familyName: "khorshidi",
  location: "tehran",
  id: "1",
};
const id: string | number = "1";
// const customId: string & number = 1;
const names: string[] = ["mahdi", "ali"];
const actions: Status = "almasi";
const mahdi: User = {
  familyName: "khorshidi",
  location: "pakdasht",
  id: "2",
};
function customFunction(a: number, b: number, calc: AddFunction): number {
  const result = calc(a, b);
  return result;
}

