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
    intro: "A good place to start if you or someone close to you has just been diagnosed, or you're trying to understand what ADHD actually means.",
    links: [
      {
        type: "website",
        icon: "🌐",
        title: "ADHD UK — What is ADHD?",
        description: "A clear, UK-focused overview of what ADHD is, the different types, and how it's diagnosed.",
        linkText: "Read on ADHD UK",
        linkUrl: "https://adhduk.co.uk/about-adhd/"
      },
      {
        type: "video",
        icon: "🎥",
        title: "How to ADHD — What is ADHD?",
        description: "Jessica McCabe's brilliant introduction to ADHD — warm, accessible, and a great first watch.",
        linkText: "Watch on YouTube",
        linkUrl: "https://www.youtube.com/watch?v=xMWtGozn5jU"
      },
      {
        type: "article",
        icon: "📄",
        title: "NICE — ADHD Overview",
        description: "The official UK clinical guidance. Dry but authoritative — useful if you want to understand the medical picture.",
        linkText: "Read on NICE",
        linkUrl: "https://www.nice.org.uk/guidance/ng87"
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
  }

];
