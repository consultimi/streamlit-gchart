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
class MyComponent extends StreamlitComponentBase<State> {
  public state = { numClicks: 0 }

  public render = (): ReactNode => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`. Here, we access the "name" arg.
    const data = this.props.args["data"]
    const word = this.props.args["word"]

    // convert array to array of num_c
    var data_wrapped = [["Phrases"]].concat(data.map( (x: String) => {
      return [x]
    }));


    //console.log(clause)
    // Show a button and some text.
    // When the button is clicked, we'll increment our "numClicks" state
    // variable, and send its new value back to Streamlit, where it'll
    // be available to the Python program.
    return (
      <Chart
        width={'500px'}
        height={'500px'}
        chartType="WordTree"
        loader={<div>Loading Chart</div>}
        data={data_wrapped}
        options={{
          wordtree: {
            format: 'implicit',
            word: {word},
          },
        }}
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
export default withStreamlitConnection(MyComponent)
