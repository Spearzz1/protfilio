import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
            <h2 className="text-3xl font-bold -mt-10 mb-4">Page Not Found</h2>
            <p className="text-muted-foreground max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/">
                <Button size="lg">Go Back Home</Button>
            </Link>
        </div>
    );
}
