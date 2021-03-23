import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection
} from "streamlit-component-lib"
import Chart from "react-google-charts";
import React, { ReactNode } from "react"

interface State {
  numClicks: number
}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class GChartComponent extends StreamlitComponentBase<State> {

  public render = (): ReactNode => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`. Here, we access the "name" arg.

    //var maxFontSize = parseInt(this.props.args["maxFontSize"])
    //if (isNaN(maxFontSize)) maxFontSize = 30;
    console.log(this.props.args["data"])


    //console.log(clause)
    // Show a button and some text.
    // When the button is clicked, we'll increment our "numClicks" state
    // variable, and send its new value back to Streamlit, where it'll
    // be available to the Python program.
    return (
      <Chart
        width={this.props.args["width"]}
        height={this.props.args["height"]}
        chartType={this.props.args["chartType"]}
        loader={<div>Loading Chart</div>}
        data={this.props.args["data"]}
        options={this.props.args["options"]}
        rootProps={{ 'data-testid': '1' }}
      />
    )
  }


}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(GChartComponent)
