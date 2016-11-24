# react-native-flip-card-view
This application is flip card view between front and back for react native.

## Installation

```sh
npm install react-native-flip-card
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
                    velocity={2} // Velocity makes it move
                    tension={5} // Slow
                    friction={1} // Oscillate a lot
                    renderFront={this._renderFront()} 
                    renderBack={this._renderBack()}/>
    );
  };
  //Desired screen view method in front page
  _renderFront() {
        return (
            <View style={{backgroundColor: 'red',flex:1,height:100}}>
                <Text>Hello front page</Text>
            </View>);
    }
  //Desired screen view method in back page
    _renderBack() {
        return (
            <View style={{backgroundColor: 'blue',flex:1,height:100}}>
                <Text>Hello back page</Text>
            </View>);
    }
 
}
```
