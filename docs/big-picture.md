---
outline: deep
---

# Big Picture

How do the systems connect?

## System diagrams

### Media iMac video and audio routing

Two Thunderbolt paths leave the Media iMac: one hits the WAVLINK dual-HDMI for the Roland and Confidence projector, and the other feeds the Extron IN1608 switcher/scaler for the Main Projector and the Dell desk monitor. Audio is broken out via the IN1608 amplified L/R output to the Whirlwind DI and into sound board mic/line input 23. The sound board’s output 10 (XLR) hits the ASA 141 to convert to RCA for the Roland. The Roland sends video + audio to the Stream iMac through the Marshall SDI-to-USB. The Roland also feeds the lobby TV and the HP desk monitor.

```mermaid
flowchart TB
    subgraph SRC[Media iMac source]
        direction TB
        MI[Media iMac]
    end

    subgraph ROLAND[Roland Video Mixer]
        direction TB
        RM[Roland V-8HD]
        RMON[HP 27er desk monitor]
        RM -->|Output 3 HDMI| RMON
    end

    subgraph TB2[Thunderbolt path A]
        direction TB
        MI -->|Thunderbolt-to-HDMI<br/>Input 5| SC_MAIN[Extron IN1608]
        SC_MAIN -->|DTP over Cat| PJ1[Main projector]
        SC_MAIN -->|HDMI to DVI| DESK[Dell desk monitor]
        SC_MAIN -->|Amplified L/R out| DI[Whirlwind IMP 2 DI]
        DI -->|XLR to input 23| SB[Sound board]
        SB -->|Output 10 XLR| ASA141[ASA 141]
        ASA141 -->|RCA to Roland| RM
    end

    subgraph TB1[Thunderbolt path B]
        direction TB
        MI -->|Thunderbolt| WL[WAVLINK dual HDMI]
        WL -->|HDMI| RM
        WL -->|HDMI| DSC_CONF[Extron DSC 301 HD]
        DSC_CONF -->|HDMI| DTP_TX[Extron DTP HDMI 230 Tx]
        DTP_TX -->|DTP over Cat| CONF[Confidence projector]
    end

    subgraph CAMS[PTZ camera video into Roland]
        direction TB
        CAM1[Cam 1 PTZ] -->|SDI| CAM1CVT[SDI-to-HDMI]
        CAM1CVT -->|HDMI| RM
        CAM2[Cam 2 PTZ] -->|SDI| CAM2CVT[SDI-to-HDMI]
        CAM2CVT -->|HDMI| RM
        CAM3[Cam 3 PTZ] -->|SDI| CAM3CVT[SDI-to-HDMI]
        CAM3CVT -->|HDMI| RM
        CAM4[Camcorder] -->|HDMI| RM
    end

    subgraph STREAM[Stream output chain]
        direction TB
        RM -->|Output 1 HDMI| SDIUSB[Marshall SDI-to-USB]
        SDIUSB -->|USB 3.0 AV| SIMAC[Stream iMac]
        SDIUSB -->|HDMI to IN1608| SC_MAIN
    end

    subgraph LOBBYFEED[Lobby TV chain]
        direction TB
        RM -->|Output 2 HDMI| DLHD70[DL-HD70 extender]
        DLHD70 -->|HDBT OUT over Cat| CATAR[CATa 1R772 receiver]
        CATAR -->|HDMI| LOBBY[Lobby TV]
    end

    click MI "/mjmc-tech-docs/equipment/imacs.html#media-imac" "Open Media iMac in equipment docs"
    click SIMAC "/mjmc-tech-docs/equipment/imacs.html#stream-imac" "Open Stream iMac in equipment docs"
    click PJ1 "/mjmc-tech-docs/equipment/projectors.html#main-projector" "Open Main Projector in equipment docs"
    click CONF "/mjmc-tech-docs/equipment/projectors.html#confidence-projector" "Open Confidence Projector in equipment docs"
    click RMON "/mjmc-tech-docs/equipment/worship-center-video.html#hp-27er-monitor" "Open HP 27er monitor in equipment docs"
    click DESK "/mjmc-tech-docs/equipment/worship-center-video.html#dell-monitor" "Open Dell monitor in equipment docs"
    click WL "/mjmc-tech-docs/equipment/worship-center-video.html#wavlink-hdmi-splitter-for-dual-monitor" "Open WAVLINK in equipment docs"
    click RM "/mjmc-tech-docs/equipment/worship-center-video.html#roland-v-8hd-video-switcher" "Open Roland V-8HD details"
    click SC_MAIN "/mjmc-tech-docs/equipment/worship-center-video.html#extron-in1608" "Open Extron IN1608 details"
    click DSC_CONF "/mjmc-tech-docs/equipment/worship-center-video.html#extron-dsc-301-hd" "Open Extron DSC 301 HD details"
    click ASA141 "/mjmc-tech-docs/equipment/worship-center-video.html#asa-141" "Open ASA 141 details"
    click DTP_TX "/mjmc-tech-docs/equipment/worship-center-video.html#extron-dtp-hdmi-230-tx" "Open Extron DTP HDMI 230 Tx details"
    click DI "/mjmc-tech-docs/equipment/worship-center-video.html#whirlwind-imp-2-direct-box" "Open Whirlwind DI details"
    click SDIUSB "/mjmc-tech-docs/equipment/worship-center-video.html#marshall-sdi-to-usb-converter" "Open Marshall SDI-to-USB details"
    click CAM1 "/mjmc-tech-docs/equipment/cameras.html#ptc-150-cameras" "Open camera wiring details"
    click CAM2 "/mjmc-tech-docs/equipment/cameras.html#ptc-150-cameras" "Open camera wiring details"
    click CAM3 "/mjmc-tech-docs/equipment/cameras.html#ptc-150-cameras" "Open camera wiring details"
    click CAM4 "/mjmc-tech-docs/equipment/cameras.html#panasonic-hc-v180-camcorder" "Open camcorder details"

    classDef mac fill:#d2e3ff,stroke:#274b8f,stroke-width:1px,color:#0f1f3d;
    classDef display fill:#c8efd6,stroke:#1f7a2e,stroke-width:1px,color:#0f2f1a;
    classDef camera fill:#ffe3c7,stroke:#b65b00,stroke-width:1px,color:#4a1f00;
    classDef control fill:#f3d9ff,stroke:#8b2bb0,stroke-width:1px,color:#3c0c52;

    class MI,SIMAC mac;
    class PJ1,DESK,CONF,RMON,LOBBY display;
    class CAM1,CAM2,CAM3,CAM4,CAM1CVT,CAM2CVT,CAM3CVT camera;
```

### PTZ control network

The PTZ cameras share a closed control network: each camera home-runs Ethernet to the PTZ switch, which feeds the RMC-300A controller for pan/tilt/zoom control.

```mermaid
flowchart TB
    CAM1[Cam 1 PTZ] -.Ethernet.-> SW[PTZ switch]
    CAM2[Cam 2 PTZ] -.Ethernet.-> SW
    CAM3[Cam 3 PTZ] -.Ethernet.-> SW
    SW -->|Ethernet| RMC[RMC-300A Controller]

    click CAM1 "/mjmc-tech-docs/equipment/cameras.html#ptc-150-cameras" "Open camera wiring details"
    click CAM2 "/mjmc-tech-docs/equipment/cameras.html#ptc-150-cameras" "Open camera wiring details"
    click CAM3 "/mjmc-tech-docs/equipment/cameras.html#ptc-150-cameras" "Open camera wiring details"
    click SW "/mjmc-tech-docs/equipment/cameras.html#switch" "Open PTZ switch details"
    click RMC "/mjmc-tech-docs/equipment/cameras.html#rmc-300a-controller" "Open RMC-300A details"
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

### Stream iMac

- The video mixer sends a final combined audio/video output to the stream iMac, connected via USB ([Marshall SDI to USB converter](./equipment/worship-center-video.md#sdi-to-usb-converter))

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

### HDMI to Camcorder 

The long HDMI cable to the front is for external [Panasonic Camcorder](./equipment/cameras.md#panasonic-hc-v180-camcorder)

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
