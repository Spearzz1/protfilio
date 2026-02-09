import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export const siteConfig = {
    links: {
        resume: "/cv_pro.pdf",
    },
};


export function Hero() {
    return (
        <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-200 dark:bg-grid-slate-800/[0.04] -z-10" />
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 blur-[100px] rounded-full opacity-50 dark:opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/50 text-sm font-medium text-muted-foreground border border-border">
                        Available for freelance work
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                        Building digital <br />
                        <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            experiences that matter.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Hi, I'm a Full Stack Developer specializing in building exceptional digital experiences.
                        Currently focused on building accessible, human-centered products.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link to="/projects">
                            <Button size="lg" className="w-full sm:w-auto gap-2">
                                View Work <ArrowRight size={18} />
                            </Button>
                        </Link>
                        <a href="/cv_pro.pdf" download>
                            <Button variant="outline" size="lg" className="gap-2">
                                Download Resume <Download size={18} />
                            </Button>
                        </a>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
