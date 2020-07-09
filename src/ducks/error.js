const DUCK_ID = "error";

const ERROR_SHOW = `${DUCK_ID}/SHOW`;
const ERROR_HIDE = `${DUCK_ID}/HIDE`;

const initialState = {
  error: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ERROR_SHOW: {
      return {
        ...state,
        error: action.payload
      };
    }
    case ERROR_HIDE: {
      return {
        ...state,
        error: initialState.error
      };
    }
    default: {
      return state;
    }
  }
}

export const showError = error => dispatch => {
  if (error) {
    console.error(error);

    if (error.message) {
      dispatch({
        type: ERROR_SHOW,
        payload: error.message
      });
    }
  }
};

export const hideError = () => (dispatch, getState) => {
  const { error } = getState().error;

  if (error) {
    dispatch({
      type: ERROR_HIDE
    });
  }
};
