import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Animated } from 'react-native';
import { BlurView } from 'expo-blur';
import LinearGradient from 'react-native-linear-gradient';
import glassStyles from '../styles/glassStyles';

// GlassForm component: A form with inputs and button styled in liquid glass effect.
// Uses BlurView for background blur, gradients for refraction, and animations for liquid feel.
const GlassForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [scaleAnim] = useState(new Animated.Value(1)); // For button press animation

    const handleSubmit = () => {
        console.log('Form submitted:', { name, email });
        // Add your submit logic here
    };

    const animatePress = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, { toValue: 0.95, duration: 100, useNativeDriver: true }),
            Animated.timing(scaleAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
        ]).start();
        handleSubmit();
    };

    return (
        <BlurView intensity={100} tint="light" style={glassStyles.glassContainer}>
            <LinearGradient
                colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)']}
                style={glassStyles.gradientOverlay}
            >
                <Text style={glassStyles.title}>Liquid Glass Form</Text>

                <TextInput
                    style={glassStyles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor="rgba(0,0,0,0.5)"
                />

                <TextInput
                    style={glassStyles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    placeholderTextColor="rgba(0,0,0,0.5)"
                />

                <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                    <TouchableOpacity style={glassStyles.button} onPress={animatePress}>
                        <Text style={glassStyles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>
        </BlurView>
    );
};

export default GlassForm;