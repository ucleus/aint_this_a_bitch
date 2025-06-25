import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Hamburger from './Hamburger';
import SideDrawer from './SideDrawer';
import FooterPopup from './FooterPopup';

export default function MapPage() {
    const [shelters, setShelters] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch('/api/shelters')
            .then(res => res.json())
            .then(data => setShelters(data));
    }, []);

    return (
        <div className="h-screen w-screen relative">
            <Hamburger onClick={() => setOpen(!open)} open={open} />
            <SideDrawer open={open}>Menu</SideDrawer>
            <MapContainer center={[26.1224, -80.1373]} zoom={12} className="h-full w-full">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {shelters.map(s => (
                    <Marker key={s.id} position={[s.latitude, s.longitude]}>
                        <Popup>{s.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
            <FooterPopup />
        </div>
    );
}
