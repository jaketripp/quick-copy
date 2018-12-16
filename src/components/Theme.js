import { createMuiTheme } from "@material-ui/core/styles";
import { orange, blue } from "@material-ui/core/colors";

export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange
  },
  typography: {
    useNextVariants: true,
  }
});