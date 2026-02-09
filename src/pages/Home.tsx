import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
    return (
        <>
            <Hero />
            <FeaturedProjects />
            {/* We can add Skills section here too later */}
        </>
    );
}
