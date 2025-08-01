'use client';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SeperatorWithText } from "@/components/ui/separator";

const signinSchema = z.object({
  email: z.string().min(1, "Email is required").email('Invalid email address'),
  password: z.string().min(6, "Password must be at least 6 characters long"),
})

type SigninForm = z.infer<typeof signinSchema>

export function SigninForm() {
  const form = useForm<SigninForm>({
    resolver: zodResolver(signinSchema),
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = (data: SigninForm) => {
    console.log("Form submitted with data:", data);
    // Handle form submission logic here
  };

  return (
    <Form {...form}>
      <Button variant="secondary" size="lg" className="shadow-none w-full">
        <span>Login with Google</span>
      </Button>
      <SeperatorWithText className="my-5">Or continue with</SeperatorWithText>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="name@example.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} placeholder="*********" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button size="lg" className="w-full">Signin</Button>
      </form>
    </Form>
  )
}