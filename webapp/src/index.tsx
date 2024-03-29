import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, hideModal } from './store/actions';
import { Modal, Select, Button } from 'antd';
import { store, AppState } from './store';
import {PluginRegistry} from "./types/mattermost-webapp";

import manifest, {id as pluginId} from './manifest';

// Correct import for Option if using Ant Design
const { Option } = Select;


const LHSExample: React.FC = () => {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [templates, setTemplates] = useState<string[]>(['Template 1', 'Template 2']);

    useEffect(() => {
        const fetchUser = async () => {
            // const response = await dispatch(getMeFromLoopbackPing());
            // if (response && response.status === 200) {
            //     setCurrentUser(response.data); // Adjust according to the actual structure of your response
            // }
        };

        fetchUser();
    }, [dispatch]);

    const showModal = () => setIsModalVisible(true);
    const handleOk = () => setIsModalVisible(false);
    const handleCancel = () => setIsModalVisible(false);

    return (
        <div>
            <Button type="primary" onClick={showModal}>Show Templates</Button>
            <Modal title="Select a Template" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Select placeholder="Select a template" style={{ width: 120 }}>
                    {templates.map((template, index) => (
                        <Option key={index.toString()} value={template}>{template}</Option>
                    ))}
                </Select>
            </Modal>
        </div>
    );
};

// MyComponent does not need changes for Redux state access, but ensure correct Option import
const MyComponent: React.FC = () => {
    const isModalVisible = useSelector((state: AppState) => store.getState().modal.isModalVisible);
    // const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [templates, setTemplates] = useState<string[]>(['Template 1', 'Template 2']);

    const dispatch = useDispatch();

    return (
        <Modal
            title="Select a Template"
            visible={isModalVisible}
            onOk={() => dispatch(hideModal())}
            onCancel={() => dispatch(hideModal())}
        >
            <Select placeholder="Select a template" style={{ width: 120 }}>
                {templates.map((template, index) => (
                    <Option key={index.toString()} value={template}>{template}</Option>
                ))}
            </Select>
        </Modal>
    );
};

// Assuming the store is correctly typed; no change needed here
const eventHandler = (event: { data: any }) => {
    if (event.data && event.data.type === "show_dialog_template") {
        store.dispatch(showModal());
    }
};

export default class Plugin {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    public async initialize(registry: PluginRegistry) {
        // @see https://developers.mattermost.com/extend/plugins/webapp/reference/
        registry.registerLeftSidebarHeaderComponent(LHSExample);
        registry.registerRootComponent(MyComponent)
        registry.registerWebSocketEventHandler( 'custom_' + pluginId + '_template_event', eventHandler);
    }
}

declare global {
    interface Window {
        registerPlugin(id: string, plugin: Plugin): void
    }
}

window.registerPlugin(manifest.id, new Plugin());
