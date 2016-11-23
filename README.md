# react-native-flip-card-view
This application is flip card view between front and back for react native.

## Demo



## Installation

```sh
npm install React-native-flip-card
```

## Example

```js
import React, {Component} from "react";
import {View} from "react-native";
import FlipCard from "ReactNativeFlipCard"

export default class Demo extends Component {
  render = () => {
    return (
      <FlipCard style={{flex: 1}}
                    velocity={2}
                    tension={5}
                    friction={1}
                    renderFront={this._renderFront()}
                    renderBack={this._renderBack()}/>
    );
  };
  _renderFront() {
        return (
            <View style={{backgroundColor: 'red',flex:1,height:100}}>
                <Text>Hello front page</Text>
            </View>);
    }

    _renderBack() {
        return (
            <View style={{backgroundColor: 'blue',flex:1,height:100}}>
                <Text>Hello back page</Text>
            </View>);
    }
 
}
```

.package.json:
```
"dependencies": {
    "react": "15.3.2",
    "react-native": "0.36.1"
  },
  "devDependencies": {
    "babel-eslint": "^7.1.0",
    "eslint": "^3.9.1",
    "eslint-plugin-react": "^6.5.0",
  }
```
