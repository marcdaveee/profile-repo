"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <form>
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-2">
          <Label>Email</Label>
          <Input type="email"></Input>
        </div>

        <div className="flex flex-col gap-y-1">
          <Label>Password</Label>
          <Input type="Password"></Input>
        </div>

        <Button>Log In</Button>
      </div>
    </form>
  );
};

export default LoginForm;
