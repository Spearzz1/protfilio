import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                isScrolled || isOpen
                    ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                    >
                        Maamoun
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    isActive(link.href)
                                        ? "text-primary font-semibold"
                                        : "text-muted-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="flex items-center space-x-4 border-l pl-4 border-border">
                            <a href="https://github.com/Spearzz1" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                                <Github size={18} />
                            </a>
                            <a href="https://github.com/Spearzz1" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                                <Linkedin size={18} />
                            </a>
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 rounded-full hover:bg-accent transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 mr-2 rounded-full hover:bg-accent transition-colors"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-foreground"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                                isActive(link.href) ? "bg-accent/50 text-foreground" : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex space-x-4 pt-4 px-3 border-t mt-4 border-border">
                        <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                            <Github size={20} />
                        </a>
                        <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                            <Linkedin size={20} />
                        </a>
                        <a href={siteConfig.links.email} className="text-muted-foreground hover:text-foreground">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
