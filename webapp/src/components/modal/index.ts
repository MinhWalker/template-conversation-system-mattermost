import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getModalState } from "../../selectors";
import { hideModal, showModal } from "../../actions";
import Root from "./root";

const mapStateToProps = (state: any) => {
  console.log("mapStateToProps", state);

  return {
    modalState: state,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      showModal,
      hideModal,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Root);
