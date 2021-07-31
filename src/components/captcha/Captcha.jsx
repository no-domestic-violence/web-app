import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import React, { useState, useEffect, useCallback } from 'react';

export default function YourReCaptchaComponent() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleRecaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
    }

    const token = await executeRecaptcha('yourAction');
    // Do whatever you want with the token
  }, []);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleRecaptchaVerify();
  }, [handleRecaptchaVerify]);

  return <button onClick={handleRecaptchaVerify}>Verify recaptcha</button>;
}
