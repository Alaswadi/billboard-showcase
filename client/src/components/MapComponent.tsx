import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface MapComponentProps {
    height?: string;
    zoom?: number;
    center?: [number, number];
    markers?: Array<{
        id: number | string;
        position: [number, number];
        title: string;
        description?: string;
        color?: string;
    }>;
}

const DEFAULT_CENTER: [number, number] = [15.3694, 44.1910]; // Sana'a, Yemen

const createCustomIcon = (color: string = '#3b82f6') => {
    return L.divIcon({
        className: 'custom-pin',
        html: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 drop-shadow-md">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3" fill="white"></circle>
            </svg>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });
};

const MapComponent = ({
    height = "400px",
    zoom = 13,
    center = DEFAULT_CENTER,
    markers = []
}: MapComponentProps) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        // Initialize map if not already initialized
        if (!mapInstanceRef.current) {
            mapInstanceRef.current = L.map(mapRef.current).setView(center, zoom);

            // Add Google Maps Tile Layer
            L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                attribution: '&copy; <a href="https://www.google.com/maps">Google Maps</a>',
                maxZoom: 20
            }).addTo(mapInstanceRef.current);
        } else {
            // Update view if center or zoom changes
            mapInstanceRef.current.setView(center, zoom);
        }

        // Clear existing markers
        mapInstanceRef.current.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                mapInstanceRef.current?.removeLayer(layer);
            }
        });

        // Add markers
        markers.forEach(marker => {
            if (mapInstanceRef.current) {
                L.marker(marker.position, {
                    icon: createCustomIcon(marker.color)
                })
                    .addTo(mapInstanceRef.current)
                    .bindPopup(`
                        <div class="font-cairo text-right" dir="rtl">
                            <h3 class="font-bold text-sm mb-1">${marker.title}</h3>
                            ${marker.description ? `<p class="text-xs text-gray-600 m-0">${marker.description}</p>` : ''}
                        </div>
                    `);
            }
        });

        // Cleanup on unmount
        return () => {
            // We don't remove the map instance here to prevent re-initialization issues with React Strict Mode
            // or when props simply update. We only clean in a real teardown scenario if needed, 
            // but often with refs it's better to just update. 
            // However, to follow best practices for SPA nav:
            // actually, standard pattern is usually fine.
        };
    }, [center, zoom, markers]);

    // Cleanup strictly on unmount (empty dependency array return)
    useEffect(() => {
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        }
    }, [])

    return (
        <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm" style={{ height }}>
            <div ref={mapRef} style={{ height: "100%", width: "100%" }} />
        </div>
    );
}

export default MapComponent;
