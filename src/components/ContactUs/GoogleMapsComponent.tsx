import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 28.726301, // Change this to your latitude
  lng: 77.082818, // Change this to your longitude
};

const GoogleMapsComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
    </LoadScript>
  );
};

export default GoogleMapsComponent;
