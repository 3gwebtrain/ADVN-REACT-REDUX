import React, {Component} from "react";
import CommentList from "components/CommentList";
import Root from "Root";
import {mount} from "enzyme";

let wrapped;

beforeEach(() => {
    const initialState = {
        comments:['comment1','comment2']
    }
    wrapped = mount(<Root initialState={initialState}>
    <CommentList />
    </Root>);
});

it("creates one LI per comment", () => {
    console.log( wrapped.find('li').length );
});