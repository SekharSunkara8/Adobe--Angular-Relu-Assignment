import firebaseUtils from "../api/index";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  onIdTokenChanged,
} from "firebase/auth";
import toast from "react-hot-toast";

// Helper function to update user profile and set token
const updateUserProfileAndSetToken = async (user) => {
  await updateProfile(user, { displayName: user.email });
  const token = await user.getIdToken();
  localStorage.setItem("token", token);
};

export const signUpUser = (email, password, navigate, setProgress, setLoading) => async (dispatch) => {
  try {
    setProgress(40);
    const response = await createUserWithEmailAndPassword(getAuth(), email, password);
    
    if (response) {
      await updateProfile(response.user, { displayName: response.user.email });
      await updateUserProfileAndSetToken(response.user);

      dispatch({
        type: "AUTH",
        payload: { email: response.user.email, token: response.user },
      });
      navigate("/");
      toast.success("User created successfully");
    }
  } catch (error) {
    toast.error(firebaseUtils.getFirebaseAuthErrorMessagesByCode(error.code));
  } finally {
    setLoading(false);
    setProgress(100);
  }
};

export const loginUser = (email, password, navigate, setLoading, setProgress) => async (dispatch) => {
  try {
    setProgress(40);
    const response = await signInWithEmailAndPassword(getAuth(), email, password);
    
    if (response) {
      await updateProfile(response.user, { displayName: response.user.email });
      await updateUserProfileAndSetToken(response.user);

      dispatch({
        type: "AUTH",
        payload: { email: response.user.email, token: response.user },
      });
      navigate("/");
      toast.success("User logged in successfully");
    }
  } catch (error) {
    toast.error(firebaseUtils.getFirebaseAuthErrorMessagesByCode(error.code));
  } finally {
    setLoading(false);
    setProgress(100);
  }
};

export const getUser = () => async (dispatch) => {
  try {
    onAuthStateChanged(getAuth(), async (user) => {
      if (user) {
        await updateUserProfileAndSetToken(user);
        dispatch({ type: "AUTH", payload: { email: user.email, token: user } });
        toast.success("User Verified");
      } else {
        dispatch(logout());
        localStorage.clear();
      }
    });

    onIdTokenChanged(getAuth(), async (user) => {
      if (!user) {
        localStorage.clear();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOut(getAuth());
    dispatch({ type: "LOGOUT" });
  } catch (error) {
    console.log(error);
  }
};
