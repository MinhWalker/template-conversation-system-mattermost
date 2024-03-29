package main

import (
	"fmt"
	"github.com/mattermost/mattermost-server/v5/model"
	"github.com/mattermost/mattermost-server/v5/plugin"
	"github.com/pkg/errors"
	"strings"
	"time"
)

const (
	commandTriggerDialog      = "template"
	commandTriggerInteractive = "interactive"

	dialogStateSome = "somestate"
)

func (p *Plugin) registerCommands() error {

	if err := p.API.RegisterCommand(&model.Command{
		Trigger:          commandTriggerDialog,
		AutoComplete:     true,
		AutoCompleteDesc: "Open an Interactive Dialog.",
		DisplayName:      "Demo Plugin Command",
	}); err != nil {
		return errors.Wrapf(err, "failed to register %s command", commandTriggerDialog)
	}

	return nil
}

// ExecuteCommand executes a command that has been previously registered via the RegisterCommand
// API.
//
// This demo implementation responds to a /demo_plugin command, allowing the user to enable
// or disable the demo plugin's hooks functionality (but leave the command and webapp enabled).
func (p *Plugin) ExecuteCommand(c *plugin.Context, args *model.CommandArgs) (*model.CommandResponse, *model.AppError) {
	delay := p.getConfiguration().IntegrationRequestDelay
	if delay > 0 {
		time.Sleep(time.Duration(delay) * time.Second)
	}

	trigger := strings.TrimPrefix(strings.Fields(args.Command)[0], "/")
	switch trigger {
	case commandTriggerDialog:
		return p.executeCommandShowTemplate(args), nil
	default:
		return &model.CommandResponse{
			ResponseType: model.COMMAND_RESPONSE_TYPE_EPHEMERAL,
			Text:         fmt.Sprintf("Unknown command: " + args.Command),
		}, nil
	}
}

func (p *Plugin) executeCommandShowTemplate(args *model.CommandArgs) *model.CommandResponse {
	payload := map[string]interface{}{
		"type": "show_dialog_template",
	}

	// Publish the WebSocket event
	p.API.PublishWebSocketEvent("template_event", payload, &model.WebsocketBroadcast{
		UserId:    p.botID,
		ChannelId: args.ChannelId,
	})

	// Return a command response indicating the event was published (optional)
	return &model.CommandResponse{
		ResponseType: model.COMMAND_RESPONSE_TYPE_EPHEMERAL,
		Text:         "Custom dialog event published.",
	}
}

func (p *Plugin) emitStatusChange() {
	configuration := p.getConfiguration()

	p.API.PublishWebSocketEvent("status_change", map[string]interface{}{
		"enabled": !configuration.disabled,
	}, &model.WebsocketBroadcast{})
}
