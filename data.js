var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.15568958284344703,
        "pitch": 0.005560273997289755,
        "fov": 1.3344830266887417
      },
      "linkHotspots": [
        {
          "yaw": -0.418513394677932,
          "pitch": -0.22304631473384084,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.20627251466486562,
          "pitch": -0.04886201093168552,
          "title": "Welcome&nbsp;",
          "text": "Hey, nice to have you here at the faculty of engineering!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11624030753746695,
          "pitch": 0.06662039108141826,
          "rotation": 5.497787143782138,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.025242636745661073,
          "pitch": 0.16768915922915895,
          "title": "Atrium",
          "text": "Feel free to come here to self-study and study with friends!"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9256785458533976,
          "pitch": 0.08520368318924731,
          "rotation": 4.71238898038469,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.000009388699982793014,
          "pitch": 0,
          "rotation": 0,
          "target": "1-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.10158681664488256,
          "pitch": 0.006668724937728854,
          "title": "Auditorium",
          "text": "Please go inside for the activities!"
        }
      ]
    }
  ],
  "name": "Yuan",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
