// menu.test.js
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { act } from "react-dom/test-utils";
import Menu from "../Menu";
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

describe('Menu Component', () => {
    it("Should show 6 links", () => {
        const onChange = jest.fn();
        act(() => {
            render(
                <BrowserRouter>
                    <Menu onChange={onChange} />
                </BrowserRouter>, container);
        });
        // get ahold of the button element, and trigger some clicks on it
        const button = document.querySelector("[data-testid=menu] nav");
        expect(button.children.length).toBe(5);
    });
});