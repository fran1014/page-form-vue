'use client';

import { useTheme } from 'next-themes';
import React, { useState } from 'react';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, isMounted] = useState(false);

  if (!mounted) return null;
  return <div>ThemeSwitcher</div>;
}

export default ThemeSwitcher;
