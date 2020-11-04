import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop :30
  },
  textInput: {
    marginBottom: 10,
    height: 40,
    borderBottomWidth: 2,
    borderColor: "gray",
    borderRadius: 3,
    width: "90%",
    alignSelf: "center",
    textAlign: "center",
  },
  textArea: {
    marginBottom: 10,
    height: 70,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 8,
    width: "90%",
    alignSelf: "center",
    paddingHorizontal: 3,
  },
  label: {
    marginLeft: 15,
    marginBottom: 10,
    color: "grey",
    fontWeight: '700',
    fontSize: 12
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    flex:1
  },
  centeredRow: {
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    flex:1
  },
  numberInput: {
    marginBottom: 10,
    height: 40,
    width:50,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 8,
    alignSelf: "center",
    textAlign: "center",
    marginHorizontal: 10
  },
  numberInputLabel : {
    marginBottom: 1,
    color: "grey",
    fontWeight: '700',
    textAlign:'center',
    fontSize: 10
  }
});
