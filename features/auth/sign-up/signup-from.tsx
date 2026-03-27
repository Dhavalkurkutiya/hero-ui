import Ionicons from "@expo/vector-icons/Ionicons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Link } from "expo-router";
import {
  Button,
  Checkbox,
  ControlField,
  FieldError,
  Input,
  Label,
  Separator,
  TextField,
} from "heroui-native";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react-native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { withUniwind } from "uniwind";
import { z } from "zod";

const StyledIonicons = withUniwind(Ionicons);
const MailIcon = withUniwind(Mail);
const LockIcon = withUniwind(Lock);
const EyeIcon = withUniwind(Eye);
const EyeOffIcon = withUniwind(EyeOff);
const UserIcon = withUniwind(User);

const GoogleColorIcon = ({ size = 20 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <Path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <Path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l2.85-2.22.83-.62z"
    />
    <Path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </Svg>
);

export const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(4, "Password must be at least 4 characters"),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

export const SignUpForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: "", email: "", password: "", agreeTerms: false },
  });

  const signUpMutation = useMutation({
    mutationFn: async (data: z.infer<typeof signUpSchema>) => {
      // Simulated API Call
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ token: "abcdef", user: data.email });
        }, 1500);
      });
    },
    onSuccess: (data: any) => {
      console.log("Sign Up Success", data);
      alert("Account Created! Welcome " + data.user);
    },
    onError: () => {
      alert("Sign Up Failed");
    },
  });

  const onSubmit = (data: z.infer<typeof signUpSchema>) => {
    signUpMutation.mutate(data);
  };

  return (
    <View className="w-full gap-4 mt-5">
      {/* Full Name Field */}
      <TextField isInvalid={!!errors.name}>
        <Label className="text-sm font-semibold mb-1">Full Name</Label>
        <View className="w-full justify-center">
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="John Doe"
                value={value}
                onChangeText={onChange}
                className="pl-11 h-12"
              />
            )}
          />
          <UserIcon
            size={20}
            className="absolute left-4 text-foreground/40"
            pointerEvents="none"
          />
        </View>
        {errors.name?.message ? (
          <FieldError>{String(errors.name.message)}</FieldError>
        ) : null}
      </TextField>

      {/* Email Field */}
      <TextField isInvalid={!!errors.email}>
        <Label className="text-sm font-semibold mb-1">Email </Label>
        <View className="w-full justify-center">
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="name@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                className="pl-11 h-12"
              />
            )}
          />
          <MailIcon
            size={20}
            className="absolute left-4 text-foreground/40"
            pointerEvents="none"
          />
        </View>
        {errors.email?.message ? (
          <FieldError>{String(errors.email.message)}</FieldError>
        ) : null}
      </TextField>

      {/* Password Field */}
      <TextField isInvalid={!!errors.password}>
        <Label className="text-sm font-semibold mb-1">Password</Label>
        <View className="w-full justify-center">
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                className="pl-11 pr-12 h-12"
                placeholder="Create a password"
                secureTextEntry={!isPasswordVisible}
              />
            )}
          />
          <LockIcon
            size={20}
            className="absolute left-4 text-foreground/40"
            pointerEvents="none"
          />
          <Pressable
            className="absolute right-4 p-1"
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            hitSlop={10}
          >
            {isPasswordVisible ? (
              <EyeOffIcon size={20} className="text-foreground/40" />
            ) : (
              <EyeIcon size={20} className="text-foreground/40" />
            )}
          </Pressable>
        </View>
        {errors.password?.message ? (
          <FieldError>{String(errors.password.message)}</FieldError>
        ) : null}
      </TextField>

      {/* Terms and Conditions */}
      <View className="mt-1">
        <Controller
          control={control}
          name="agreeTerms"
          render={({ field: { onChange, value } }) => (
            <ControlField
              isSelected={value}
              onSelectedChange={onChange}
              className="flex-row items-center gap-2.5"
              hitSlop={8}
            >
              <ControlField.Indicator>
                <Checkbox />
              </ControlField.Indicator>
              <Text className="text-sm font-medium text-foreground">
                I agree to the{" "}
                <Text className="text-primary font-bold">Terms</Text> &{" "}
                <Text className="text-primary font-bold">Privacy Policy</Text>
              </Text>
            </ControlField>
          )}
        />
        {errors.agreeTerms?.message && (
          <Text className="text-red-500 text-xs mt-1 ml-1">
            {String(errors.agreeTerms.message)}
          </Text>
        )}
      </View>

      {/* Submit Button */}
      <Button
        className="mt-4 h-12"
        size="md"
        onPress={handleSubmit(onSubmit)}
        isDisabled={signUpMutation.isPending}
      >
        {signUpMutation.isPending ? "Creating Account..." : "Create Account"}
      </Button>

      {/* Divider */}
      <View className="flex-row items-center w-full gap-4 my-5">
        <Separator className="flex-1" />
        <Text className="text-sm font-medium text-foreground/50">
          Or sign up with
        </Text>
        <Separator className="flex-1" />
      </View>

      {/* Social Buttons */}
      <View className="gap-3">
        <Button
          variant="outline"
          className="h-12 bg-surface border-border flex-row gap-3"
        >
          <GoogleColorIcon size={18} />
          <Text className="text-foreground font-semibold text-sm">
            Sign up with Google
          </Text>
        </Button>
        <Button
          variant="outline"
          className="h-12 bg-surface border-border flex-row gap-3"
        >
          <StyledIonicons
            name="logo-apple"
            size={20}
            className="text-foreground mb-1"
          />
          <Text className="text-foreground font-semibold text-sm">
            Sign up with Apple
          </Text>
        </Button>
      </View>

      {/* Sign In Link */}
      <View className="flex-row justify-center mt-5 mb-4 gap-2">
        <Text className="text-sm text-foreground/60 font-medium">
          Already have an account?
        </Text>
        <Link href="/" asChild>
          <Pressable hitSlop={8}>
            <Text className="text-sm font-bold text-primary">Sign in now</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};
