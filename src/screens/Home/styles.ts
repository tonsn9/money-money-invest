import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#ffffff",
  },

  eventWelcome: {
    color: "#4B4B4B",
    marginTop: 36,
    fontSize: 18,
    fontWeight: "500",
  },

  eventName: {
    color: "#a5a5a5",
    fontSize: 12,
    fontWeight: "500",
  },

  eventTitle: {
    color: "#4B4B4B",
    fontSize: 25,
    fontWeight: "600",
  },

  buttonSection: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 15,
  },

  button: {
    left: 10,
    width: 25,
    height: 25,
    color: "#ffffff",
    backgroundColor: "#FF6600",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    flex: 1,
    color: "#000",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ECECEC",
    backgroundColor: "#ffffff",
    paddingTop: 2,
    paddingLeft: 50,
    height: 50,
  },

  searchSection: {
    paddingTop: 15,
    flexDirection: "row",
    backgroundColor: "#fff",
  },

  searchIcon: {
    alignItems: "center",
    paddingTop: 15,
    right: 350,
  },

  cardCompanies: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ececec",
    borderRadius: 5,
    backgroundColor: "#fff",
  },

  textCompanies: {
    color: "#4B4B4B",
    fontSize: 17,
    fontWeight: "500",
  },

  textCnpj: {
    color: "#D9D9D9",
    fontWeight: "500",
  },

  textValorSolicitado: {
    color: "#4B4B4B",
    fontSize: 18,
    fontWeight: "500",
  },

  buttonNextSection: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  buttonNext: {
    left: 220,
    width: 30,
    height: 30,
    color: "#ffffff",
    backgroundColor: "#FF6600",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
