import './App.css';
import { Toaster as Sonner } from 'sonner';
import MainForm from './features/MainForm/MainForm';

function App() {
  return (
    <>
      <Sonner />
      <div className="container mx-auto p-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-center">Formularz Aplikacyjny</h1>
        </header>
        <main>
          <MainForm />
        </main>
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} The Space. Wszelkie prawa zastrzeżone.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
