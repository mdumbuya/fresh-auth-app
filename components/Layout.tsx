import { Head } from "$fresh/runtime.ts";
import type { ComponentChildren } from "preact";
import Nav from "./Nav.tsx";

interface LayoutProps {
    isLoggedIn: boolean;
    children: ComponentChildren;
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <head>
                <title>Fresh Auth</title>
            </head>
            <Nav loggedIn={props.isLoggedIn} />
            <div class="p-4 mx-auto max-w-screen-md">
                {props.children}
            </div>
        </>
    );
}