import React, {Component} from "react";
import {Animated, Easing, TouchableOpacity, Text, View} from "react-native";

class FlipCard extends Component {
    state = {
        animatedValue: new Animated.Value(0),
        isFlipped: true,
    };

    componentDidUpdate(prevProp, prevState) {
        if (this.state.isFlipped !== prevState.isFlipped) {
            this._flippedCard();
        }
    }

    _flipToggleCard() {
        this.setState({isFlipped: !this.state.isFlipped});
    }

    _flippedCard() {
        Animated.spring(this.state.animatedValue, {
            toValue: 0,   // Returns to the start
            velocity: this.props.velocity,  // Velocity makes it move
            tension: this.props.tension, // Slow
            friction: this.props.friction,  // Oscillate a lot
        }).start();
    }

    render() {
        const rotateX = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '360deg', '0deg']
        });
        return (
            <TouchableOpacity onPress={this._flipToggleCard.bind(this)} style={styles.animatedContainer}>
                <Animated.View
                    style={[styles.animatedContainer,{transform: [{rotateX}]}]}>
                    {this.flippedCardView(this.state.isFlipped)}
                </Animated.View>
            </TouchableOpacity>);
    };


    flippedCardView(isFlipped) {
        if (isFlipped) {
            return this.props.renderFront;
        } else {
            return this.props.renderBack;
        }
    }
}
const styles = {
    animatedContainer: {
        flex: 1
    }
}
export default FlipCard;
