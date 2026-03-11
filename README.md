# Yard Garden Planner

Standalone desktop/mobile web app for testing custom planter box placement on a scaled yard template.

## Open it

Open `/Users/michaelphillips/Desktop/yard-garden-planner/index.html` directly in a browser.

If you want a local server instead:

```bash
cd /Users/michaelphillips/Desktop/yard-garden-planner
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Refinements in this version

- Walkway measurement corrected to `56"`.
- Planner board uses a cropped scan underlay directly on the SVG board.
- The yard starts with no planter boxes.
- You can enter custom planter width and depth in feet, add a new planter, drag it, and rotate it in 90 degree steps.
- The walkway feeds into a defined entry court and front door marker.
- The front house masses and front door are traced onto the overlay.
- Planter boxes turn red when they are not fully inside the planter area.
- Layout positions, zoom, and scan overlay opacity are saved in `localStorage`.

## Tuning later

If you want to keep refining the overlay, edit the geometry constants and shape builders near the top of `/Users/michaelphillips/Desktop/yard-garden-planner/app.js`.
