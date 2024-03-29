package main

import (
	root "github.com/mattermost/mattermost-plugin-template-conversation"
	"github.com/mattermost/mattermost-server/v5/model"
	"sync"

	"github.com/mattermost/mattermost-server/v5/plugin"
)

var (
	manifest model.Manifest = root.Manifest
)

// Plugin implements the interface expected by the Mattermost server to communicate between the server and plugin processes.
type Plugin struct {
	plugin.MattermostPlugin

	// configurationLock synchronizes access to the configuration.
	configurationLock sync.RWMutex

	// configuration is the active plugin configuration. Consult getConfiguration and
	// setConfiguration for usage.
	configuration *configuration

	// BotId of the created bot account.
	botID string
}

// See https://developers.mattermost.com/extend/plugins/server/reference/
