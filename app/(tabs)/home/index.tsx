import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import {
  Sun,
  Calendar,
  Newspaper,
  ThumbsUp,
  MessageCircle,
  Share2,
} from "lucide-react-native";

const feedItems = [
  {
    id: 1,
    type: "news",
    title: "Avances en la tecnología de energía solar",
    source: "TechNews",
    summary: "Nuevos paneles solares alcanzan eficiencia récord del 29.15%",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    type: "weather",
    temperature: 25,
    condition: "Soleado",
    location: "Ciudad de México",
    forecast: "Se espera un día cálido y despejado",
  },
  {
    id: 3,
    type: "event",
    title: "Festival de Cine Internacional",
    date: "15-20 de Julio",
    location: "Centro de Convenciones",
    description:
      "Proyección de películas de todo el mundo y charlas con directores",
  },
  {
    id: 4,
    type: "news",
    title: "Descubrimiento de nueva especie marina",
    source: "OceanExplorer",
    summary:
      "Científicos descubren una nueva especie de pez en las profundidades del Pacífico",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
];

const NewsItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
    <ThemedText type="defaultBold" style={styles.itemTitle}>
      {item.title}
    </ThemedText>
    <ThemedText type="default" style={styles.itemSource}>
      {item.source}
    </ThemedText>
    <ThemedText type="default" style={styles.itemSummary}>
      {item.summary}
    </ThemedText>
    <View style={styles.itemActions}>
      <TouchableOpacity style={styles.actionButton}>
        <ThumbsUp size={20} color="#000" />
        <ThemedText type="default" style={styles.actionText}>
          Me gusta
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <MessageCircle size={20} color="#000" />
        <ThemedText type="default" style={styles.actionText}>
          Comentar
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Share2 size={20} color="#000" />
        <ThemedText type="default" style={styles.actionText}>
          Compartir
        </ThemedText>
      </TouchableOpacity>
    </View>
  </View>
);

const WeatherItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.weatherHeader}>
      <Sun size={40} color="#FFD700" />
      <ThemedText type="largeBold" style={styles.temperature}>
        {item.temperature}°C
      </ThemedText>
    </View>
    <ThemedText type="defaultBold" style={styles.weatherCondition}>
      {item.condition}
    </ThemedText>
    <ThemedText type="default" style={styles.weatherLocation}>
      {item.location}
    </ThemedText>
    <ThemedText type="default" style={styles.weatherForecast}>
      {item.forecast}
    </ThemedText>
  </View>
);

const EventItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Calendar size={40} color="#4A90E2" style={styles.eventIcon} />
    <ThemedText type="defaultBold" style={styles.itemTitle}>
      {item.title}
    </ThemedText>
    <ThemedText type="default" style={styles.eventDate}>
      {item.date}
    </ThemedText>
    <ThemedText type="default" style={styles.eventLocation}>
      {item.location}
    </ThemedText>
    <ThemedText type="default" style={styles.eventDescription}>
      {item.description}
    </ThemedText>
  </View>
);

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      {feedItems.map((item) => (
        <ThemedView key={item.id} style={styles.itemWrapper}>
          {item.type === "news" && <NewsItem item={item} />}
          {item.type === "weather" && <WeatherItem item={item} />}
          {item.type === "event" && <EventItem item={item} />}
        </ThemedView>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemWrapper: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  itemContainer: {
    padding: 15,
  },
  itemImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  itemSource: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  itemSummary: {
    fontSize: 16,
    marginBottom: 10,
  },
  itemActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    marginLeft: 5,
  },
  weatherHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  temperature: {
    fontSize: 36,
    marginLeft: 10,
  },
  weatherCondition: {
    fontSize: 18,
    marginBottom: 5,
  },
  weatherLocation: {
    fontSize: 16,
    marginBottom: 5,
  },
  weatherForecast: {
    fontSize: 14,
  },
  eventIcon: {
    marginBottom: 10,
  },
  eventDate: {
    fontSize: 16,
    marginBottom: 5,
  },
  eventLocation: {
    fontSize: 14,
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 14,
  },
});
