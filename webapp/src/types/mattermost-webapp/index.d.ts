import React from "react";
import { CombinedState } from "redux";
export interface PluginRegistry {
  registerPostTypeComponent(typeName: string, component: React.ElementType);
  // Add more if needed from https://developers.mattermost.com/extend/plugins/webapp/reference
  registerReducer(reducer: CombinedState<>);
  registerLeftSidebarHeaderComponent(component: React.ElementType);
  registerRootComponent(component: React.ComponentType);
  registerWebSocketEventHandler(
    eventName: string,
    eventHandle: React.EventHandler
  );
}
