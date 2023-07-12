type Country = {
  country: string;
  cities: City[];
};

type City = {
  city: string;
  country: string;
  geoLocation: {
    latitude: number;
    longitude: number;
  };
};

type Forecast = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    is_day: number;
    time: string;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
  };
};

type Weather = {
  city: string;
  country: string;
  forecast: Forecast;
};

type WeatherProps = {
  cities: City[];
};

interface OptionType {
  value: string;
  label: string;
}
