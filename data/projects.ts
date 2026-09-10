export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  skills: string[];
  roleFit: string[];
  problem: string;
  approach: string;
  outcome: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "gps-spoofing-defence",
    title: "GPS Spoofing Defence for AI-Enabled Autonomous Systems",
    category: "AI Security / Cyber-Physical Systems",
    summary:
      "A runtime defence workflow for detecting GPS spoofing by validating GPS readings against IMU, LiDAR, and camera-derived context.",
    skills: ["Threat modelling", "Sensor validation", "Anomaly detection", "Autonomous systems security"],
    roleFit: ["AI Security Research", "Security Engineering", "Cyber-Physical Systems Security"],
    problem:
      "Autonomous systems can be misled when a single trusted sensor, such as GPS, is spoofed. A robust defence needs to compare sensor outputs across layers rather than trusting one source in isolation.",
    approach:
      "Designed a cross-layer validation workflow that compares GPS with IMU, LiDAR, and camera signals, computes a runtime anomaly score, and triggers fallback behaviour when readings become inconsistent.",
    outcome:
      "Produced a clear security workflow that explains attack entry, mismatch detection, risk scoring, and safe response for AI-enabled autonomous systems.",
  },
  {
    slug: "buffer-overflow-analysis",
    title: "Buffer Overflow and Memory Corruption Analysis",
    category: "Vulnerability Analysis / Low-Level Security",
    summary:
      "A technical study of unsafe C memory behaviour, stack corruption, and how buffer overflows can affect program control and reliability.",
    skills: ["C", "Stack memory", "Buffer overflow", "Secure coding", "Exploit concepts"],
    roleFit: ["Vulnerability Analyst", "Security Analyst", "Junior Penetration Tester"],
    problem:
      "Unsafe memory operations can overwrite adjacent variables, corrupt the stack, crash programs, or in some cases enable attackers to redirect execution.",
    approach:
      "Analysed C examples involving fixed-size buffers, null terminators, unsafe copying, and stack layout assumptions. Documented expected behaviour and mitigation principles.",
    outcome:
      "Built a stronger understanding of memory corruption risks and how secure coding practices reduce exploitability.",
  },
  {
    slug: "ai-autonomous-systems-attack-taxonomy",
    title: "Attack Taxonomy for AI-Enabled Embedded and Autonomous Systems",
    category: "Research / SoK Paper",
    summary:
      "A threat-led systematisation of attacks that move across sensing, embedded computation, perception, communication, control, and physical actuation layers.",
    skills: ["Literature review", "Attack taxonomy", "Cyber-physical threat modelling", "AI system risk analysis"],
    roleFit: ["Security Research", "AI Safety and Security", "Cybersecurity Graduate Scheme"],
    problem:
      "Attacks against AI-enabled autonomous systems are often discussed as isolated vulnerabilities, even though real threats can move across software, physical, and AI perception layers.",
    approach:
      "Organised attack families by system stack, mechanism, outcome, attacker capability, practicality, and lifecycle stage to compare risks across layers.",
    outcome:
      "Produced a structured research framework for analysing cross-layer attacks against AI-enabled embedded and autonomous systems.",
  },
  {
    slug: "scalable-ml-pyspark",
    title: "Scalable Machine Learning with PySpark",
    category: "AI / Data Engineering",
    summary:
      "Large-scale ML coursework involving time-split recommendation, clustering analysis, and interpretable outputs using PySpark.",
    skills: ["PySpark", "Machine learning", "Clustering", "Recommendation systems", "Data analysis"],
    roleFit: ["AI Engineer", "Security Data Analyst", "Data Engineer"],
    problem:
      "Real-world security and AI systems often require scalable processing pipelines that can handle large datasets and produce interpretable metrics.",
    approach:
      "Implemented distributed ML workflows using PySpark, including recommendation experiments and clustering analysis with saved metrics and visual outputs.",
    outcome:
      "Gained practical experience with scalable data processing, model evaluation, and communicating results through tables and summaries.",
  },
  {
    slug: "tryhackme-lab-writeups",
    title: "TryHackMe Practical Cybersecurity Lab Write-ups",
    category: "Hands-on Cybersecurity",
    summary:
      "A planned collection of selected lab reports documenting enumeration, exploitation concepts, findings, remediation, and lessons learned.",
    skills: ["Linux", "Networking", "Enumeration", "Web security", "Report writing"],
    roleFit: ["SOC Analyst", "Junior Penetration Tester", "Incident Responder"],
    problem:
      "Recruiters need evidence of hands-on security ability beyond certificates or course names.",
    approach:
      "Document selected rooms as case studies with scope, tools, commands, screenshots, findings, mitigations, and reflection.",
    outcome:
      "Creates a growing practical evidence base that supports entry-level cybersecurity applications.",
  },
];
