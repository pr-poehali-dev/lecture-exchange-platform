import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LectureCard from "@/components/LectureCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const mockLectures = [
  {
    title: "Основы React и современной разработки",
    author: "Анна Сидорова",
    duration: "2:45:00",
    views: 12500,
    rating: 4.8,
    tags: ["React", "JavaScript", "Frontend"],
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    type: "video" as const,
  },
  {
    title: "Дизайн-системы в продуктовых командах",
    author: "Максим Петров",
    duration: "1:30:00",
    views: 8300,
    rating: 4.9,
    tags: ["UX/UI", "Дизайн", "Система"],
    thumbnail:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
    type: "presentation" as const,
  },
  {
    title: "Машинное обучение для начинающих",
    author: "Елена Козлова",
    duration: "45 стр",
    views: 15200,
    rating: 4.7,
    tags: ["ML", "Python", "Данные"],
    thumbnail:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
    type: "pdf" as const,
  },
  {
    title: "Основы маркетинга в digital среде",
    author: "Игорь Волков",
    duration: "3:20:00",
    views: 9800,
    rating: 4.6,
    tags: ["Маркетинг", "Digital", "SMM"],
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    type: "video" as const,
  },
  {
    title: "Финансовая грамотность и инвестиции",
    author: "Мария Новикова",
    duration: "2:15:00",
    views: 21400,
    rating: 4.9,
    tags: ["Финансы", "Инвестиции", "Экономика"],
    thumbnail:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    type: "video" as const,
  },
  {
    title: "Психология общения и переговоров",
    author: "Дмитрий Смирнов",
    duration: "67 стр",
    views: 11200,
    rating: 4.8,
    tags: ["Психология", "Коммуникация", "Бизнес"],
    thumbnail:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
    type: "pdf" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      <main className="container px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Популярные лекции</h2>
            <p className="text-muted-foreground">
              Лучшие материалы от экспертов в различных областях
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Icon name="Filter" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Grid" size={20} />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockLectures.map((lecture, index) => (
            <LectureCard key={index} {...lecture} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            Показать больше лекций
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Search" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Находите знания</h3>
            <p className="text-muted-foreground">
              Ищите лекции по любым темам с помощью умного поиска
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Play" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Учитесь онлайн</h3>
            <p className="text-muted-foreground">
              Смотрите лекции в удобном плеере с возможностью заметок
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="GraduationCap" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Делитесь опытом</h3>
            <p className="text-muted-foreground">
              Загружайте свои лекции и помогайте другим учиться
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
