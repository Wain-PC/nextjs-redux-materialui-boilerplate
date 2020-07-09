const DUCK_ID = "loading";

const LOADING_START = `${DUCK_ID}/START`;
const LOADING_END = `${DUCK_ID}/END`;

const initialState = {
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_START: {
      return {
        ...state,
        loading: true
      };
    }
    case LOADING_END: {
      return {
        ...state,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
}

export const showLoader = () => ({
  type: LOADING_START
});

export const hideLoader = () => ({
  type: LOADING_END
});
