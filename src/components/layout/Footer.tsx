import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            Maamoun
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 max-w-xs">
                            Building digital experiences with modern technologies. Contact me to start a project.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end space-y-4">
                        <div className="flex space-x-6 text-muted-foreground">
                            <a href="https://github.com/Spearzz1" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                <Github size={20} />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a href="https://github.com/Spearzz1" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                <Linkedin size={20} />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="mailto:B.Maamoun456@gmail.com" className="hover:text-primary transition-colors">
                                <Mail size={20} />
                                <span className="sr-only">Email</span>
                            </a>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
