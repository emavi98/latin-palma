import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useRouter } from "expo-router";

const categories = [
  { title: "Comidas", emoji: "🌮" },
  { title: "Alquiler", emoji: "🏠" },
  { title: "Manicura y Pedicura", emoji: "💅" },
  { title: "Trámites", emoji: "📄" },
  { title: "Ofertas laborales", emoji: "💼" },
  { title: "Barberia y peluqueria", emoji: "💇" },
  { title: "Bares latinos", emoji: "🍹" },
  { title: "Promociones viajes", emoji: "✈️" },
  { title: "Mensajeria", emoji: "📦" },
  { title: "Eventos", emoji: "🎉" },
  { title: "Emprendimientos", emoji: "🚀" },
  { title: "Actividades y lugares de interes", emoji: "🏛️" },
  { title: "Correo de la noche", emoji: "🌙" },
  { title: "Bares", emoji: "🍻" },
  { title: "Discotecas", emoji: "💃🕺" },
];

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.overlay}>
        <ThemedText type="title" style={styles.headerTitle}>
          Categorías Latin palma
        </ThemedText>
        <View style={styles.gridContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryBox}
              onPress={() => router.push(`/categories/customers`)}
            >
              <View style={styles.categoryInner}>
                <View style={styles.emojiContainer}>
                  <ThemedText type="defaultSemiBold" style={styles.emoji}>
                    {category.emoji}
                  </ThemedText>
                </View>
                <ThemedText type="defaultSemiBold" style={styles.categoryText}>
                  {category.title}
                </ThemedText>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    backgroundColor: "#F5E6D3", // Soft beige color typical of Mallorcan facades
  },
  overlay: {
    backgroundColor: "#F5E6D3", // Soft beige color typical of Mallorcan facades
    borderRadius: 20,
    padding: 16,
    alignItems: "center",
  },
  headerTitle: {
    marginBottom: 24,
    fontSize: 32,
    fontWeight: "bold",
    color: "#006400", // Dark green, reminiscent of Mallorcan shutters
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontFamily: "SpaceMono",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#F5E6D3", // Soft beige color typical of Mallorcan facades
  },
  categoryBox: {
    width: "48%",
    aspectRatio: 1,
    marginVertical: 8,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  categoryInner: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#006400", // Dark green, color of Mallorcan shutters
  },
  emojiContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F5E6D3", // Soft beige color typical of Mallorcan facades
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  emoji: {
    fontSize: 36,
    color: "#006400", // Dark green, to contrast with the beige background
  },
  categoryText: {
    fontSize: 14,
    color: "#FFFFFF", // White for better contrast with the dark green background
    textAlign: "center",
    fontWeight: "600",
    marginTop: 4,
  },
});
