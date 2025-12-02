# Lighting control

```mermaid
flowchart TB
    subgraph MI[Media iMac]
        LIGHTKEY[Lightkey software]
    end
    ENTTEC[ENTTEC DMX USB Pro Mk2]
    DMXCHAIN[DMX lighting chain]

    MI -->|USB 2.0| ENTTEC
    ENTTEC -->|DMX| DMXCHAIN
```
