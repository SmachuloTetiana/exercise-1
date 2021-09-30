import React from "react";
import {shallow} from "enzyme";
import TimeComponent from "./Time";

describe("Show time", () => {
    test("should render", () => {
        const component = shallow(<TimeComponent />);

        expect(component).toMatchSnapshot();
    });
});
