import { createContext, useState } from "react";

import {
  AppHeader,
  AppMain,
  HeaderLogoWrapper,
  HeaderLogoImage,
  HeaderNavLink,
  HeaderNavigation,
  resolveActiveNavLinkStyles,
} from "./styles";

import { type LayoutProps, type Employee,  type LayoutPropsContext } from "./types";
import { ROUTES } from "./routes";



export const AppLayoutContext = createContext<LayoutPropsContext>({
    employee: [],
    setEmployee: () =>{}
  });

function Layout({ children }: LayoutProps) {
  const [employee, setEmployee] = useState<Employee []>([]);

  return (
    //Оборачиваем компоненты в провайдер контекста и передаем значение текста
    <AppLayoutContext.Provider value={{ employee, setEmployee }}>
      <AppHeader>
        <HeaderLogoWrapper>
          <HeaderLogoImage
            src="https://www.designmantic.com/logo-images/6963.png?company=Company%20Name&keyword=employees&slogan=&verify=1"
            alt="App Logo"
          />
        </HeaderLogoWrapper>
        <HeaderNavigation>
          <HeaderNavLink
            to={ROUTES.CREATE_EMPLOYEES}
            style={resolveActiveNavLinkStyles}
          >
            Create Employees
          </HeaderNavLink>

          <HeaderNavLink
            to={ROUTES.EMPLOYEES}
            style={resolveActiveNavLinkStyles}
          >
            Employees
          </HeaderNavLink>
        </HeaderNavigation>
      </AppHeader>
      <AppMain>{children}</AppMain>
    </AppLayoutContext.Provider>
  );
}

export default Layout;