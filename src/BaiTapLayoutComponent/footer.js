import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div
                className="footer mt-5"
                style={{
                    backgroundColor: "black",
                    textAlign: "center",
                    padding: "15px 0",
                    color: "white",
                }}
            >
                Copyright by Trung
            </div>
        );
    }
}
