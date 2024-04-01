import React from "react";
import { showModal } from "./action";
import reducer from "./reducer";
import { PluginRegistry } from "./types/mattermost-webapp";
import { store } from "./store";
import MyComponent from "components/modal/myComponent";
import Root from "components/modal/root";
import manifest, { id as pluginId } from "./manifest";
import { Provider } from "react-redux";

const LHSExample: React.FC = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
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
    registry.registerReducer(reducer);
    registry.registerLeftSidebarHeaderComponent(LHSExample);
    registry.registerRootComponent(MyComponent);
    // registry.registerWebSocketEventHandler(
    //   "custom_" + pluginId + "_template_event",
    //   eventHandler
    // );
  }
}

declare global {
  interface Window {
    registerPlugin(id: string, plugin: Plugin): void;
  }
}

window.registerPlugin(manifest.id, new Plugin());
