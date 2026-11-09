import { StyleSheet } from 'react-native';

// Centralized styles for the liquid glass effect.
// These can be adjusted for more refraction or blur intensity.
const glassStyles = StyleSheet.create({
    glassContainer: {
        width: '90%',
        padding: 20,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 10, // For Android shadow
    },
    gradientOverlay: {
        flex: 1,
        padding: 20,
        borderRadius: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
        color: '#000',
    },
    button: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
    },
});

export default glassStyles;