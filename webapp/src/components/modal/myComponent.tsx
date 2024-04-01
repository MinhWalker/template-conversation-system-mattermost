import { Modal, Select } from 'antd';
import React, { useState } from 'react';

interface ModalProps {
  modalState: boolean;
  hideModal: () => void;
}
const MyComponent: React.FC = (props: ModalProps) => {
  const { modalState, hideModal } = props;
  const isModalVisible = props.modalState
    // const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [templates, setTemplates] = useState<string[]>(['Template 1', 'Template 2']);

  return (
      <Modal
          title="Select a Template"
          visible={modalState}
          onOk={() => hideModal}
          onCancel={() => hideModal}
      >
          <Select placeholder="Select a template" style={{ width: 120 }}>
              {templates.map((template, index) => (
                  <Option key={index.toString()} value={template}>{template}</Option>
              ))}
          </Select>
      </Modal>
  );
}

export default MyComponent