import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";
import { factory as sdkFactory } from "@gooddata/gooddata-js";
import "./App.css";
import ExampleWithExport from "./ExampleWithExport";

class App extends Component {
    constructor(props) {
        super(props);

        const whiteLabeledDomain = "zebroids.intgdc.com";
        this.sdk = sdkFactory({ domain: whiteLabeledDomain }); // this needs to be provided as a prop to the Visualization component in render method
        this.projectId = "ltn06hvt07uko2r87itmnoaibgzc0mkn"; // this needs to be project on whitelabeled domain
        this.visId = "75548"; // this needs to be some chart visualization NOT table!!!
        // TODO once domain where this app is deployed is enabled for CORS on whitelabeled domain remove any PROXY settings
    }

    render() {
        return (
            <div style={{ height: 367 }}>
                <div className="App">
                    <header className="App-header">
                        <ExampleWithExport>
                            {onExportReady => (
                                <div style={{ width: 600, height: 800 }}>
                                    <Visualization
                                        projectId={this.projectId}
                                        uri={`/gdc/md/${this.projectId}/obj/${this.visId}`}
                                        sdk={this.sdk}
                                        onExportReady={onExportReady}
                                    />
                                </div>
                            )}
                        </ExampleWithExport>
                    </header>
                </div>
            </div>
        );
    }
}

export default App;
