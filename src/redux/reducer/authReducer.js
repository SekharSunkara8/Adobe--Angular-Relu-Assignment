const initialState = {
    token: null,
    email: null,
  };
  
  const authReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
      case "AUTH":
        return { ...state, ...payload };
      case "LOGOUT":
        return  initialState ;
      default:
        return state;
    }
  };
  
  export default authReducer;