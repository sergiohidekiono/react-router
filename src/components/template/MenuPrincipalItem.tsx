import { IconCode } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import React from "react";

interface MenuItemProps {
    icone?: React.ReactNode;
    titulo: string;
    tag?: string;
    url: string;
    mini?: boolean;
}

export default function MenuItem(props: MenuItemProps) {
    const { icone, titulo, url, mini } = props;
    return (
        <NavLink
            to={url}
            className={({ isActive }) =>
                `flex items-center gap-2 rounded-md hover:bg-zinc-800 px-3 py-2 ${
                    isActive ? "text-orange-400 bg-zinc-900" : ""
                }`
            }
        >
            {icone ?? <IconCode />}
            {!mini && titulo}
        </NavLink>
    );
}
