---
outline: deep
---

# Cameras

## Overview

Datavideo is the company that makes the devices we use for the live stream. This includes the [RMC-300A controller](#rmc-300a-controller) with the joystick, and the three [PTC-150](#ptc-150-cameras) PTZ (pan-tilt-zoom) cameras. These Datavideo devices are all plugged into an unmanaged network switch so that they can communicate over DVIP. These devices are not on the standard internet network, unless the switch is deliberately plugged into the internet network.

| Device | Model | MAC Address | IP Address |
| -- | -- | -- | -- |
| Controller | RMC-300A | 00:07:36:01:03:5A | 192.168.1.10 |
| Camera 1 | PTC-150 | 00:07:36:06:36:81 | 192.168.1.11 |
| Camera 2 | PTC-150 | 00:07:36:06:36:7E | 192.168.1.12 |
| Camera 3 | PTC-150 | 00:07:36:06:19:EB | 192.168.1.13 |

To set the IP addresses of these devices you can follow these instructions:
1. Plug the two switches together. The switch inside the cabinet where the UPS and Dell PC is located. This switch is the switch connected to the internet. Then there is a switch for the cameras that all 3 cameras and the RMC-300A are plugged into. Join these two switches together with a standard Ethernet cable.
2. Then on the Dell PC (simply because this is a Windows computer) you can download the following software
    - [DVIP Config Tool](https://datavideo.com/us/file/download?id=4176)
        - The Config Tool is the tool that will allow you to set the names of each device, as well as the important part of setting static IPs for each device. This doesn't need to change often/ever, but should be known as an important step to troubleshoot or setup any new Datavideo devices.
    - [DVIP Firmware Update](https://datavideo.com/us/file/download?id=4085)

## RMC-300A Controller

This controlls the three [PTC-150](#ptc-150-cameras) PTZ (pan-tilt-zoom) cameras.

### Resources

- [Manual](https://www.datavideo.com/us/file/download?id=3156)
- [Product page](https://www.datavideo.com/us/product/RMC-300A)

### Dates 

- Installed: ~January 2021
- Firmware updated: November 16, 2025.

### Presets

Each camera has presets saved. These can 

## PTC-150 Cameras

These three cameras are mounted on the back wall of the worship center:
- Camera 1, audience left
- Camera 2, audience center
- Camera 3, audience right

### Remote

There is an IR remote for these cameras that you can use to aim at the cameras to see camera firmware settings, etc. This remote is in the Worship Center's Media Closet.

### Resources

- [Manual](https://www.datavideo.com/us/file/download?id=1348)
- [Product page](https://www.datavideo.com/us/product/PTC-150)

### Dates

- Installed: ~October 2020
- Firmware updated: November 2025.
- DVIP updated: November 26, 2025. This was necessary following the RMC-300A having it's firmware updated.

## Wiring

- PTC-150 cameras provide an SDI video signal. This is converted under the media deak from SDI-to-HDMI. HDMI then goes into the [Roland V-8HD](../equipment/worship-center-video.md#roland-v-8hd-video-switcher).
- The RMC-300A and the PTC-150 cameras are all connected to a network switch under the media desk. This is a "closed" network that is not connected to internet. This uses [Datavideo's DVIP control protocol](https://www.datavideo.com/global/product/DVIP). This enables the controller to talk to the cameras.

## Camcorder

This is a camera on a tripod that moves around the worship center for various uses. There is a 50ft HDMI cord used to plug it into the [Roland V-8HD](../equipment/worship-center-video.md#roland-v-8hd-video-switcher)
