import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-decidel-orange">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-decidel-gray-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </section>
  );
}
