'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsTrigger } from './ui/tabs';
import { TabsList } from '@radix-ui/react-tabs';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border">
        <TabsTrigger
          value="light"
          onClick={() => setTheme('light')}
        ></TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default ThemeSwitcher;
