import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getModalState } from "../../selectors";
import { hideModal, showModal } from "../../action";
import Root from "./root";

const mapStateToProps = (state: any) => {
  console.log("modalState", state);

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
