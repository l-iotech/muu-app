import { IconSymbol } from "@/components/ui/IconSymbol";
import { StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";

export default function ExpensesScreen() {
  const expenses = [
    { id: 1, name: "Lio", amount: 100 },
    { id: 2, name: "Lio", amount: 100 },
    { id: 3, name: "Lio", amount: 100 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Transactions</Text>
        <IconSymbol size={28} name="plus" color="black" />
      </View>

      <View style={styles.content}>
        <View style={styles.summaryBanner}>
          <View style={styles.summaryBannerItem}>
            <Text>Expenses</Text>
            <Text>100</Text>
          </View>
          <View style={styles.summaryBannerItem}>
            <Text>Income</Text>
            <Text>100</Text>
          </View>
          <View style={styles.summaryBannerItem}>
            <Text>Balance</Text>
            <Text>100</Text>
          </View>
        </View>

        <FlatList
          data={expenses}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    margin: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  summaryBanner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  summaryBannerItem: {
    justifyContent: "space-between",
    flex: 1,
    padding: 10,
    backgroundColor: "#e0e0df",
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
