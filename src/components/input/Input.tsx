import { useState } from "react";
import { Input, Space } from "antd";
import { Wrapper } from "./Input.styled";
import { easyPass, strongPass } from "../../utils/regex";

export const Password = () => {
  const [password, setPassword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Wrapper>
      <Space direction="vertical">
        <Input.Password
          placeholder="Enter password"
          style={{ width: "250px", height: "50px" }}
          maxLength={50}
          onChange={handleChange}
        />
      </Space>
      {password === "" && (
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      )}
      {password.length < 8 && password.length !== 0 && (
        <ul>
          <li style={{ backgroundColor: "red" }}></li>
          <li style={{ backgroundColor: "red" }}></li>
          <li style={{ backgroundColor: "red" }}></li>
        </ul>
      )}
      {easyPass.test(password) && password.length >= 8 && (
        <ul>
          <li style={{ backgroundColor: "red" }}></li>
          <li style={{ backgroundColor: "lightgrey" }}></li>
          <li style={{ backgroundColor: "lightgrey" }}></li>
        </ul>
      )}
      {strongPass.test(password) && password.length >= 8 && (
        <ul>
          <li style={{ backgroundColor: "green" }}></li>
          <li style={{ backgroundColor: "green" }}></li>
          <li style={{ backgroundColor: "green" }}></li>
        </ul>
      )}
      {!strongPass.test(password) &&
        !easyPass.test(password) &&
        password.length >= 8 && (
          <ul>
            <li style={{ backgroundColor: "yellow" }}></li>
            <li style={{ backgroundColor: "yellow" }}></li>
            <li style={{ backgroundColor: "lightgrey" }}></li>
          </ul>
        )}
    </Wrapper>
  );
};
