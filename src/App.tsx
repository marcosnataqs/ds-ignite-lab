import { Envelope, Lock } from 'phosphor-react';

import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';

import './styles/global.css';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Log in and get started
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Email address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              id="email"
              type="email"
              placeholder="Type your email"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              id="password"
              type="password"
              placeholder="Password"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember-me" className="flex items-center gap-2">
          <Checkbox id="remember-me" />
          <Text size="sm" className="text-gray-200">
            Remember me
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Log in on the platform
        </Button>
      </form>

      <footer className="flex flex-col items-center justify-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
            Forgot your password?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
            Does not have an account? Create one now!
          </a>
        </Text>
      </footer>
    </div>
  );
}
