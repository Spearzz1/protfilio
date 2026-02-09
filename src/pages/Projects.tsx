import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Projects() {
    return (
        <div className="min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">All Projects</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A showcase of my recent development work, ranging from web applications to full-stack platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col border border-border rounded-xl bg-card overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image Area */}
                            <div className="aspect-video relative overflow-hidden bg-muted">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">

                                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                        <Button variant="secondary" size="sm" className="gap-2 font-medium">
                                            Code <Github size={16} />
                                        </Button>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary/50 text-secondary-foreground border border-border">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
