// toggle.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Toggle from "../Toggle";
let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('Switch Component', () => {

    it("changes value when clicked", () => {

        const onChange = jest.fn();

        act(() => {
            render(<Toggle onChange={onChange} />, container);
        });
        // get ahold of the button element, and trigger some clicks on it
        const button = document.querySelector("[data-testid=toggle]");
        expect(button.innerHTML).toBe("Turn on");

        //check class can be set
        expect(button.className).toBe("toggle toggle__on");
        
        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(button.innerHTML).toBe("Turn off");
        act(() => {
            for (let i = 0; i < 5; i++) {
                button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
            }  
        });
        expect(onChange).toHaveBeenCalledTimes(6);
        expect(button.innerHTML).toBe("Turn on");
    
    });

});