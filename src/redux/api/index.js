import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


// Get Firebase Auth Error Messages by Code
const getFirebaseAuthErrorMessagesByCode = (code) => {
  switch (code) {
    case "auth/claims-too-large":
      return "claims-too-large";
    case "auth/email-already-exists":
      return "The provided email is already in use by an existing user. Each user must have a unique email.";
    case "auth/id-token-expired":
      return "Token is expired.";
    case "auth/id-token-revoked":
      return "Token has been revoked.";
    case "auth/insufficient-permission":
      return "Insufficient permission to use this authentication feature.";
    case "auth/internal-error":
      return "Internal server error.";
    case "auth/invalid-argument":
      return "Invalid argument provided to an Authentication method.";
    case "auth/invalid-claims":
      return "Invalid-claims.";
    case "auth/invalid-continue-uri":
      return "Invalid URL.";
    case "auth/invalid-creation-time":
      return "The creation time must be a valid UTC date string.";
    case "auth/invalid-credential":
      return "Invalid creadential.";
    case "auth/invalid-email":
      return "Invalid email.";
    case "auth/invalid-email-verified":
      return "Invalid emil verified.";
    case "auth/invalid-id-token":
      return "Invalod token id.";
    case "auth/invalid-password":
      return "The provided value for the password user property is invalid. It must be a string with at least six characters.";
    case "auth/user-not-found":
      return "There is no existing user record corresponding to the provided identifier.";
    case "auth/email-already-in-use":
      return "Email is already taken.";
    case "auth/app-deleted":
      return "Internal server error.";
    case "auth/app-not-authorized":
      return "Unauthorized access";
    case "auth/too-many-requests":
      return "Requests are blocked from a device due to unusual activity. Trying again after some delay would unblock.";
    case "auth/user-disabled":
      return "Your account has been disabled.";
    case "auth/wrong-password":
      return "Incorrect password.";
    default:
      return code;
  }
};

export default { auth, getFirebaseAuthErrorMessagesByCode };
