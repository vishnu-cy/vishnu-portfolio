const nodes = ["Sensor", "Embedded", "Perception", "Network", "Control", "Actuation"];

export default function ThreatMap() {
  return (
    <div className="scanline glass-panel relative rounded-[2rem] p-6">
      <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent" />
      <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3">
        {nodes.map((node, index) => (
          <div key={node} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="node-dot h-2.5 w-2.5 rounded-full bg-cyber-cyan" />
              <span className="font-mono text-xs text-slate-500">L{index + 1}</span>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyber-green">{node}</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">cross-layer signal validation</p>
          </div>
        ))}
      </div>
    </div>
  );
}
