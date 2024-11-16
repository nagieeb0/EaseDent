import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Search } from 'lucide-react';

interface LocationPickerProps {
  value: { lat: number; lng: number } | null;
  onChange: (location: { lat: number; lng: number }) => void;
}

const defaultCenter = { lat: 30.0444, lng: 31.2357 }; // Cairo, Egypt

export default function LocationPicker({ value, onChange }: LocationPickerProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const mapRef = React.useRef<google.maps.Map>();

  const handleSearch = async () => {
    if (!searchQuery || !mapRef.current) return;

    const geocoder = new google.maps.Geocoder();
    try {
      const result = await geocoder.geocode({ address: searchQuery });
      if (result.results[0]?.geometry?.location) {
        const location = result.results[0].geometry.location;
        const lat = location.lat();
        const lng = location.lng();
        onChange({ lat, lng });
        mapRef.current.panTo({ lat, lng });
      }
    } catch (error) {
      console.error('Geocoding error:', error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search location..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>

      <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ''}>
        <GoogleMap
          mapContainerClassName="w-full h-[300px] rounded-lg"
          center={value || defaultCenter}
          zoom={13}
          onClick={(e) => {
            if (e.latLng) {
              onChange({
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
              });
            }
          }}
          onLoad={(map) => {
            mapRef.current = map;
          }}
        >
          {value && <Marker position={value} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}