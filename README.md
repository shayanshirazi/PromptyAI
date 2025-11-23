# Prompty AI: Gamified Prompt Engineering

## Inspiration  
AI has exploded in use over the past few years, reshaping everything from daily routines to entire industries. Yet most people still don’t know how to speak to these systems well enough to get great results. Learning prompt engineering is becoming as essential as basic computer literacy. **Prompty AI** tackles this gap by turning prompt mastery into an interactive, engaging game that helps anyone build real skill through practice and play.

## Application  
**Prompty AI** presents the player with a story, an image, or even a small piece of software. The challenge is simple on the surface: reverse engineer the output by writing a prompt that could realistically produce something similar when fed into any AI model. In practice, this becomes a surprisingly engaging exercise in observation and creativity.  

Players start paying attention to details they normally overlook: style, structure, mood, formatting, visual cues, and even subtle artistic choices. Each round becomes a small puzzle where the player has to translate what they see into precise language.  

Once they submit their prompt, the system evaluates how closely their description matches the original. This immediate feedback loop trains intuition quickly, helping players understand not just *what* to write, but *why* certain prompt patterns work better than others. It turns skill-building into a fast, fun, and highly interactive experience.

## Technologies  
Prompty AI is powered by a blend of tools working together to create a smooth, immersive learning experience.

**Gemini** forms the core intelligence of the system, handling prompt evaluation, similarity scoring, and the nuanced reasoning needed to judge how close a player’s guess is to the target output. It interprets style, structure, tone, visual detail, and even abstract intent, which makes it essential to the game’s educational value.

The interface is built with **React**, wrapped inside a sleek **Base44** environment that enables fast, responsive design. **n8n** coordinates the automation layer, handling game logic, routing scoring requests, and linking user inputs to the AI models.

For image-based challenges, custom **Python** scripts using **OpenCV** preprocess images, extract structural cues, and generate metadata that Gemini compares against the user’s prompt for more accurate scoring.

Together, these technologies fuse into a system where the interface feels smooth, the automation stays invisible, and Gemini drives a deeply adaptive learning experience.

## Unexpected challenges  
Building Prompty AI meant stitching together many moving parts, and the automation layer turned out to be trickier than expected. Connecting the interface, the AI models, the scoring logic, and the image analysis pipeline required careful coordination. n8n helped, but orchestrating all those flows without breaking anything was a constant balancing act.

One of the biggest surprises was a **fetch error** caused by browser OCR or CORS-like protections that quietly blocked our POST requests. The browser simply refused to send our payloads to the AI endpoint, and debugging that felt like trying to reason with a brick wall. To fix it, we routed our API traffic through an **internal proxy**, which finally let the requests pass cleanly.

These challenges reminded us that even when individual tools shine, the glue between them can push back hard. The final system is stronger because of those battles.

## Future Roadmap  
Here are the next steps we’re excited to explore as Prompty AI grows:

1. **Accessibility**  
   Prompty AI currently relies on visual outputs like stories, images, and software examples. For players with visual impairments, this creates barriers. Adding features such as **text-to-speech** will make the experience far more inclusive.

2. **Richer learning modes**  
   Prompt engineering extends far beyond images. We plan to introduce challenges built around **text stories, software generation, audio prompts**, and more.

3. **Interactive courses**  
   Complete, self-paced learning paths covering a variety of topics, from beginner fundamentals to advanced strategy, along with optional certificates.

4. **Beginner-friendly tutorials**  
   Short, clear video walkthroughs that help new users ease into prompt engineering and understand how to get the most out of the platform.

5. **Mobile app**  
   Bringing Prompty AI to **iOS and Android** so players can learn and practice anywhere.

6. **Friends system**  
   Social features that let players connect, compare scores, share prompts, and learn collaboratively.

**We’re hopeful that Prompty AI will make prompt engineering more approachable, more intuitive, and more empowering for anyone stepping into the world of generative AI, regardless of background or experience.**
