import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Dna, 
  MapPin, 
  ChevronRight, 
  Instagram, 
  Mail, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference"
  >
    <div className="flex flex-col">
      <span className="font-display text-2xl font-black tracking-tighter text-parchment uppercase">Noble</span>
      <span className="font-display text-xs tracking-[0.3em] text-parchment/80 uppercase -mt-1">Wrinkle Ranch</span>
    </div>
    <div className="hidden md:flex gap-12 font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-parchment">
      <a href="#heritage" className="hover:text-sage transition-colors">Heritage</a>
      <a href="#pedigree" className="hover:text-sage transition-colors">Pedigree</a>
      <a href="#pups" className="hover:text-sage transition-colors">Available</a>
      <a href="#apply" className="px-6 py-2 border border-parchment/30 rounded-full hover:bg-parchment hover:text-saddle transition-all">Apply</a>
    </div>
  </motion.nav>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  
  return (
    <section className="relative h-screen min-h-[800px] overflow-hidden bg-saddle flex items-center justify-center">
      <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-60">
        <img 
          src="https://images.pexels.com/photos/7021727/pexels-photo-7021727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
          alt="Ranch" 
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-saddle/60 via-transparent to-saddle" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="flex flex-col items-center">
            <span className="font-display text-7xl md:text-[12rem] leading-[0.8] text-parchment italic font-light">Heritage</span>
            <span className="font-display text-8xl md:text-[15rem] leading-[0.8] text-parchment font-black uppercase -mt-4 text-stroke">Defined</span>
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <p className="text-parchment/70 max-w-xs text-sm leading-relaxed font-light tracking-wide italic">
            "We don't just breed bulldogs; we cultivate legacies of health, temperament, and the iconic Haslet fold."
          </p>
          <div className="h-px w-24 bg-parchment/20 hidden md:block" />
          <button className="group relative px-12 py-5 bg-sage text-parchment font-bold tracking-widest text-xs uppercase overflow-hidden transition-all hover:pr-16">
            <span className="relative z-10">Explore The Ranch</span>
            <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-parchment/40">
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll to Discover</span>
        <div className="w-px h-16 bg-gradient-to-b from-parchment/40 to-transparent" />
      </div>
    </section>
  );
};

const HeritageStory = () => (
  <section id="heritage" className="py-32 px-6 bg-parchment overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
      <div className="lg:col-span-5 relative">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <img 
            src="https://images.pexels.com/photos/12868871/pexels-photo-12868871.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            className="w-full aspect-[4/5] object-cover rounded-tl-[100px] shadow-2xl" 
            alt="Noble Breed"
          />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sage/20 rounded-full blur-3xl -z-10" />
        </motion.div>
        <div className="absolute top-1/2 -left-12 -translate-y-1/2 font-display text-9xl text-saddle/5 whitespace-nowrap select-none">
          EST. 1994
        </div>
      </div>

      <div className="lg:col-span-7">
        <span className="text-sage font-bold tracking-[0.3em] text-xs uppercase mb-6 block">Our Haslet Roots</span>
        <h2 className="text-6xl md:text-8xl font-display text-saddle leading-none mb-8">
          The Art of <br /><span className="italic font-light">The Fold.</span>
        </h2>
        <div className="space-y-6 text-saddle/80 text-lg leading-relaxed max-w-xl">
          <p>
            Nestled in the rolling heart of Haslet, Texas, Noble Wrinkle Ranch isn't a kennel—it's a sanctuary. For three generations, our family has dedicated itself to the preservation of the English Bulldog's most distinguished characteristics.
          </p>
          <p className="font-display italic text-2xl text-sage">
            "Our philosophy is simple: Health first, temperament second, aesthetics always."
          </p>
          <p>
            We utilize state-of-the-art genetic screening and the pure Texas air to ensure every pup that leaves our ranch is a champion of their lineage.
          </p>
        </div>
        <div className="mt-12 flex gap-12">
          <div className="flex flex-col">
            <span className="text-4xl font-display text-saddle">120+</span>
            <span className="text-[10px] uppercase tracking-widest text-sage font-bold">Health Clearances</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-display text-saddle">28</span>
            <span className="text-[10px] uppercase tracking-widest text-sage font-bold">Years of Lineage</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PedigreeTree = () => {
  const nodes = [
    { name: "King George IV", role: "Grand Sire", img: "https://images.pexels.com/photos/40986/dog-bulldog-white-tongue-40986.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
    { name: "Lady Eleanor", role: "Grand Dam", img: "https://images.pexels.com/photos/28731658/pexels-photo-28731658.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
    { name: "Noble Duke", role: "Current Sire", img: "https://images.pexels.com/photos/40986/dog-bulldog-white-tongue-40986.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
  ];

  return (
    <section id="pedigree" className="py-32 bg-saddle text-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display mb-4">Elite Lineage</h2>
          <div className="flex justify-center items-center gap-4">
            <div className="h-px w-12 bg-sage" />
            <Dna className="text-sage" size={32} />
            <div className="h-px w-12 bg-sage" />
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12">
          {nodes.map((node, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer"
            >
              <div className="w-64 h-80 rounded-2xl overflow-hidden mb-6 border border-parchment/10 group-hover:border-sage/50 transition-colors">
                <img src={node.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={node.name} />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-display">{node.name}</h3>
                <span className="text-xs uppercase tracking-widest text-sage">{node.role}</span>
              </div>
              {i < nodes.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 w-16 h-px bg-parchment/10" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 border border-parchment/5 rounded-3xl bg-white/5 backdrop-blur-sm flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-4 items-center">
            <ShieldCheck className="text-sage" size={40} />
            <div>
              <p className="font-display text-xl">OFA Certified Hearts & Hips</p>
              <p className="text-sm text-parchment/50 uppercase tracking-tighter">Verified Genetic Documentation Included</p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-sage hover:text-parchment transition-colors">
            View Full Digital Pedigree <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

const PuppyGrid = () => {
  const pups = [
    { name: "Barnaby", gender: "Male", color: "Lilac Tri", price: "$5,500", img: "https://images.pexels.com/photos/4587962/pexels-photo-4587962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", status: "Available" },
    { name: "Clementine", gender: "Female", color: "Saddle Brindle", price: "$4,800", img: "https://images.pexels.com/photos/133069/pexels-photo-133069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", status: "Reserved" },
    { name: "Winston", gender: "Male", color: "White & Red", price: "$6,200", img: "https://images.pexels.com/photos/40986/dog-bulldog-white-tongue-40986.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", status: "Available" },
    { name: "Matilda", gender: "Female", color: "Fawn", price: "$5,000", img: "https://images.pexels.com/photos/1023018/pexels-photo-1023018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", status: "Available" },
  ];

  return (
    <section id="pups" className="py-32 px-6 bg-parchment">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-sage font-bold tracking-[0.3em] text-xs uppercase mb-4 block">New Arrivals</span>
            <h2 className="text-6xl md:text-8xl font-display text-saddle leading-none">The Future <br /><span className="italic font-light">Nobles.</span></h2>
          </div>
          <p className="max-w-xs text-saddle/60 text-sm leading-relaxed mb-4">
            Our current litter features exceptional bone structure and clear breathing pathways. Each pup comes with a 2-year health guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {pups.map((pup, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bento-card relative group ${i === 1 ? 'md:col-span-2' : ''}`}
            >
              <div className="relative aspect-[3/4] md:aspect-auto md:h-full min-h-[400px]">
                <img src={pup.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={pup.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-saddle/80 via-transparent to-transparent" />
                
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${pup.status === 'Available' ? 'bg-sage text-parchment' : 'bg-parchment/20 text-parchment'}`}>
                    {pup.status}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-3xl font-display text-parchment">{pup.name}</h3>
                      <p className="text-parchment/60 text-xs uppercase tracking-widest">{pup.gender} • {pup.color}</p>
                    </div>
                    <span className="text-parchment font-display text-xl">{pup.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ApplicationSection = () => (
  <section id="apply" className="py-32 px-6 bg-saddle text-parchment relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-sage/5 -skew-x-12 translate-x-1/2" />
    
    <div className="max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-display mb-6">Join the Family</h2>
        <p className="text-parchment/60 max-w-lg mx-auto uppercase tracking-widest text-[10px] leading-loose">
          We are highly selective with our placements. <br />Please provide detailed information about your home environment.
        </p>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-sage font-bold">Full Name</label>
          <input type="text" className="w-full bg-white/5 border-b border-parchment/20 py-4 outline-none focus:border-sage transition-colors font-display text-xl" placeholder="Johnathan Sterling" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-sage font-bold">Email Address</label>
          <input type="email" className="w-full bg-white/5 border-b border-parchment/20 py-4 outline-none focus:border-sage transition-colors font-display text-xl" placeholder="j.sterling@estate.com" />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-sage font-bold">The Environment</label>
          <textarea className="w-full bg-white/5 border-b border-parchment/20 py-4 outline-none focus:border-sage transition-colors font-display text-xl h-32" placeholder="Tell us about your home and experience with the breed..." />
        </div>
        <div className="md:col-span-2 flex justify-center mt-8">
          <button className="px-16 py-6 border-2 border-sage text-sage font-bold uppercase tracking-[0.3em] text-xs hover:bg-sage hover:text-saddle transition-all duration-500">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-parchment pt-32 pb-12 px-6 border-t border-saddle/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-2">
          <div className="flex flex-col mb-8">
            <span className="font-display text-4xl font-black tracking-tighter text-saddle uppercase leading-none">Noble</span>
            <span className="font-display text-sm tracking-[0.5em] text-saddle/60 uppercase -mt-1">Wrinkle Ranch</span>
          </div>
          <p className="text-saddle/60 max-w-sm text-sm leading-loose">
            Dedicated to the pursuit of the perfect Bulldog since 1994. Based in the heart of Haslet, Texas. Shipping available to select domestic and international estates.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-8 text-sage">Navigation</h4>
          <ul className="space-y-4 text-sm text-saddle/80 uppercase tracking-tighter font-medium">
            <li><a href="#" className="hover:text-sage transition-colors">The Heritage</a></li>
            <li><a href="#" className="hover:text-sage transition-colors">Our Sires</a></li>
            <li><a href="#" className="hover:text-sage transition-colors">Available Pups</a></li>
            <li><a href="#" className="hover:text-sage transition-colors">Health Guarantees</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-8 text-sage">Contact</h4>
          <ul className="space-y-4 text-sm text-saddle/80 uppercase tracking-tighter font-medium">
            <li className="flex items-center gap-2"><MapPin size={14} /> Haslet, TX</li>
            <li className="flex items-center gap-2"><Mail size={14} /> hello@noblewrinkle.com</li>
            <li className="flex items-center gap-2"><Instagram size={14} /> @noblewrinkleranch</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-saddle/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest text-saddle/40">© 2024 Noble Wrinkle Ranch. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="text-[10px] uppercase tracking-widest text-saddle/40 hover:text-sage transition-colors">Privacy</a>
          <a href="#" className="text-[10px] uppercase tracking-widest text-saddle/40 hover:text-sage transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <HeritageStory />
      <PedigreeTree />
      <PuppyGrid />
      <ApplicationSection />
      <Footer />
      
      {/* Aesthetic Accents */}
      <div className="fixed top-0 right-0 w-px h-screen bg-saddle/5 z-0 pointer-events-none" />
      <div className="fixed top-0 left-0 w-px h-screen bg-saddle/5 z-0 pointer-events-none" />
    </div>
  );
}