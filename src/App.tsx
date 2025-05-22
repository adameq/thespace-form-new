import './App.css';
import { Button } from '@/components/ui/button'; // Keep one example import
import { Toaster as Sonner } from 'sonner'; // Keep for potential global use

function App() {
  return (
    <>
      <Sonner /> {/* Keep Sonner for global toast notifications */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">thespace_form_new</h1>
        <p className="mt-2">
          Tutaj rozpocznie sie aplikacja formularza.
        </p>
        <Button className="mt-4">Testowy Przycisk</Button>
      </div>
    </>
  );
}

export default App;
