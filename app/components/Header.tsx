"use client";

import React, { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Header = () => {
  const { setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="bg-background dark:bg-background shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-foreground dark:text-foreground">
            🍴 Orange Food
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary"
          >
            Anasayfa
          </Link>
          <Link
            href="/ai-recipes"
            className="text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary"
          >
            Yapay Zeka
          </Link>
          <Link
            href="/categories"
            className="text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary"
          >
            Tarif Kategorileri
          </Link>
          <Link
            href="/daily-menu"
            className="text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary"
          >
            Günlük Menü
          </Link>
        </nav>

        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-card text-card-foreground border-t border-border">
            <nav className="flex flex-col space-y-4 py-4 px-6">
              <Link
                href="/"
                className="hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                Anasayfa
              </Link>
              <Link
                href="/ai-recipes"
                className="hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                Yapay Zeka
              </Link>
              <Link
                href="/categories"
                className="hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                Tarif Kategorileri
              </Link>
              <Link
                href="/daily-menu"
                className="hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                Günlük Menü
              </Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
