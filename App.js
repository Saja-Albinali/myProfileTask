import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://images.app.goo.gl/eoNDZXVngAaVJEAj7",
          }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>Rita Corriea</Text>
        <Text style={style.name}>London</Text>

        <View style={styles.divider} />

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>80K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>803K</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1.4K</Text>
            <Text style={styles.statLabel}>Photos</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "darkcyan",
  },
  profileContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    width: "90%",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    backgroundColor: "lightgray",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  divider: {
    width: "90%",
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 15,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  statLabel: {
    fontSize: 14,
    color: "gray",
  },
});
