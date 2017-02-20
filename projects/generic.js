'use strict';
/*************************************************\
generated from arsdk-xml/xml/*.xml
generated by utils/convertSDK.js
generated on : 2/20/2017, 9:27:03 AM
\**************************************************/
const projects={
  "feature": {
    "info": {
      "id": "133",
      "name": "generic"
    },
    "details": "All generic messages",
    "enums": {
      "list_flags": {
        "info": {
          "tagType": "enum",
          "name": "list_flags"
        },
        "details": "Flags use by maps and lists",
        "First": {
          "info": {
            "tagType": "value",
            "name": "First"
          },
          "details": "indicate it's the first element of the list."
        },
        "Last": {
          "info": {
            "tagType": "value",
            "name": "Last"
          },
          "details": "indicate it's the last element of the list."
        },
        "Empty": {
          "info": {
            "tagType": "value",
            "name": "Empty"
          },
          "details": "indicate the list is empty (implies First/Last). All other arguments should be ignored."
        },
        "Remove": {
          "info": {
            "tagType": "value",
            "name": "Remove"
          },
          "details": "This value should be removed from the existing list."
        }
      }
    },
    "multisettings": {
      "DroneSettings": {
        "info": {
          "tagType": "multisetting",
          "name": "DroneSettings"
        },
        "details": "Drone settings",
        "member": [
          {
            "info": {
              "link": "ardrone3.PilotingSettings.MaxAltitude"
            }
          },
          {
            "info": {
              "link": "ardrone3.PilotingSettings.MaxTilt"
            }
          },
          {
            "info": {
              "link": "ardrone3.PilotingSettings.MaxDistance"
            }
          },
          {
            "info": {
              "link": "ardrone3.PilotingSettings.NoFlyOverMaxDistance"
            }
          },
          {
            "info": {
              "link": "ardrone3.SpeedSettings.MaxVerticalSpeed"
            }
          },
          {
            "info": {
              "link": "ardrone3.SpeedSettings.MaxRotationSpeed"
            }
          },
          {
            "info": {
              "link": "ardrone3.SpeedSettings.MaxPitchRollRotationSpeed"
            }
          },
          {
            "info": {
              "link": "ardrone3.GPSSettings.ReturnHomeDelay"
            }
          },
          {
            "info": {
              "link": "ardrone3.GPSSettings.HomeType"
            }
          },
          {
            "info": {
              "link": "ardrone3.PictureSettings.VideoStabilizationMode"
            }
          },
          {
            "info": {
              "link": "ardrone3.PilotingSettings.BankedTurn"
            }
          }
        ]
      },
      "DroneSettingsChanged": {
        "info": {
          "tagType": "multisetting",
          "name": "DroneSettingsChanged"
        },
        "details": "Drone settings changed",
        "member": [
          {
            "info": {
              "link": "ardrone3.PilotingSettingsState.MaxAltitudeChanged"
            }
          },
          {
            "info": {
              "link": "ardrone3.PilotingSettingsState.MaxTiltChanged"
            }
          },
          {
            "info": {
              "link": "ardrone3.PilotingSettingsState.MaxDistanceChanged"
            }
          },
          {
            "info": {
              "link": "ardrone3.PilotingSettingsState.NoFlyOverMaxDistanceChanged"
            }
          },
          {
            "info": {
              "link": "ardrone3.SpeedSettingsState.MaxVerticalSpeedChanged"
            }
          },
          {
            "info": {
              "link": "ardrone3.SpeedSettingsState.MaxRotationSpeedChanged"
            }
          },
          {
            "info": {
              "link": "ardrone3.SpeedSettingsState.MaxPitchRollRotationSpeedChanged"
            }
          },
          {
            "info": {
              "link": "ardrone3.GPSSettingsState.ReturnHomeDelayChanged"
            }
          },
          {
            "info": {
              "link": "ardrone3.GPSSettingsState.HomeTypeChanged"
            }
          },
          {
            "info": {
              "link": "ardrone3.PictureSettingsState.VideoStabilizationModeChanged"
            }
          },
          {
            "info": {
              "link": "ardrone3.PilotingSettingsState.BankedTurnChanged"
            }
          }
        ]
      }
    },
    "msgs": {
      "default": {
        "info": {
          "tagType": "cmd",
          "name": "default",
          "id": "1"
        },
        "comment": {
          "info": {
            "title": "default",
            "desc": "default",
            "support": "none",
            "result": "default"
          }
        }
      },
      "SetDroneSettings": {
        "info": {
          "tagType": "cmd",
          "name": "SetDroneSettings",
          "id": "2"
        },
        "settings": {
          "info": {
            "tagType": "arg",
            "name": "settings",
            "type": "multisetting_DroneSettings"
          },
          "comment": {
            "info": {
              "title": "SetDroneSettings",
              "desc": "Set several drone settings in only one command.",
              "support": "none",
              "result": "Drone settings are set.\\n Then, event [DroneSettingsChanged](#133_3) is triggered."
            }
          }
        }
      },
      "DroneSettingsChanged": {
        "info": {
          "tagType": "evt",
          "name": "DroneSettingsChanged",
          "id": "3"
        },
        "settings": {
          "info": {
            "tagType": "arg",
            "name": "settings",
            "type": "multisetting_DroneSettingsChanged"
          },
          "comment": {
            "info": {
              "title": "Drone Settings",
              "desc": "Informs that several drones settings changed.",
              "support": "none",
              "triggered": "by [SetDroneSettings](#133_2)."
            }
          }
        }
      }
    }
  },
  "lookup": {}
}

module.exports=projects;
              