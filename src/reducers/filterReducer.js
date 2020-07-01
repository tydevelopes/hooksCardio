export const filterReducer = (_, action) => {
  switch (action.type) {
    case "ALL":
      return "ALL";
    case "LAPTOP":
      return "LAPTOP";
    case "DESKTOP":
      return "DESKTOP";
    case "TABLET":
      return "TABLET";
    case "PHONE":
      return "PHONE";
    case "WINDOW":
      return "WINDOW";
    case "LINUX":
      return "LINUX";
    case "MAC":
      return "MAC";
    default:
      return Error("unknown selection");
  }
};
