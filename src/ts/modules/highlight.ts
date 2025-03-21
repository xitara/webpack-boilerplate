import hljs from "highlight.js";
import { on, qs } from "./utils";

on(document, "DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const highlight = urlParams.get("highlight");

    /**
     * highlight search results
     * active with 'highlight=[TEXT]' as query-paramter
     */
    if (highlight !== null) {
        const elements = document.querySelectorAll("main");
        elements.forEach((element) => {
            hljs.highlightElement(element as HTMLElement);
        });

        /**
         * scroll first element in center of viewport
         */
        const highlightElement = qs("mark");
        if (highlightElement) {
            highlightElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
    }
});
