import { Platform, StyleSheet } from "react-native";
import { hasNotch } from "@freakycoder/react-native-helpers";

export const _shadowStyle = (shadowColor: string) => ({
  ...Platform.select({
    ios: {
      shadowColor: shadowColor || "rgba(0,0,0,0.2)",
      shadowOffset: {
        width: 0,
        height: -3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
    android: {
      elevation: 2,
    },
  }),
});

export const glueContainer = ({
  height,
  borderTopLeftRadius,
  borderTopRightRadius,
  backgroundColor,
}: {
  height: number | string;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  backgroundColor: string;
}) => {
  return {
    backgroundColor: backgroundColor || "#fff",
    borderTopLeftRadius: borderTopLeftRadius || 24,
    borderTopRightRadius: borderTopRightRadius || 24,
    height: hasNotch() ? height || 100 : height || 80,
  };
};

export default StyleSheet.create({
  container: {
    bottom: 0,
    width: "100%",
    position: "absolute",
  },
  glue: {
    margin: 16,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  homeButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: "#FFC484",
  },
  iconImageStyle: {
    width: 15,
    height: 15,
    tintColor: "#fff",
  },
});
