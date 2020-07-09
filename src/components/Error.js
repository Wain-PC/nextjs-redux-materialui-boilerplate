import PropTypes from "prop-types";
import { connect } from "react-redux";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import * as actions from "../ducks/error";

const Error = ({ error, hideError }) => {
  return (
    <Snackbar open={Boolean(error)} onClose={hideError}>
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={hideError}
        severity="error"
      >
        {error}
      </MuiAlert>
    </Snackbar>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
  hideError: PropTypes.func.isRequired
};

const mapStateToProps = ({ error }) => error;

export default connect(mapStateToProps, actions)(Error);
