---
outline: deep
---

# Worship Center Video Equipment

## Roland V-8HD Video Switcher

Used for live stream video switching between cameras and iMac inputs.

Install date: November 9, 2025

Outputs:
    - Output 1: to the Marshall (HDMI)
    - Output 2: to the DL-HD70 which goes to HDBT OUT ethernet out, then to a little white CATa 1R772 This goes to the lobby TV.
    - Output 3: to [HP 27er monitor](#hp-27er-monitor) (HDMI)

## Marshall SDI-to-USB Converter

[Roland V-8HD](#roland-v-8hd-video-switcher)'s output 1 comes into the Marshall SDI-to-USB Converter via HDMI. From there, HDMI goes to the [IN1608](#extron-in1608) for viewing the cameras on the main projector, and also USB to the [Stream iMac](../equipment/imacs.md#stream-imac).

Model: VAC-23SHU3

## Whirlwind IMP 2 Direct Box

TODO finalize purpose and signal route. I think this is the audio from the iMac coming from the scaler.

## ASA 141

Takes the sound board’s audio feed and converts it to RCA for the Roland V-8HD input.

- [Info](https://www.extron.com/product/asa141)

## APC Back-UPS 1500

Provides battery-backed power to the Furman PL-8C and downstream devices (Media iMac, Video iMac, Roland V-8HD, RMC-300A, camera network switch, Media iMac external monitor, Roland loopback monitor, Dell Audio PC, Dell Audio PC monitor).

## WAVLINK HDMI Splitter for Dual Monitor

WAVLINK HDMI Splitter Extended Display for Dual Monitor, USB A or USB-C to Dual HDMI Adapter, Multi-Monitor Display 3 Separate Screens for Windows and macOS,4K30Hz,1080p@60Hz

- [Amazon product link](https://a.co/d/7PpIBUQ)

## Extron IN1608

An 8‑input switcher/scaler with DTP outputs. It’s your hub for multiple sources (aux laptop, Blu‑ray, Worship CPU, etc.), scales/ normalizes them, and hands off HDMI/DTP. It can also break out audio and manage EDID/format matching.

- Inputs in use:
  - Input 3: HDMI cable at the desk, labeled “Blu‑ray”; currently unused but available for any HDMI device such as a laptop.
  - Input 5: Media iMac; this is the usual selection for worship services.
  - Input 6: Roland V-8HD; use this to mirror the live stream/camera feed to the main projector.
  - Inputs 1, 2, 4, 7, 8 are not in use

- Outputs in use:
  - HDMI Output A: to Dell U2412Mb via HDMI to DVI
  - DTP cat out to the main projector

- Audio connections:
  - Input 1: RCA cable available but currently floating/unused
  - Input 2: 1/8" headphone jack is also present and unused.
  - Amplified L/R output feeds the Whirlwind DI that sends balanced audio to the sound board.

## Extron DSC 301 HD

A compact 3‑input scaler. Often used to re‑scale/re‑time the IN1608’s output for a specific display, or to solve EDID/format quirks (e.g., forcing a stable 1080p feed or handling color/HDCP issues) before sending down the line.

## Extron DTP HDMI 230 Tx

The transmitter that converts HDMI to Extron’s DTP (HDBaseT‑like) for a long Cat run to the confidence projector. This is how the HDMI signal gets over the distance without relying on a long HDMI cable.

## Dell Monitor

This is an old monitor that receives HDMI-to-DVI from the [IN1608](#extron-in1608) for the person running the Media iMac to be able to see what is on the main projector. It can also be used as a normal second monitor when not presenting.

Model: U2412Mb

## HP 27er Monitor

This mirrors Roland's little onboard display onto a larger monitor.

## SDI-to-HDMI

TODO document these. These are under the media desk on the underside.