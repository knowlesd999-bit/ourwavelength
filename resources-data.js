/*
  =============================================
  OUR WAVELENGTH — Resources Content File
  =============================================

  This is where you manage all the content on the Resources page.
  You never need to touch resources.html — just edit this file.

  HOW TO ADD A NEW RESOURCE:
  1. Find the right category below (books, websites, podcasts, tools)
  2. Copy one of the existing entries (from the opening { to the closing },)
  3. Paste it at the end of that category's list (before the closing ])
  4. Fill in your details and save
  5. Refresh your browser — done!

  HOW TO ADD A NEW CATEGORY:
  Copy one of the whole category blocks below and add it to the end
  of the list (before the final ];)

  ICONS: You can use any emoji as an icon. Just paste it in.
  LINK: If there's no link, set linkUrl to "" and linkText to ""
*/

window.resourcesData = [

  {
    id: "books",
    heading: "📖 Books",
    items: [
      {
        icon: "📗",
        title: "ADHD 2.0",
        subtitle: "Edward Hallowell & John Ratey",
        description: "Updated classic from two leading experts (who both have ADHD themselves). Practical, warm, and genuinely helpful. One of the first books I read after my diagnosis.",
        linkText: "Find on Amazon",
        linkUrl: "https://www.amazon.co.uk/ADHD-2-0-Ground-Breaking-Attention-Engagement/dp/0399178449"
      },
      {
        icon: "📗",
        title: "Driven to Distraction",
        subtitle: "Edward Hallowell & John Ratey",
        description: "The original, still essential. Personal stories and clinical insight that help ADHD finally make sense — both to people who have it and people who love them.",
        linkText: "Find on Amazon",
        linkUrl: "https://www.amazon.co.uk/Driven-Distraction-Revised-Recognizing-Attention/dp/0307743152"
      },
      {
        icon: "📗",
        title: "The Explosive Child",
        subtitle: "Ross W. Greene",
        description: "Technically not an ADHD book, but transformative for any parent whose child has big emotions and difficult behaviour. The Collaborative Problem Solving approach changed how I parent.",
        linkText: "Find on Amazon",
        linkUrl: "https://amzn.eu/d/0dYCr6JW"
      },
      {
        icon: "📗",
        title: "How to ADHD",
        subtitle: "Jessica McCabe",
        description: "Based on the brilliant YouTube channel of the same name. Practical, friendly, and full of concrete strategies. A great starting point if you're newly diagnosed.",
        linkText: "Find on Amazon",
        linkUrl: "https://amzn.eu/d/0aHyeYaa"
      },
      {
        icon: "📗",
        title: "Smart but Stuck",
        subtitle: "Thomas E. Brown",
        description: "Particularly good for adults who were high-achieving at school despite ADHD — the 'bright but' story. Helped me understand why diagnosis so often comes late.",
        linkText: "Find on Amazon",
        linkUrl: "https://amzn.eu/d/02BRErUJ"
      },
      {
        icon: "📗",
        title: "ADHD: A Hunter in a Farmer's World",
        subtitle: "Thom Hartmann",
        description: "The theory is interesting, but really just a nice way for you to view the world of ADHD superpowers.",
        linkText: "Find on Amazon",
        linkUrl: "https://amzn.eu/d/00bRmwhz"      
      }
    ]
  },

  {
    id: "websites",
    heading: "🌐 Websites & Online Communities",
    items: [
      {
        icon: "💻",
        title: "ADHD UK",
        subtitle: "adhduk.co.uk",
        description: "The best UK-specific resource I've found. Includes information on diagnosis, treatment, support, and a forum of people who genuinely understand.",
        linkText: "Visit ADHD UK",
        linkUrl: "https://adhduk.co.uk"
      },
      {
        icon: "🏥",
        title: "NICE Guidelines on ADHD",
        subtitle: "Official UK clinical guidance",
        description: "Dry but important — especially useful if you're advocating for support at school or pushing for assessment on the NHS.",
        linkText: "Read the guidelines",
        linkUrl: "https://www.nice.org.uk/guidance/ng87"
      },
      {
        icon: "🤝",
        title: "r/ADHD on Reddit",
        subtitle: "Community forum",
        description: "Large, active community of people with ADHD sharing experiences, strategies, and support. Quality varies but there's real warmth here — especially for newly diagnosed adults.",
        linkText: "Visit the community",
        linkUrl: "https://www.reddit.com/r/ADHD/"
      },
      {
        icon: "🎥",
        title: "How to ADHD",
        subtitle: "YouTube channel — Jessica McCabe",
        description: "Clear, warm, practical videos on every aspect of living with ADHD. Brilliant for both adults and parents. I've shared many of these with my son.",
        linkText: "Watch on YouTube",
        linkUrl: "https://www.youtube.com/howtoadhd"
      }
    ]
  },

  {
    id: "podcasts",
    heading: "🎙️ Podcasts",
    items: [
      {
        icon: "🎧",
        title: "ADHD reWired",
        subtitle: "Eric Tivers",
        description: "Long-running podcast with a practical, coaching-oriented approach. Great for adults who want strategies and real conversations, not just theory.",
        linkText: "Listen",
        linkUrl: "https://www.adhdreWired.com"
      },
      {
        icon: "🎧",
        title: "ADHD Experts Podcast",
        subtitle: "Emotional intelligence can be your greatest entrepreneurial strength as an adult with ADHD",
        description: "Emotional intelligence can be your greatest entrepreneurial strength as an adult with ADHD",
        linkText: "Listen",
        linkUrl: "https://www.additudemag.com/adhd-podcast/"
      }
      {
        icon: "🎧",
          title: "Overcoming Distractions - thriving with ADHD, ADD",
        subtitle: "Emotional intelligence can be your geatest entreprenurial stength as an adult with ADHD",
        description: "For the busy professional aaith ADHD",
        linkText: "Listen",
        linkUrl: "https://podcasts.apple.com/gb/podcast/overcoming-distractions-thriving-with-adhd-add/id1150056233?i=1000772367864"
      }
    ]
  },

  {
    id: "tools",
    heading: "🛠️ Tools & Apps",
    items: [
      {
        icon: "📝",
        title: "Notion",
        subtitle: "Notes, tasks & structure",
        description: "My current main system for notes, tasks, and structure. Flexible enough to adapt to how my brain actually works, rather than forcing me into someone else's system.",
        linkText: "Try Notion",
        linkUrl: "https://www.notion.so"
      },
      {
        icon: "🍅",
        title: "Pomodoro Timer",
        subtitle: "Any variant works",
        description: "Working in short focused bursts with built-in breaks suits ADHD brains well. I use a simple web-based timer — no fancy app needed.",
        linkText: "Try Pomofocus",
        linkUrl: "https://pomofocus.io"
      },
      {
        icon: "🔕",
        title: "Focus@Will",
        subtitle: "Background music for focus",
        description: "Background music designed to support focus. The science is debated but anecdotally it works for me when I need to get into a flow state.",
        linkText: "Try Focus@Will",
        linkUrl: "https://www.focusatwill.com"
      }
    ]
  }

];
