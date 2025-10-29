"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";
import type { SimpleIcon as SimpleIconType } from 'simple-icons'
import * as simpleIcons from 'simple-icons'

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = 1;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: {
    slug: string
    title: string
  }[];
};

const getIcon = (slug: string): SimpleIconType => {
  const iconName = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`
  return (simpleIcons as any)[iconName]
}

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const data: SimpleIconType[] = useMemo(() => {
    return iconSlugs.map((icon) => {
      const simpleIcon = getIcon(icon.slug)
      if (!simpleIcon) {
        // Fallback or logging
        console.warn(`Icon not found for slug: ${icon.slug}`)
        return null
      }
      return {
        ...simpleIcon,
        path: simpleIcon.path,
      }
    }).filter(Boolean) as SimpleIconType[]
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!mounted || !data) return null;

    return data.map((icon) =>
      renderCustomIcon(icon, resolvedTheme || theme || "light"),
    );
  }, [data, theme, resolvedTheme, mounted]);

  if (!mounted) return null;

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}