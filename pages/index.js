import Head from "next/head";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { initializeStore } from "../src/store";
import * as actions from "../src/ducks/index";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const IndexPage = ({ id, actionCreator }) => {
  const styles = useStyles();

  // Initial loading (if SSR hasn't succeeded)
  useEffect(() => {
    if (!id) {
      actionCreator();
    }
  }, []);

  const button = (
    <Button size="large" variant="contained" color="primary">
      Button {id}
    </Button>
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>Main Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{button}</main>
    </div>
  );
};

IndexPage.propTypes = {
  id: PropTypes.string.isRequired,
  actionCreator: PropTypes.func.isRequired
};

export const getServerSideProps = async () => {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  await dispatch(actions.actionCreator("mainPage"));

  return { props: { initialReduxState: reduxStore.getState() } };
};

const mapStateToProps = state => {
  const { index } = state;
  return index;
};

export default connect(mapStateToProps, actions)(IndexPage);
