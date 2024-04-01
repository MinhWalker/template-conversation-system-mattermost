import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getModalState } from "../../selectors";
import { hideModal, showModal } from "../../action";
import Root from "./root";

const mapStateToProps = (state: any) => {
  return {
    modalState: state,
  };
};

const mapDispatchToProps = () => {
  return {
    showModal,
    hideModal,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
