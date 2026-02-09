import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function Skills() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Proficiency</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive look at the technologies and tools I use to build digital products.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center justify-center p-6 border border-border rounded-xl bg-card hover:bg-accent/50 transition-colors group"
                            >
                                <div className="p-4 rounded-full bg-secondary text-secondary-foreground mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Icon size={32} />
                                </div>
                                <h3 className="font-medium text-center">{skill.name}</h3>
                                {/* Optional: Progress bar or percentage 
                <div className="w-full bg-secondary h-1.5 rounded-full mt-3 overflow-hidden">
                   <div className="bg-primary h-full rounded-full" style={{ width: `${skill.level}%` }} />
                </div>
                */}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
