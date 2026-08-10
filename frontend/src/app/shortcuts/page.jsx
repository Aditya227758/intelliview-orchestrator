"use client";

const shortcuts = [
  {
    category: "General",
    items: [
      { keys: ["Ctrl", "K"], description: "Open command palette" },
      { keys: ["Ctrl", "N"], description: "Start a new interview" },
      { keys: ["?"], description: "Show keyboard shortcuts" },
    ],
  },
  {
    category: "Navigation",
    items: [
      { keys: ["Alt", "1"], description: "Go to Overview" },
      { keys: ["Alt", "2"], description: "Go to Interview" },
      { keys: ["Alt", "3"], description: "Go to Sessions" },
      { keys: ["Alt", "4"], description: "Go to Candidates" },
      { keys: ["Alt", "5"], description: "Go to Workers" },
      { keys: ["Alt", "6"], description: "Go to Analytics" },
      { keys: ["Alt", "7"], description: "Go to Settings" },
      { keys: ["Alt", "8"], description: "Open Digest Control" },
    ],
  },
  {
    category: "Quick Navigation",
    items: [
      { keys: ["G", "S"], description: "Go to Sessions" },
      { keys: ["G", "W"], description: "Go to Workers" },
      { keys: ["G", "A"], description: "Go to Analytics" },
      { keys: ["G", "O"], description: "Go to Overview" },
      { keys: ["G", ","], description: "Go to Settings" },
      { keys: ["G", "I"], description: "Go to Interview" },
      { keys: ["G", "C"], description: "Go to Candidates" },
    ],
  },
];

function ShortcutKeys({ keys }) {
  return (
    <div className="flex items-center gap-1">
      {keys.map((key) => (
        <kbd
          key={key}
          className="rounded border border-border bg-bg-card px-2 py-1 text-xs text-zinc-200"
        >
          {key}
        </kbd>
      ))}
    </div>
  );
}

export default function ShortcutsPage() {
  return (
    <main className="min-h-screen bg-bg-panel px-6 py-8 text-zinc-100">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Keyboard Shortcuts</h1>
          <p className="mt-2 text-sm text-muted">
            Quickly navigate and control AI-Intelliview using keyboard shortcuts.
          </p>
        </div>

        <div className="space-y-6">
          {shortcuts.map((section) => (
            <section
              key={section.category}
              className="rounded-lg border border-border bg-bg-card"
            >
              <div className="border-b border-border px-4 py-3">
                <h2 className="text-sm font-semibold text-zinc-100">
                  {section.category}
                </h2>
              </div>

              <div className="divide-y divide-border">
                {section.items.map((shortcut) => (
                  <div
                    key={shortcut.description}
                    className="flex items-center justify-between gap-4 px-4 py-3"
                  >
                    <span className="text-sm text-zinc-300">
                      {shortcut.description}
                    </span>

                    <ShortcutKeys keys={shortcut.keys} />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
