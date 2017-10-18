import React,{Component} from "react";
import {
    Animated,
    Easing,
    TouchableOpacity,
    Text,
    View
} from "react-native";

const styles = {
    animatedContainer: {
        flex: 1
    }
};

class FlipCard extends Component{
    constructor(){
        super();
        this._flipToggleCard = this._flipToggleCard.bind(this);
        this._flippedCard = this._flippedCard.bind(this);
        this.flippedCardView = this.flippedCardView.bind(this);
        this.state = {
            animatedValue: new Animated.Value(0),
            isFlipped: true,
        };
    };
    componentWillReceiveProps(props){
        this.setState({ isFlipped: props.flipped });
    };
    componentDidUpdate(prevProp, prevState) {
        if (this.state.isFlipped !== prevState.isFlipped) {
            this._flippedCard();
        }
    };

    _flipToggleCard() {
        if (this.props.clickable){
        this.setState({isFlipped: !this.state.isFlipped});
        }
    };

    _flippedCard() {
        Animated.spring(this.state.animatedValue, {
            toValue: 0,   // Returns to the start
            velocity: this.props.velocity,  // Velocity makes it move
            tension: this.props.tension, // Slow
            friction: this.props.friction,  // Oscillate a lot
        }).start();
    };

    render() {
        const rotateX = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '360deg', '0deg']
        });
        return (
            <View onPress={this._flipToggleCard} style={styles.animatedContainer}>
                <Animated.View
                    style={[styles.animatedContainer,{transform: [{rotateX}]}]}>
                    {this.flippedCardView(this.state.isFlipped)}
                </Animated.View>
            </View>);
    };


    flippedCardView(isFlipped) {
        if (isFlipped) {
            return this.props.renderFront;
        } else {
            return this.props.renderBack;
        }
    }
}

module.exports = FlipCard;
