import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";

import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(() => ({
  loader: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%"
  }
}));

const Loading = ({ loading }) => {
  if (!loading) {
    return null;
  }

  const styles = useStyles();

  return <LinearProgress color="secondary" className={styles.loader} />;
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = ({ loading }) => loading;

export default connect(mapStateToProps)(Loading);
