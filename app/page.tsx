// page.tsx
import FlagsContainer from '../components/FlagsContainer';

export default function Home() {
  return (
    <main className="bg-primary h-full-screen">
      <div className="py-10 flex flex-col items-center gap-10">
        <h1 className="text-3xl font-semibold text-white">EURO PREDICTOR</h1>
        <div className="flex gap-10">
          <FlagsContainer />
        </div>
      </div>
    </main>
  );
}
