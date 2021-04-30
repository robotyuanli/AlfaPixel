import { TextStyle, ViewStyle } from "react-native";

export const defaultStyles = {
  wrapper: { position: "relative" } as ViewStyle,
  dotsContainerHorizontal: {
    position: "absolute",
    bottom: 25,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  } as ViewStyle,
  dotsContainerVertical: {
    position: "absolute",
    right: 15,
    top: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  } as ViewStyle,
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  } as ViewStyle,
  dotActive: {
    backgroundColor: "#333",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  } as ViewStyle,
  controlsContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    position: "absolute",
    top: 30,
    left: 0,
    flex: 1,
    paddingHorizontal: 50,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "flex-end"
  } as ViewStyle,
  buttonText: { color: "#333", fontSize: 60, padding: 0 } as TextStyle
};
