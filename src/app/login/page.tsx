import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import LoginForm from "./components/login-form";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="h-[400px] flex justify-center items-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Log In</CardTitle>
        </CardHeader>

        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
