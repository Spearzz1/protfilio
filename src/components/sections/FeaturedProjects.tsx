import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { Link } from "react-router-dom";

export function FeaturedProjects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Only show first 2 projects on home
    const featured = projects.slice(0, 2);

    return (
        <section className="py-24 bg-secondary/30" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
                        <p className="text-muted-foreground">Some of my recent projects</p>
                    </div>
                    <Link to="/projects" className="text-primary hover:underline underline-offset-4 flex items-center gap-1">
                        View all projects <ArrowUpRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featured.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-video bg-muted relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                                {/* In real app, we would use <img src={project.image} /> here */}
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium">
                                    {project.title} Preview
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-xs font-medium text-primary mb-2 block">{project.category}</span>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    </div>
                                    <div className="flex gap-2">
                                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-foreground bg-accent/50 rounded-full">
                                            <Github size={18} />
                                        </a>
                                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-foreground bg-accent/50 rounded-full">
                                            <ArrowUpRight size={18} />
                                        </a>
                                    </div>
                                </div>
                                <p className="text-muted-foreground mb-6 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
