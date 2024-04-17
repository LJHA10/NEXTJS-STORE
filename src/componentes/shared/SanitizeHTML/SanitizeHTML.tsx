
import sanitize from 'sanitize-html';
import { HTMLAttributes, createElement } from "react";
createElement

type SanitizeHTMLProps = {
    children :string;
    tag: string
} & HTMLAttributes<HTMLElement>;
export const SanitizeHTML = ({tag,children, ...rest }: SanitizeHTMLProps)=> {
    const sanitizeHTML = sanitize(children, {
        allowedTags:['b','i','em','strong']
    });

    return createElement(
        tag,

        {...rest},

        sanitizeHTML
    )
};