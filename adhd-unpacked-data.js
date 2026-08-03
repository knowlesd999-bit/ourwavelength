/*
  =============================================
  OUR WAVELENGTH — ADHD Unpacked Content File
  =============================================

  This is where you manage all content on the ADHD Unpacked page.
  You never need to touch adhd-unpacked.html — just edit this file.

  HOW TO ADD A NEW LINK:
  1. Find the right section below
  2. Copy one of the existing entries (from the opening { to the closing },)
  3. Paste it at the end of that section's list (before the closing ])
  4. Fill in your details and save

  HOW TO ADD A NEW SECTION:
  Copy one of the whole section blocks and add it to the end of the list
  (before the final ];)

  TYPE OPTIONS:
  - "article"   — a written piece
  - "video"     — a YouTube or video link
  - "podcast"   — a podcast episode
  - "book"      — a book
  - "website"   — a website or organisation
*/

window.adhdUnpackedData = [

  {
    id: "what-is-adhd",
    heading: "What is ADHD?",
    intro: "What ADHD actually feels like from the inside — personal experience, the science behind it, and links to go deeper.",
    links: [
      {
        type: "article",
        icon: "🧠",
        title: "What is ADHD?",
        description: "A personal take on what ADHD really means — not the textbook definition, but what it actually feels like to live with it — plus the science that explains why.",
        linkText: "Read more",
        linkUrl: "what-is-adhd.html"
      }
    ]
  },

  {
    id: "adhd-in-adults",
    heading: "ADHD in Adults",
    intro: "Resources specifically about adult ADHD — particularly useful if you've been recently diagnosed or are wondering whether you might have it.",
    links: [
      {
        type: "article",
        icon: "📄",
        title: "ADHD UK — Adult ADHD",
        description: "Information on how ADHD presents in adults, why it's so often missed, and what to do if you think you might have it.",
        linkText: "Read on ADHD UK",
        linkUrl: "https://adhduk.co.uk/adult-adhd/"
      },
      {
        type: "video",
        icon: "🎥",
        title: "How to ADHD — ADHD in Adults",
        description: "A helpful explainer on why adult ADHD looks different from childhood ADHD, and why so many people are diagnosed late.",
        linkText: "Watch on YouTube",
        linkUrl: "https://www.youtube.com/howtoadhd"
      }
    ]
  },

  {
    id: "adhd-in-children",
    heading: "ADHD in Children",
    intro: "For parents trying to understand what ADHD looks like in children, how it's diagnosed, and what support is available.",
    links: [
      {
        type: "website",
        icon: "🌐",
        title: "Young Minds — ADHD",
        description: "Young Minds is one of the UK's leading children's mental health charities. Their ADHD pages are clear and parent-friendly.",
        linkText: "Visit Young Minds",
        linkUrl: "https://www.youngminds.org.uk/young-person/mental-health-conditions/adhd/"
      },
      {
        type: "website",
        icon: "🌐",
        title: "NHS — ADHD in Children",
        description: "The NHS overview of ADHD in children — symptoms, diagnosis, and treatment options available on the NHS.",
        linkText: "Visit NHS",
        linkUrl: "https://www.nhs.uk/conditions/attention-deficit-hyperactivity-disorder-adhd/"
      }
    ]
  },

  {
    id: "go-deeper",
    heading: "Go Deeper",
    intro: "For those who want to understand the science, the history, or the broader picture of ADHD.",
    links: [
      {
        type: "video",
        icon: "🎥",
        title: "Dr Russell Barkley — ADHD as a Disorder of Self-Regulation",
        description: "One of the world's leading ADHD researchers explains the condition in depth. Long but genuinely illuminating.",
        linkText: "Watch on YouTube",
        linkUrl: "https://www.youtube.com/watch?v=_tpB-B8BXk0"
      },
      {
        type: "article",
        icon: "📄",
        title: "ADDitude Magazine",
        description: "One of the most comprehensive ADHD publications online — articles, expert Q&As, and practical guides for adults and parents.",
        linkText: "Visit ADDitude",
        linkUrl: "https://www.additudemag.com"
      }
    ]
  },

  {
    id: "therapy-approaches",
    heading: "CBT vs Compassion Focused Therapy",
    intro: "Two very different therapeutic approaches to ADHD — one built around structure and skills, the other around shame and self-compassion. Here's how they compare for adults and children.",
    links: [
      {
        type: "article",
        icon: "🧩",
        title: "Cognitive Behavioral Therapy for ADHD",
        description: "What CBT for ADHD actually involves — task-chunking, time-blocking, and building external systems to work with executive function differences rather than against them. The best-evidenced psychological therapy for adult ADHD.",
        linkText: "Read on ADDA",
        linkUrl: "https://add.org/cognitive-behavioral-therapy-for-adhd/"
      },
      {
        type: "article",
        icon: "🔬",
        title: "The Efficacy of CBT for Adults With ADHD",
        description: "A systematic review and meta-analysis of randomised controlled trials — the strongest evidence base of any psychological therapy for adult ADHD.",
        linkText: "Read the review",
        linkUrl: "https://pubmed.ncbi.nlm.nih.gov/27554190/"
      },
      {
        type: "website",
        icon: "📋",
        title: "NICE Guidelines — ADHD Diagnosis and Management",
        description: "The UK's official clinical guidance on when CBT is recommended for adults and children with ADHD, and where it sits alongside medication.",
        linkText: "Read NICE guidance",
        linkUrl: "https://www.nice.org.uk/guidance/ng87/chapter/recommendations"
      },
      {
        type: "article",
        icon: "💙",
        title: "The Role of Self-Compassion in Adult ADHD",
        description: "Research linking low self-compassion to poorer wellbeing in adults with ADHD — the evidence underpinning why compassion-focused approaches are gaining attention alongside CBT.",
        linkText: "Read the study",
        linkUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9790285/"
      },
      {
        type: "website",
        icon: "🌱",
        title: "Compassion Focused Therapy for ADHD",
        description: "An accessible explainer on Paul Gilbert's three-systems model — threat, drive, and soothe — and why it's relevant to the shame and self-criticism many people with ADHD carry.",
        linkText: "Read more",
        linkUrl: "https://balancedminds.com/compassion-focused-therapy-for-adhd/"
      },
      {
        type: "article",
        icon: "🗣️",
        title: "\"20,000 Negative Comments\" — Fact-Checked",
        description: "A grounded look at the widely repeated claim that children with ADHD hear 20,000 more corrections by age 10 — where the figure actually comes from, and what's genuinely known about criticism and shame in ADHD childhoods.",
        linkText: "Read the piece",
        linkUrl: "https://naomicfisher.substack.com/p/20000-negative-comments"
      }
    ]
  },

  {
    id: "public-figures",
    heading: "Public Figures with ADHD",
    intro: "Sometimes it helps to know you're in good company. A curated, verified list of people in the public eye who have personally spoken about their ADHD.",
    links: [
      {
        type: "website",
        icon: "🌟",
        title: "Public Figures with ADHD",
        description: "Actors, athletes, musicians, and more — all verified from original sources, in their own words.",
        linkText: "See the full list",
        linkUrl: "public-figures.html"
      }
    ]
  }

];
