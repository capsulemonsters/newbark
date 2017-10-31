'use strict';
export default {
  "debug": true, // default debug status, changeable via the URL hash #debug (needs reload)
  "wrapper": "game",
  "video": {
    "fps": 32,
    "tile_size": 32,
    "renderer": "CANVAS", // CANVAS or WEBGL
    "scale": 1, // "auto" or number
    "preset": "GBC_2x", // tile size is 32, double as original GBC (16) so the viewport should be doubled
    "presets": { // TODO: refactor this to "resolutions"
      "GBC": {
        "width": 160,
        "height": 144
      },
      "GBC_2x": {
        "width": 320,
        "height": 288
      },
      "GBA": {
        "width": 240,
        "height": 160
      },
      "GBA_2x": {
        "width": 480,
        "height": 320
      },
      "NDS": {
        "width": 256,
        "height": 192
      },
      "NDS_2x": {
        "width": 512,
        "height": 384
      },
      "3DS": {
        "width": 400,
        "height": 240
      },
      "3DS_2x": {
        "width": 800,
        "height": 480
      },
      "SWITCH": {
        "width": 1280,
        "height": 720
      }
    }
  },
  "sound": {
    "enabled": true,
    "volume": {
      "music": 40,
      "effects": 80
    }
  },
  "player": {
    "velocity_factor": 1, // this affects the number of tiles to move
    "allow_diagonal": false
  },
  "initial_scene": "S01_NewBarkTown"
};
