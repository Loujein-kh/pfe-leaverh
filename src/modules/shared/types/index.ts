import { ComponentType, ReactNode } from "react";

interface GuardProps {
    children: ReactNode;
}

export interface IRoute {
    path: string;
    element: ReactNode;
    guard?: ComponentType<GuardProps>;
    layout?: ComponentType<GuardProps>;
}