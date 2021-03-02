// switch.test.js
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Switch from "../Switch";
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
    it("onClick change style class", () => {
        const onChange = jest.fn();
        act(() => {
            render(<Switch onChange={onChange} />, container);
        });
        // get ahold of the button element, and trigger some clicks on it
        const button = document.querySelector("[data-testid=switcher]");
        expect(button.className).toBe("switcher switch__on");
    });
});

