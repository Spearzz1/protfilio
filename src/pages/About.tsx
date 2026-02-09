import { education, skills } from "@/lib/data";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
    return (
        <div className="min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Bio Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                    {/* Placeholder for Profile Image */}
                    <div className="aspect-square rounded-2xl bg-muted relative overflow-hidden flex items-center justify-center">
                        <span className="text-muted-foreground text-lg text-center px-4">
                            <img src="/images/profile.jpg" alt="Profile" />
                        </span>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
                        <div className="space-y-4 text-muted-foreground text-lg">
                            <p>
                                I'm a passionate developer with a strong foundation in modern web technologies.
                                My journey started with simple HTML pages and evolved into building complex,
                                scalable applications.
                            </p>
                            <p>
                                I love solving problems and turning ideas into reality through code.
                                When I'm not coding, you can find me exploring new technologies,
                                contributing to open source, or hiking.
                            </p>
                        </div>
                        <div className="pt-4">
                            <a href="/cv_pro.pdf" download>
                                <Button variant="outline" size="lg" className="gap-2">
                                    Download Resume <Download size={18} />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Education & Journey */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">Education</h2>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div key={index} className="pl-6 border-l-2 border-border relative">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                                    <h3 className="font-bold text-lg">{edu.school}</h3>
                                    <p className="text-primary font-medium text-sm mb-1">{edu.degree}</p>
                                    <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                                    <p className="text-muted-foreground">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span key={skill.name} className="px-3 py-2 border border-border rounded-lg text-sm bg-card font-medium">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
