"use client";

import { CreateIdea } from "@/actions/idea-actions";
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
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
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
  const [typedTag, setTypedTag] = useState<string>("");
  const [tempTags, setTempTags] = useState<string[]>([]);

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: tempTags,
    },
  });

  const createIdeaMutation = useMutation({
    mutationKey: ["createIdea"],
    mutationFn: CreateIdea,
    onSuccess: () => {
      toast({
        title: "Idea created.",
        description: "Your idea has been created.",
      });
      router.push("/");
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    values.tags = tempTags;
    console.log(values);
    createIdeaMutation.mutate(values);
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-start p-24 bg-background">
      <header className="w-full flex flex-col items-start justify-center z-10 text-foreground text-left">
        <h1 className="font-bold text-8xl">Create new idea.</h1>
        <p className="text-4xl font-geistmono">
          Share your ideas with the world!
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
                  <Input
                    placeholder="Cool title for the project idea."
                    {...field}
                  />
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
                    placeholder="Brief description of the project idea."
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
                    <div className="w-full flex flex-row gap-5">
                      <Input
                        placeholder="Click 'Add' to add a tag."
                        value={typedTag}
                        onChange={(e) => {
                          setTypedTag(e.target.value);
                        }}
                      />
                      <Button
                        type="button"
                        onClick={() => {
                          if (typedTag.trim() !== "") {
                            setTempTags([...tempTags, typedTag]);
                            setTypedTag("");
                          }
                        }}
                      >
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tempTags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 rounded-md text-sm bg-zinc-500/10 border border-zinc-500 text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={
              createIdeaMutation.isPending || createIdeaMutation.isSuccess
            }
          >
            {createIdeaMutation.isPending
              ? "Creating..."
              : createIdeaMutation.isSuccess
                ? "Created!"
                : "Create"}
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default Page;
