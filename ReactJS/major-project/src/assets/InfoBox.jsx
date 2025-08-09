import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({ info }) {
  let INIT_IMG =
    "https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg";

  let RAIN_IMG =
    "https://images.unsplash.com/photo-1630574232726-fc3ea90637b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let COLD_IMG =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let SUMMER_IMG =
    "https://images.unsplash.com/photo-1493936734716-77ba6da66365?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="card-container">
      <div className="info-box">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_IMG
                : info.temp > 15
                ? SUMMER_IMG
                : COLD_IMG
            }
            title="temp"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {
                info.humidity > 80
                ? <ThunderstormIcon />
                : info.temp > 15
                ? <SunnyIcon />
                : <AcUnitIcon />
              }
            </Typography>
            <Typography
              variant="body2"
              component={"span"}
              sx={{ color: "text.secondary" }}
            >
              <div>Temperature = {info.temp}&deg;C</div>
              <div>Humidity = {info.humidity}</div>
              <div>Min Temp = {info.minTemp}&deg;C</div>
              <div>Max Temp = {info.maxTemp}&deg;C</div>
              <div>
                The weather can be described as {info.weather} and feels like{" "}
                {info.feelsLike}
                {info.feelsLike}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
