import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";
import { factory as sdkFactory } from "@gooddata/gooddata-js";
import "./App.css";
import ExampleWithExport from "./ExampleWithExport";

//const DOWNLOADER_ID = "downloader";

class App extends Component {
    constructor(props) {
        super(props);

        const whiteLabeledDomain = "zebroids.intgdc.com";
        this.sdk = sdkFactory({ domain: whiteLabeledDomain }); // this needs to be provided as a prop to the Visualization component in render method
        this.projectId = "ltn06hvt07uko2r87itmnoaibgzc0mkn"; // this needs to be project on whitelabeled domain
        this.visId = "75548"; // this needs to be some chart visualization NOT table!!!
        // TODO once domain where this app is deployed is enabled for CORS on whitelabeled domain remove any PROXY settings

        // this.doExport = this.doExport.bind(this);
    }

    // onExportReady = exportResult => {
    //   this.exportResult = exportResult;
    // };

    // downloadFile = uri => {
    //   let anchor = document.getElementById(DOWNLOADER_ID);
    //   if (!anchor) {
    //       anchor = document.createElement("a");
    //       anchor.id = DOWNLOADER_ID;
    //       document.body.appendChild(anchor);
    //   }
    //   anchor.href = uri;
    //   anchor.download = uri;
    //   anchor.click();
    // };

    // exportToCSV = () => {
    //     this.doExport({format: "csv" });
    // };

    // async doExport(exportConfig) {
    //   try {
    //       const result = await this.exportResult(exportConfig);
    //       this.setState({ errorMessage: null });
    //       this.downloadFile(result.uri);
    //   } catch (error) {
    //       // error handling
    //       console.error(error);
    //   }
    // }

    render() {
        return (
            <div style={{ height: 367 }}>
                <ExampleWithExport>
                    {onExportReady => (
                        <div className="App">
                            <header className="App-header">
                                <div style={{ width: 600, height: 800 }}>
                                    <Visualization
                                        projectId={this.projectId}
                                        uri={`/gdc/md/${this.projectId}/obj/${this.visId}`}
                                        sdk={this.sdk}
                                        onExportReady={onExportReady}
                                    />
                                </div>
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
                                        columns={[
                                            Model.attribute("label.owner.department").localIdentifier("va_3"),
                                        ]}
                                        projectId="ltn06hvt07uko2r87itmnoaibgzc0mkn"
                                    />
                                </div>
                            </header>
                        </div>
                    )}
                </ExampleWithExport>
                {/* <div style={{ marginTop: 15 }}>
                <button className="gd-button gd-button-secondary" onClick={this.exportToCSV}>
                    Export CSV
                </button>

            </div> */}
            </div>
        );
    }
}

export default App;
