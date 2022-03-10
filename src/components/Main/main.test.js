import React from "react";
import {screen, render} from "@testing-library/react";
import ProductPage from "./Index.js";

//Test Driven Development
describe("ProductPage", () => {
    it("must display a title", () => {
        render(<ProductPage/>)
        expect(screen.queryByText(/product page/i)).toBeInTheDocument()
    })
})