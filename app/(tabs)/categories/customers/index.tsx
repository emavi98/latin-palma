import React from "react";
import { useLocalSearchParams } from "expo-router";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Circle, Text as SvgText } from "react-native-svg";
import { useRouter } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";

const LogoSvg = ({ text }) => (
  <Svg height="50" width="50" viewBox="0 0 50 50">
    <Circle cx="25" cy="25" r="25" fill="#4a90e2" />
    <SvgText
      fill="white"
      fontSize="20"
      fontWeight="bold"
      x="25"
      y="30"
      textAnchor="middle"
    >
      {text}
    </SvgText>
  </Svg>
);

const EmpresaCard = ({ customer }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(`/categories/customers/info/[id]`)}
    >
      <ThemedView style={styles.card}>
        {/*  <LogoSvg text={empresa.logo} /> */}
        <View style={styles.infoContainer}>
          <ThemedText style={styles.nombre}>{customer.company_name}</ThemedText>
          <ThemedText style={styles.direccion}>
            {customer.company_address}
          </ThemedText>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Llamar")}
          >
            <Ionicons name="call-outline" size={20} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("WhatsApp")}
          >
            <Ionicons name="logo-whatsapp" size={20} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Más información")}
          >
            <Ionicons
              name="information-circle-outline"
              size={20}
              color="#ffffff"
            />
          </TouchableOpacity>
        </View>
      </ThemedView>
    </TouchableOpacity>
  );
};

export default function Index() {
  const { id } = useLocalSearchParams();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const { data, error } = await supabase.from("customers").select("*");
      if (error) {
        console.log(error);
      } else {
        setCustomers(data);
      }
    };

    fetchCustomers();
  }, []);

  console.log(customers);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Bares
      </ThemedText>
      <FlatList
        data={customers}
        renderItem={({ item }) => <EmpresaCard customer={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#F5E6D3",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  direccion: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    textDecorationLine: "underline",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#25D366",
    padding: 8,
    borderRadius: 5,
    marginLeft: 6,
  },
});
