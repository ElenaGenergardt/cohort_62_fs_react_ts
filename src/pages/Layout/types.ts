import { type ReactNode,type Dispatch, type SetStateAction } from "react";

export interface LayoutProps {
  children: ReactNode;
}
//Типизация сотрудника
export interface Employee {
  name: string;
  lastName: string;
  age: string;
  jobPosition: string;
};

export interface LayoutPropsContext {
  employee: Employee [];
  setEmployee: Dispatch<SetStateAction<Employee[]>>};