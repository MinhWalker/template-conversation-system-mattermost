import React from "react";

export interface PluginRegistry {
    registerPostTypeComponent(typeName: string, component: React.ElementType)
    // Add more if needed from https://developers.mattermost.com/extend/plugins/webapp/reference

    registerLeftSidebarHeaderComponent(component: React.ElementType)
    registerRootComponent(component: React.ComponentType)
    registerWebSocketEventHandler(eventName: string, eventHandle: React.EventHandler)
}
