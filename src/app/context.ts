import { createContext } from "react";

interface NavbarParams  {
  username: string | undefined | null
}
export const NavbarContext = createContext<NavbarParams>({
  username: null
});