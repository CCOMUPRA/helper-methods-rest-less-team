// Client-side JavaScript

// Reusable function to check if the user has a valid session
async function isValidSession() {
    try {
        // Send a request to the server to check the session validity
        const response = await fetch('/api/checkSession');
        const data = await response.json();

        // Replace this condition with your actual session validation logic
        return data.isValid;
    } catch (error) {
        console.error('Error checking session:', error);
        return false;
    }
}

// Example usage in your application
async function checkAndProceed() {
    if (await isValidSession()) {
        // User has a valid session, proceed with authorized actions
        console.log('User has a valid session.');
    } else {
        // Redirect the user to the login page or take appropriate action
        console.log('User does not have a valid session. Redirecting to login page.');
    }
}

// Call the checkAndProceed function when needed
checkAndProceed();
