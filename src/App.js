import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization, PivotTable, Model } from "@gooddata/react-components";
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
                        <div style={{ height: 500 }}>
                            <PivotTable
                                measures={[
                                    Model.measure("alUEwmBtbwSh")
                                        .localIdentifier("m_0")
                                        .format(
                                            "30000000][color=2190c0]█████ #,##0; [>=25000000][color=2190c0]████░ #,##0; [>=10000000][color=2190c0]███░░ #,##0; [>=9000000][color=2190c0]██░░░ #,##0; [>=0][color=2190c0]█░░░░ #,##0; [=Null] No data;",
                                        ),
                                ]}
                                rows={[
                                    Model.attribute("label.owner.department").localIdentifier("va_2"),
                                    Model.attribute("label.owner.id.name").localIdentifier("va_4"),
                                    Model.attribute("label.product.id.name").localIdentifier("va_5"),
                                ]}
                                columns={[Model.attribute("label.owner.department").localIdentifier("va_3")]}
                                projectId="ltn06hvt07uko2r87itmnoaibgzc0mkn"
                            />
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}

export default App;
