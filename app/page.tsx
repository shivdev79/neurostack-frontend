"use client";

import { useState } from "react";

type Source = {
  id: string;
  category: string;
};

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState<Source[]>([]);
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");
    setSources([]);

    try {
      const res = await fetch("https://neurostack-backend.hf.space/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
      setSources(data.sources || []);
    } catch {
      setAnswer("⚠️ Unable to connect to backend.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-900/30 via-slate-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full bg-fuchsia-600/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[120px]" />

      {/* Header */}
      <header className="relative z-10 text-center pt-16 pb-10">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          NeuroStack Support Copilot
        </h1>
        <p className="text-slate-400 mt-3 text-lg">
          AI-powered SaaS documentation assistant
        </p>
      </header>

      {/* Main Card */}
      <section className="relative z-10 max-w-3xl mx-auto px-4">
        <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(236,72,153,0.15)] p-8">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Ask your question
          </label>

          <textarea
            rows={3}
            className="w-full rounded-2xl bg-slate-950/80 border border-slate-700 p-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition"
            placeholder="e.g. How do I create a project?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <div className="flex justify-end mt-5">
            <button
              onClick={askQuestion}
              disabled={loading}
              className="relative inline-flex items-center justify-center px-8 py-3 rounded-2xl font-semibold bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 transition-all shadow-lg disabled:opacity-50"
            >
              {loading ? (
                <span className="animate-pulse">Thinking…</span>
              ) : (
                "Ask Copilot"
              )}
            </button>
          </div>

          {/* Answer */}
          {answer && (
            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                Answer
              </h2>
              <div className="rounded-2xl bg-slate-950/80 border border-slate-700 p-5 text-slate-200 leading-relaxed shadow-inner">
                {answer}
              </div>
            </div>
          )}

          {/* Sources */}
          {sources.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-slate-400 mb-3">
                Sources
              </h3>
              <div className="flex flex-wrap gap-3">
                {sources.map((src, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 rounded-full text-xs bg-gradient-to-r from-fuchsia-600/30 to-blue-600/30 border border-white/10 backdrop-blur"
                  >
                    {src.id} • {src.category}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center text-slate-500 text-xs mt-10 pb-10">
          Built with FastAPI, FAISS & Open-Source LLMs • NeuroStack GenAI Sprint
        </footer>
      </section>
    </main>
  );
}
