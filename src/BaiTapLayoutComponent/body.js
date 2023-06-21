import React, { Component } from "react";
import Banner from "./banner";
import ListItem from "./list-item";

export default class Body extends Component {
    render() {
        return (
            <div>
                <div className='container px-lg-5 mt-5'>
                    <Banner />

                    <ListItem/>
                </div>
            </div>
        );
    }
}
