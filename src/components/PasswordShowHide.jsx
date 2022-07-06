import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
const ShowAndHidePassword = (props) => {
const [values, setValues] = React.useState({
  password: "",
  showPassword: false,
});

const handleClickShowPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

const handlePasswordChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};

return (
  <div>
  <Input style={{ "flex" : "1","min-width" : "40%","margin" : "10px 0","padding": "10px"}}
    type={values.showPassword ? "text" : "password"}
    onChange={handlePasswordChange("password")}
    placeholder={props.data}
    value={values.password}
    endAdornment={
    <InputAdornment position="end">
      <IconButton
      onClick={handleClickShowPassword}
      onMouseDown={handleMouseDownPassword}
      >
      {values.showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
    }
  />
  </div>
);
};

export default ShowAndHidePassword;
