import * as z from "zod";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { SigninSchema } from "@/lib/validation";
import Loader from "@/components/shared/Loader";

const SigninForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  // 1. Define your form.
  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SigninSchema>) {
    setIsLoading(true);

    setTimeout(() => {
      navigate("/");
    }, 1000);

    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="flex-col text-gray-900 sm:w-420 flex-center">
        <img src="assets/logo.png" alt="logo" />
        <h2 className="pt-5 h4-bold md:h3-bold sm:pt-4">
          Login to your account
        </h2>
        <p className="text-light-3 small-medium md:base-regular">
          To login, please enter your details
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full mt-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-4 shad-button_primary">
            {isLoading ? (
              <div className="gap-2 flex-center">
                <Loader /> Authenticating...
              </div>
            ) : (
              "Sign in"
            )}
          </Button>
          <p className="mt-2 text-center text-small-regular text-light-3 ">
            Already have an account?
            <Link
              to="/register"
              className="ml-1 text-primary-500 text-small-semibold"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
