"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Please enter a title.",
  }),
  description: z.string().min(1, {
    message: "Please enter a description.",
  }),
  tags: z.array(z.string()),
});

const Page = () => {
  const [tempTags, setTempTags] = useState<string>();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: ["website", "easy"],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-start p-24 bg-background">
      <header className="w-full flex flex-col items-start justify-center z-10 text-foreground text-left">
        <h1 className="font-bold text-8xl">Create new idea.</h1>
        <p className="text-4xl font-geistmono">
          Share your ideas with the world.
        </p>
      </header>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 z-10 bg-background border border-border p-10 rounded-md w-[600px] mt-24"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Selangor Program Hub" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Lists all the programs held in Selangor."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>

                <FormControl>
                  <>
                    <div className="w-full flex flex-row flex-wrap gap-2">
                      {form.watch("tags").map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-sm bg-zinc-500/10 border border-zinc-500 rounded-full text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="w-full flex flex-row gap-5">
                      <Input placeholder="website" {...field} />
                      <Button>Add</Button>
                    </div>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
};

export default Page;
