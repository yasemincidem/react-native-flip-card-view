import React, { Component } from 'react';
import {
    Animated,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

const styles = {
    animatedContainer: {
        flex: 1
    }
};

class FlipCard extends Component {
    constructor() {
        super();
        this._flipToggleCard = this._flipToggleCard.bind(this);
        this._flippedCard = this._flippedCard.bind(this);
        this.flippedCardView = this.flippedCardView.bind(this);
        this.state = {
            animatedValue: new Animated.Value(0),
            isFlipped: true,
        };
    }
    static propTypes = {
        flipped: PropTypes.bool,
        clickable: PropTypes.bool,
        velocity: PropTypes.number,
        tension: PropTypes.number,
        friction: PropTypes.number,
        touchOpacity: PropTypes.number,
        renderFront: PropTypes.object,
        renderBack: PropTypes.object
    }
    componentWillReceiveProps(props) {
        this.setState({ isFlipped: props.flipped });
    }
    componentDidUpdate(prevProp, prevState) {
        if (this.state.isFlipped !== prevState.isFlipped) {
            this._flippedCard();
        }
    }

    _flipToggleCard() {
        if (this.props.clickable) {
            this.setState({ isFlipped: !this.state.isFlipped });
        }
    }

    _flippedCard() {
        Animated.spring(this.state.animatedValue, {
            toValue: 0,   // Returns to the start
            velocity: this.props.velocity,  // Velocity makes it move
            tension: this.props.tension, // Slow
            friction: this.props.friction,  // Oscillate a lot
        }).start();
    }
    _getOpacity() {
        if (!this.props.touchOpacity) {
            return 0.2;
        }
        return this.props.touchOpacity;
    }

    render() {
        const rotateX = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '360deg', '0deg']
        });
        return (
            <TouchableOpacity activeOpacity={this._getOpacity()} onPress={this._flipToggleCard} style={styles.animatedContainer}>
                <Animated.View
                    style={[styles.animatedContainer, { transform: [{ rotateX }] }]}
                >
                    {this.flippedCardView(this.state.isFlipped)}
                </Animated.View>
            </TouchableOpacity>);
    }


    flippedCardView(isFlipped) {
        if (isFlipped) {
            return this.props.renderFront;
        }
        return this.props.renderBack;
    }
}

module.exports = FlipCard;
