import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, MapPin, Image as ImageIcon } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  description: string;
  category: "achievement" | "event" | "milestone";
  date?: string;
  location?: string;
}

// Placeholder gallery items - replace with your actual images
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    title: "Marketing Summit 2024",
    description: "Speaking at the Annual Digital Marketing Summit about performance strategies",
    category: "event",
    date: "March 2024",
    location: "Bangalore",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    title: "Best Campaign Award",
    description: "Recognized for outstanding ROI achievement in Q4 campaigns",
    category: "achievement",
    date: "December 2023",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
    title: "Team Workshop",
    description: "Conducting a hands-on workshop on marketing automation",
    category: "event",
    date: "January 2024",
    location: "Mumbai",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    title: "Conference Speaker",
    description: "Presenting case studies at the Growth Marketing Conference",
    category: "event",
    date: "February 2024",
    location: "Delhi",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    title: "100+ Clients Milestone",
    description: "Celebrating the milestone of serving over 100 clients",
    category: "milestone",
    date: "November 2023",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
    title: "Meta Partner Certification",
    description: "Achieved Meta Business Partner certification",
    category: "achievement",
    date: "October 2023",
  },
];

const categoryColors = {
  achievement: "bg-primary/10 text-primary border-primary/20",
  event: "bg-accent/10 text-accent border-accent/20",
  milestone: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
};

const categoryIcons = {
  achievement: Award,
  event: Calendar,
  milestone: ImageIcon,
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Gallery | Prateek Prakash - Achievements & Events</title>
        <meta name="description" content="Browse through achievements, event visits, milestones, and memorable moments from Prateek Prakash's journey in performance marketing." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-16 pb-8 md:pt-24 md:pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <span className="text-primary text-sm uppercase tracking-wider font-medium mb-4 block">Gallery</span>
              <h1 className="section-heading mb-6">
                Moments &{" "}
                <span className="text-gradient-primary">Milestones</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A visual journey through achievements, events, and memorable moments 
                in my marketing career.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {["all", "achievement", "event", "milestone"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1) + "s"}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Carousel Gallery */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {filteredItems.map((item) => {
                  const CategoryIcon = categoryIcons[item.category];
                  return (
                    <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="metric-card overflow-hidden cursor-pointer group hover:border-primary/50 transition-all duration-300">
                            <div className="relative aspect-[4/3] overflow-hidden">
                              <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <Badge 
                                variant="outline" 
                                className={`absolute top-3 right-3 ${categoryColors[item.category]}`}
                              >
                                <CategoryIcon size={12} className="mr-1" />
                                {item.category}
                              </Badge>
                            </div>
                            <div className="p-5">
                              <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                                {item.description}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                {item.date && (
                                  <span className="flex items-center gap-1">
                                    <Calendar size={12} />
                                    {item.date}
                                  </span>
                                )}
                                {item.location && (
                                  <span className="flex items-center gap-1">
                                    <MapPin size={12} />
                                    {item.location}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0 overflow-hidden">
                          <div className="relative">
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full max-h-[70vh] object-contain bg-black"
                            />
                          </div>
                          <div className="p-6">
                            <Badge 
                              variant="outline" 
                              className={`mb-3 ${categoryColors[item.category]}`}
                            >
                              <CategoryIcon size={12} className="mr-1" />
                              {item.category}
                            </Badge>
                            <h2 className="font-display text-2xl font-bold mb-2">{item.title}</h2>
                            <p className="text-muted-foreground mb-4">{item.description}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              {item.date && (
                                <span className="flex items-center gap-1.5">
                                  <Calendar size={14} />
                                  {item.date}
                                </span>
                              )}
                              {item.location && (
                                <span className="flex items-center gap-1.5">
                                  <MapPin size={14} />
                                  {item.location}
                                </span>
                              )}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="relative inset-0 translate-y-0 w-12 h-12" />
                <CarouselNext className="relative inset-0 translate-y-0 w-12 h-12" />
              </div>
            </Carousel>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <ImageIcon size={48} className="mx-auto text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground">No items found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-card border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground mb-2">Want to add your event to my journey?</p>
            <a href="/contact" className="text-primary hover:underline font-medium">
              Get in touch →
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Gallery;
