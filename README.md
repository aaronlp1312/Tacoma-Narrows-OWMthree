My Tacoma Narrows Weather Scene is designed by me, a dude with no programming skill , dyslexia , an idea , and the memory's of our favorite spot. i had to find something to do to cope. i am building this for you. 

Rest in peace my loves A.M.H and Ty. fly free like the birds, watch over me,  dont poop on me.

currently building project directly on a Galaxy S25 with termux, image toolbox, and my two thumbs and 80 year olf black and white photos. 

Tacoma Narrows Weather Scene is an atmospheric, real-time weather visualization built around an interactive environmental simulation rather than a traditional weather dashboard.
The application converts live weather data into a continuously evolving visual environment centered on the historic Tacoma Narrows landscape, where atmospheric conditions are expressed through motion, lighting, and layered environmental effects.
Instead of presenting weather as static icons and numbers, this project renders weather as a living scene.

Concept
Most weather applications describe conditions.
This project represents conditions physically.
Live meteorological data drives:
sky color and lighting transitions
cloud density and altitude layers
fog and mist formation
precipitation behavior
wind-driven motion
solar and lunar positioning
environmental intensity
The result is a weather experience that feels spatial and cinematic rather than informational alone.

Key Features
 Dynamic Atmospheric System
Multiple rendering layers simulate real atmospheric behavior:
WebGL cloud layers (high, mid, and storm systems)
procedural fog and mist shaders
animated sky gradients based on solar position
starfield rendering with constellation mapping
real-time day/night transitions
Each layer updates independently for performance and visual depth.

 Tacoma Narrows Bridge Integration
The historic 1940 Tacoma Narrows Bridge acts as the visual anchor of the scene.
Features include:
transparent PNG overlay rendering
wind-responsive deformation simulation
day/night texture switching
perspective-correct scene placement
environmental lighting adaptation
Wind speed from live weather data subtly influences bridge motion.
 Weather Particle Engines
Custom canvas-based particle systems simulate precipitation:
Condition
Behavior
Rain
directional streak rendering with splash effects
Snow
drifting flakes with depth variation
Hail
physics-based bouncing particles
Lightning
randomized storm flashes
Particle density and activation respond directly to weather codes.
 Solar and Lunar Cycle
A continuous orbital model simulates celestial motion:
sunrise and sunset progression
twilight color blending
moon positioning during night hours
brightness scaling across the environment
Lighting intensity affects both atmospheric shaders and 3D scene illumination.
Environmental Rendering Stack
The application uses a layered canvas architecture:
Copy code

Sky Gradient
Starfield
Cloud Layers
Fog / Mist
Sun & Moon Orbit
Tacoma Narrows Scene
Precipitation Systems
Lightning Effects
UI Overlay

Each system operates independently while sharing environmental state data.
 Wind-Reactive Environment
Wind speed dynamically influences environmental animation:
bridge deformation amplitude
tree sway motion
atmospheric movement speed
particle trajectories
This creates a direct visual relationship between weather data and motion.

Technology Stack
HTML5
CSS3 (custom property driven environment control)
Vanilla JavaScript (ES6+)
Canvas 2D Rendering
WebGL2 shaders
Three.js (water and scene rendering)
OpenWeatherMap API
No frontend frameworks are used.
All systems run client-side.
Project Structure


Tacoma-Narrows-OWMthree/
│
├── index.html        # Scene layout and canvas layers
├── style.css         # Environment styling and animation system
├── tacnarrowsapp.js  # Main weather + rendering controller
│
├── assets/
│   ├── bridge/
│   ├── terrain/
│   ├── trees/
│   └── icons/
│
└── README.md
How It Works
The application retrieves live weather data using the OpenWeatherMap One Call API.
Weather icon codes map to environmental states.
Controllers update atmospheric systems independently.
Visual layers blend together into a unified scene.
The environment continuously evolves as conditions change.
The interface behaves more like a real-time simulation than a static application.
Running Locally
Clone the repository:
Bash
Copy code
git clone https://github.com/aaronlp1312/Tacoma-Narrows-OWMthree.git
Enter the project directory:
Bash
Copy code
cd Tacoma-Narrows-OWMthree
Start a local server:
Bash
Copy code
npx serve
or
Bash
Copy code
python -m http.server
Open in browser:
Copy code

http://localhost:3000
(Local hosting is required due to module loading and API requests.)
Current Status
This project is actively evolving and serves as an experimental exploration of environmental visualization.

Planned improvements include:
expanded atmospheric transitions
performance optimization
enhanced precipitation physics
additional environmental detail layers
improved mobile performance
Design Philosophy
Weather should be experienced, not just read.
Motion communicates conditions better than icons.
Interfaces can be environments.
Data should influence atmosphere directly.

Weather data provided by OpenWeatherMap.
Tacoma Narrows Bridge representation inspired by the original 1940 structure.

This project is provided for educational and experimental purposes.
