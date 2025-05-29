import type { ReactNode } from "react";
import type React from "react";

interface MainInterfaceProps {
    children: ReactNode;
}

export const Maincomponent: React.FC<MainInterfaceProps> = ({ children }) => {
    return <main>{children}</main>;
};