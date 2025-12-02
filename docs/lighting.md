# Lighting control

```mermaid
flowchart TB
    MI[Media iMac]
    ENTTEC[ENTTEC DMX USB Pro Mk2]
    DMXCHAIN[DMX lighting chain]
    LIGHTKEY[Lightkey software]

    MI -->|USB 2.0| ENTTEC
    ENTTEC -->|DMX| DMXCHAIN
    LIGHTKEY -.control via USB.-> ENTTEC
```
