import { Button } from "antd";
import React, { useEffect } from "react";
import MyComponent from "./myComponent";

interface IRootProps {
  modalState: any;
  hideModal: any;
  showModal: any;
}

const Root: React.FC = (props: IRootProps) => {
  const { modalState, hideModal, showModal } = props;
  console.log("modalState", modalState);

  useEffect(() => {
    const fetchUser = async () => {
      // const response = await dispatch(getMeFromLoopbackPing());
      // if (response && response.status === 200) {
      //     setCurrentUser(response.data); // Adjust according to the actual structure of your response
      // }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Show Templates
      </Button>
      <MyComponent modalState={modalState} hideModal={hideModal} />
    </div>
  );
};

export default Root;
