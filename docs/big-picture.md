---
outline: deep
---

# Big Picture

How do the systems connect?

## System diagrams

### Media iMac video and audio routing

- Thunderbolt outputs carry video and audio. One runs through a WAVLINK dual-HDMI adapter to feed the Roland and the confidence path. The other feeds the main scaler for the main projector and desk monitor. The scaler passes audio to the sound board via the Whirlwind IMP 2 DI. The Roland returns a mixed feed to the stream iMac through the Marshall SDI-to-USB converter, with ASA 141 handling the audio path to stream.

```mermaid
flowchart TB
    subgraph SRC[Media iMac source]
        direction TB
        MI[Media iMac]
    end

    subgraph ROLAND[Roland Video Mixer]
        direction TB
        RM[Roland Video Mixer]
    end

    subgraph TB1[Thunderbolt path B: WAVLINK]
        direction TB
        MI -->|Thunderbolt| WL[WAVLINK dual HDMI]
        WL -->|HDMI| SC_CONF[Scaler/Switcher]
        SC_CONF -->|HDMI| CONF[Confidence projector]
        WL -->|HDMI| RM
    end

    subgraph TB2[Thunderbolt path A: Main scaler]
        direction TB
        MI -->|Thunderbolt AV| SC_MAIN[Main scaler]
        SC_MAIN -->|HDMI| PJ1[Main projector]
        SC_MAIN -->|HDMI| DESK[Media desk monitor]
        SC_MAIN -->|Audio feed| DI[Whirlwind IMP 2 DI]
        DI -->|Balanced audio| SB[Sound board]
        SB -->|Audio mix| RM
    end

    subgraph CAMS[PTZ camera video into Roland]
        direction TB
        CAM1[Cam 1 PTZ] -->|SDI| CAM1CVT[SDI-to-HDMI]
        CAM1CVT -->|HDMI| RM
        CAM2[Cam 2 PTZ] -->|SDI| CAM2CVT[SDI-to-HDMI]
        CAM2CVT -->|HDMI| RM
        CAM3[Cam 3 PTZ] -->|SDI| CAM3CVT[SDI-to-HDMI]
        CAM3CVT -->|HDMI| RM
    end

    subgraph STREAM[Stream output chain]
        direction TB
        RM -->|SDI AV| SDIUSB[Marshall SDI-to-USB]
        SDIUSB -->|USB AV| SIMAC[Streaming iMac]
        RM -->|RCA audio| ASA141[ASA 141]
        ASA141 -->|Audio to stream| SIMAC
    end

    classDef mac fill:#d2e3ff,stroke:#274b8f,stroke-width:1px,color:#0f1f3d;
    classDef display fill:#c8efd6,stroke:#1f7a2e,stroke-width:1px,color:#0f2f1a;
    classDef camera fill:#ffe3c7,stroke:#b65b00,stroke-width:1px,color:#4a1f00;
    classDef control fill:#f3d9ff,stroke:#8b2bb0,stroke-width:1px,color:#3c0c52;

    class MI,SIMAC mac;
    class PJ1,DESK,CONF display;
    class CAM1,CAM2,CAM3,CAM1CVT,CAM2CVT,CAM3CVT camera;
```

### PTZ control network

```mermaid
flowchart TB
    CAM1[Cam 1 PTZ] -.Ethernet control.-> SW[PTZ switch]
    CAM2[Cam 2 PTZ] -.Ethernet control.-> SW
    CAM3[Cam 3 PTZ] -.Ethernet control.-> SW
    SW -->|Ethernet| RMC[RMC-300A Controller]
```

## Media iMac

### DMX Lighting

- [DMX Adapter](./equipment/lighting.md#enttec-dmx-usb-pro-mk2) connects the iMac to the DMX lighting system
- [Lightkey](./software/lightkey.md) software is used to edit lighting presets
    - Light presets are saved to and triggerred from the [wall panel](./equipment/lighting.md#wall-panel)
    - Light presets are triggerred from [ProPresenter](./software/propresenter.md#communicating-to-lightkey)

### Extron Scalar

*older type of video signal mixer*

- iMac outputs signal to Extron which feeds desired devices:
    - ([main projector](./equipment/projectors.md#main-projector))
    - second monitor on media desk (Dell monitor)
- This is the conduit for audio to the sound board

### Video Mixer
Receives video signal from iMac for use on stream via Thunderbolt-to-HDMI.

## Video Mixer

### Cameras

1. The PTZ (pan-tilt-zoom) cameras provide digital video via SDI (Serial Digital Interface).
1. SDI is converted to HDMI underneath the media desk.
1. The video mixer receives this HDMI from each camera (inputs 1, 2, 3)

### Media iMac

- The video mixer receives video from the Media iMac via HDMI (input 8)

### Sound Board

- The video mixer receives audio signal from sound board for use on stream via XLR-to-RCA (MIX 10)

### Streaming iMac

- The video mixer sends a final combined audio/video output to the streaming iMac, connected via USB ([Marshall SDI to USB converter](./equipment/worship-center-video.md#sdi-to-usb-converter))
- TODO this is confusing please rewrite after you get it

## Camera Controller

- Controlls wall mounted [PTZ cameras](./equipment/cameras.md#wiring) via Ethernet.
- Does nothing but controlls the position of the cameras

## Sound Board

### CD Recorder

- Records from sound board (Matrix 2)

### Audio PC

- Records from sound board (Individual channels? TBD)
- Connected via USB, can send/receive audio

### Video Mixer

- The sound board sends audio signal to video mixer for use on stream via XLR-to-RCA (MIX 10)

## Additional Items

### UPS

The uninterruptible power supply (UPS) was replaced in early 2025. Last two have died at approziately 3 years.

### Camcorder HDMI

The long HDMI cable to the front is for external camcorder

### QSC Speakers

- Must be powered on/off each time. See power connections
- Subwoofer volume knobs are at 9-10:00 position, tops are at 0db gain.
- Speaker stacks are fed from floor pockets on each side of the stage, jack #8 in both. Corresponding snake connections behind stage to patches 23/24 running to the sound board. If these get disconnected, no sound to the speakers.

### Power amps in rack behind stage

- Mostly unused, except bottom one for the lobby speakers

### IEMs

- Currently wiring supports wireless IEMs on mixes 1-4. Wired IEMs on mixes 5-7. Floor wedges on mizes 8-9 (8 comes out of right floor - could be changed, 9 comes out of right wall)
- All IEM boxes take rechargable batteries

### Stage Lights

- DMX signal chain from right wall panel. See power connections.
- Lights must be assigned to correct DMX addresses in order to respond. Each unit has menu buttons to do this. [Lightkey](./software/lightkey.md) shows what address is assigned to each.
- [Lightkey](./software/lightkey.md) diagram is set up as an overhead view of the room.

## Audio patching

*behind stage*

- Only one feed to the sound board per channel, but it can be patched to any line to the stage in any location. Channels from the sound board are wired into the patch bays, then the snakes to the stage allow you to choose location (R/L wall, R/L floor, C floor, Front Bench/pew)
